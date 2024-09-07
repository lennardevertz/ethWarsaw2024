import { type ClassValue, clsx } from 'clsx';
import { type Context, useContext as useReactContext } from 'react';
import { twMerge } from 'tailwind-merge';

const useContext = <T>(context: Context<T>) => {
  const contextValue = useReactContext(context);

  if (!contextValue) {
    throw new Error('Tried to use context outside provider');
  }

  return contextValue;
};

export const createContextHook = <T>(context: Context<T>) => {
  return () => {
    return useContext(context);
  };
};

export const classes = (...arguments_: ClassValue[]) => {
  return twMerge(clsx(arguments_));
};

export const wait = (timeInMs: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMs);
  });
};
