chrome.contextMenus.create({
  id: "ask-chatgpt",
  title: "Ask ChatGPT",
  contexts: ["all"],
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "ask-chatgpt") {
    chrome.tabs.sendMessage(tab.id, { type: "ASK_CHATGPT" });
  }
});
