import { EXTENSION_BUTTON_CLICKED } from 'consts';
import { COMMAND_BUS_REQUEST_MESSAGE, COMMAND_MAP } from 'commands';

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const commandRes = command.handle() as any;
    commandRes
      .then((res: unknown) => {
        return sendResponse(res);
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
