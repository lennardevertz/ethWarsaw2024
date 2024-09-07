import { COMMAND_BUS_REQUEST_MESSAGE, COMMAND_MAP } from 'commands';
import { EXTENSION_BUTTON_CLICKED } from 'consts';

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.type === COMMAND_BUS_REQUEST_MESSAGE) {
    const serializedCommand = request.data;
    const commandDefinition = COMMAND_MAP[serializedCommand.name];
    if (!commandDefinition) {
      const error = new Error(
        `Missing command definition for ${serializedCommand.name}. Make sure it's added to COMMAND_MAP`,
      );
      throw error;
    }
    const command = new commandDefinition(serializedCommand.payload);
    command.id = serializedCommand.id;

    command
      .handle()
      .then((response: unknown) => {
        return sendResponse(response);
      })
      .catch(console.error);
  }

  return true;
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs
    .sendMessage(tab?.id ?? 0, {
      type: EXTENSION_BUTTON_CLICKED,
    })
    .catch(console.error);
});
