document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggleButton');
  toggleButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({toggleAdBlocker: true});
  });

  // Get ad block count
  chrome.runtime.sendMessage({getAdBlockCount: true}, function(response) {
    if (response && response.adBlockCount) {
      document.getElementById('adBlockCount').textContent = response.adBlockCount;
    }
  });
});
