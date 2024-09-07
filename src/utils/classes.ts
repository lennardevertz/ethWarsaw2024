import { twMerge } from 'tailwind-merge';
import {clsx, type ClassValue} from 'clsx';

export const classes = (...arguments_: ClassValue[]) => {
  return twMerge(clsx(arguments_));
};
