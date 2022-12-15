const isAutomaticallyActivated = false

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ isAutomaticallyActivated })
})
