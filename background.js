chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
//    details.responseHeaders.push({
//        name: 'Content-Security-Policy',
//        value: 'default-src * \'unsafe-inline\' \'unsafe-eval\''
//    });
    for (var i = 0; i < details.responseHeaders.length; ++i) {
      if (details.responseHeaders[i].name.toLowerCase() == 'x-frame-options') {
        details.responseHeaders.splice(i, 1);
      }
    }
        return {
          responseHeaders: details.responseHeaders
        };
  }, {
    urls: ["https://*.vox.com/*", "https://*.huffingtonpost.com/*", "https://*.breitbart.com/*", "https://*.theblaze.com/*", "https://*.foxnews.com/*", "https://*.cnn.com/*", "https://*.wsj.com/*", "https://*.realclearpolitics.com/*", "https://*.forbes.com/*", "https://*.nbcnews.com/*", "https://*.cbsnews.com/*", "https://*.bloomberg.com/*", "https://*.politico.com/*", "https://*.thewashingtonpost.com/*", "https://*.nytimes.com/*", "https://*.nypost.com/*", "https://*.bluelivesmatter.blue/*"]
  }, ["blocking", "responseHeaders"]);
