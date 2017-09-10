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
                alert("test");
                console.log(data);
                var url = data.url;
                if (url != false) {
                    window.location.href = "https://enigma.joseb.me/view";
                } else {
                    alert("No articles could be found.");
                }
            };
            
            var error_func = function(data) {
                alert(data);
            };
            


            if (window.location.pathname != "/") {
                $.ajax("https://enigma.joseb.me/analyze", {
                    "data": JSON.stringify({
                        "site": window.location.href,
                        "headline": document.getElementsByTagName("title")[0].innerText
                    }),
                    "type": "POST",
                    "processData": false,
                    "success": success_func,
                    "error" : error_func,
                    "contentType": "application/json"
                });
            }


    });