import { EIP1193Provider } from 'mipd';

declare global {
  interface Window {
    ethereum?: EIP1193Provider;
  }
  interface WindowEventMap {
    'eip6963:announceProvider': CustomEvent;
  }
}
