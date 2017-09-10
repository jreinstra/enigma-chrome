chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    for (var i = 0; i < details.responseHeaders.length; ++i) {
        var lowercaseHeaderName = details.responseHeaders[i].name.toLowerCase();
        
      if (lowercaseHeaderName== 'x-frame-options') {
        details.responseHeaders.splice(i, 1);
      } else if (details.responseHeaders[i].name.toLowerCase() == 'content-security-policy') {
     //     details.responseHeaders.splice(i, 1);
      }
        return {
          responseHeaders: details.responseHeaders
        };
    }

  }, {
    urls: ["https://*.vox.com/*", "https://*.huffingtonpost.com/*", "http://*.breitbart.com/*", "https://*.theblaze.com/*", "https://*.foxnews.com/*", "https://*.cnn.com/*", "https://*.wsj.com/*", "https://*.realclearpolitics.com/*", "https://*.forbes.com/*", "https://*.nbcnews.com/*", "https://*.cbsnews.com/*", "https://*.bloomberg.com/*", "https://*.politico.com/*", "https://*.thewashingtonpost.com/*", "https://*.nytimes.com/*", "https://*.nypost.com/*", "https://*.bluelivesmatter.blue/*"]
  }, ["blocking", "responseHeaders"]);
