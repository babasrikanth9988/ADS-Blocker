// Initialize counter
let adBlockCounter = 0;

// Listen for web requests
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes("ads")) {
      // Increment counter
      adBlockCounter++;
      // Log to console (optional)
      console.log("Blocked ad:", details.url);
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// Message listener for popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.getAdBlockCount) {
    // Send response with ad block count
    sendResponse({ adBlockCount: adBlockCounter });
  }
});
