import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

import {
  COMMAND_BUS_REQUEST_MESSAGE,
  COMMAND_BUS_RESPONSE_MESSAGE,
} from './constants';
import { onWindowMessage } from './on-window-message';

export interface CommandResponse<ExpectedResponse> {
  response: ExpectedResponse;
  commandId: string;
}

export interface SerializedCommand<Payload> {
  id: string;
  name: string;
  payload: Payload;
}

export abstract class Command<Payload, ExpectedResponse> {
  public abstract readonly name: string;
  public abstract readonly payload: Payload;
  public id: string;

  constructor() {
    this.id = uuidv4();
  }

  public abstract handle(): Promise<ExpectedResponse>;

  public send(): Promise<ExpectedResponse> {
    // TODO: handle error
    return new Promise((resolve) => {
      window.postMessage({
        type: COMMAND_BUS_REQUEST_MESSAGE,
        detail: this.serialize(),
      });
      onWindowMessage<CommandResponse<ExpectedResponse>>(
        COMMAND_BUS_RESPONSE_MESSAGE,
        (detail, removeEventListener) => {
          if (detail.commandId !== this.id) {
            return;
          }
          resolve(detail.response);
          removeEventListener();
        },
      );
    });
  }

  public serialize(): SerializedCommand<Payload> {
    return { name: this.name, payload: this.payload, id: this.id };
  }
}

type CommandConstructor<Payload, Response> = new (
  parameters: Payload,
) => Command<Payload, Response>;

export const useCommandMutation = <Payload, Response>(
  commandConstructor: CommandConstructor<Payload, Response>,
) => {
  const mutationFunction = useCallback(
    (parameters: Payload) => {
      const command = new commandConstructor(parameters);
      return command.send();
    },
    [commandConstructor],
  );

  return useMutation({
    mutationFn: mutationFunction,
  });
};

interface CommandQueryProperties<Payload, Response, MappedResponse = Response> {
  command: Command<Payload, Response>;
  retry?: number;
  retryDelay?: number;
  refetchInterval?: number;
  select?: (response: Response) => MappedResponse;
  enabled?: boolean;
  staleTime?: number;
  placeholderData?: (previousData?: Response) => Response | undefined;
  queryKey?: string;
}

export const useCommandQuery = <
  Parameters,
  ExpectedResponse,
  MappedResponse = ExpectedResponse,
>({
  command,
  select,
  retry,
  retryDelay = 1000,
  staleTime,
  refetchInterval,
  placeholderData,
  enabled = true,
  queryKey,
}: CommandQueryProperties<Parameters, ExpectedResponse, MappedResponse>) => {
  const queryFunction = useCallback(() => {
    return command.send();
  }, [command]);

  const queryOptions = useMemo(() => {
    return {
      queryKey: queryKey? [queryKey] : [command.name, JSON.stringify(command.payload)],
      refetchInterval,
      retry,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      placeholderData: placeholderData as any,
      retryDelay: retryDelay,
      staleTime,
      enabled,
      select,
      queryFn: queryFunction,
    };
  }, [
    command.name,
    command.payload,
    refetchInterval,
    retry,
    placeholderData,
    retryDelay,
    staleTime,
    enabled,
    select,
    queryFunction,
  ]);

  return useQuery(queryOptions);
};
