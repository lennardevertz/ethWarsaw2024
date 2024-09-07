import { sendToContentScript } from "@plasmohq/messaging"

export { }

chrome.action.onClicked.addListener((tab) => {
  sendToContentScript({
    name: "EXTENSION_CLICKED"
  })
})
