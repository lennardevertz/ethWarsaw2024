import { sendToContentScript } from '@plasmohq/messaging';

export {};

chrome.action.onClicked.addListener(() => {
  sendToContentScript({
    name: 'EXTENSION_CLICKED',
  });
});
