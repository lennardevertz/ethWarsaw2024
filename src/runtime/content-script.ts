import {
  COMMAND_BUS_REQUEST_MESSAGE,
  COMMAND_BUS_RESPONSE_MESSAGE,
  CommandResponse,
  onWindowMessage,
  SerializedCommand,
} from 'commands';

const injectScript = () => {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('webpage-script.js');
  script.dataset.testid = 'eth-warsaw-injected-script';
  script.id = chrome.runtime.id;
  document.body.append(script);
};

const bridgeCommunication = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onWindowMessage<SerializedCommand<any>>(
    COMMAND_BUS_REQUEST_MESSAGE,
    (command) => {
      chrome.runtime.sendMessage(
        {
          type: COMMAND_BUS_REQUEST_MESSAGE,
          data: command,
        },
        (response) => {
          const messageDetail: CommandResponse<unknown> = {
            response,
            commandId: command.id,
          };

          const message = {
            type: COMMAND_BUS_RESPONSE_MESSAGE,
            detail: messageDetail,
          };

          window.postMessage(message);
        },
      );
    },
  );
};

injectScript();
bridgeCommunication();
