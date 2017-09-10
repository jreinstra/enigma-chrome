chrome.webRequest.onHeadersReceived.addListener(
    function(info) {
        var headers = info.responseHeaders;
        for (var i = headers.length - 1; i >= 0; --i) {
            var header = headers[i].name.toLowerCase();
            if (header == 'x-frame-options' || header == 'frame-options') {
                headers.splice(i, 1); // Remove header
            }
        }
        return {
            responseHeaders: headers
        };
    }, {
        urls: ['*://*/*'], // Pattern to match all http(s) pages
        types: ['sub_frame']
    }, ['blocking', 'responseHeaders']
);

chrome.browserAction.onClicked.addListener(
    function(tab) {
            var success_func = function(data) {
                chrome.tabs.update(tab.id, {url: "http://enigma.joseb.me/view"});
            };
            
            var error_func = function(data) {
                console.log("ERROR:", data);
            };
            

            var parser = document.createElement('a');
            parser.href = tab.url;
            if (parser.pathname != "/") {
                $.ajax("https://enigma.joseb.me/analyze", {
                    "data": JSON.stringify({
                        "site": tab.url,
                        "headline": tab.title
                    }),
                    "type": "POST",
                    "processData": false,
                    "success": success_func,
                    "error" : error_func,
                    "contentType": "application/json"
                });
            }


    });