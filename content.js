document.open("text/html", "replace");

function updateUrl(url, headline) {
    console.log(url, headline);
    var success_func = function(data) {
        console.log(data);
        var url = data.url;
        if(url === false) url = "https://example.com/";
        $("#right").attr("src", url.replace("http://", "https://"));
    }
    $.ajax("https://enigma.joseb.me/analyze", {
        "data": JSON.stringify({"site": url, "headline": headline}),
        "type": "POST",
        "processData": false,
        "success": success_func,
        "contentType": "application/json"
    });
}


var url = window.location.href;
var html = '<div style="width: 50% !important; height:100%;"> <iframe id="left" style="width: 100%; height: 100%;" src="' + url + '"></iframe></div> <div style="width: 50% !important;"><iframe id="right" style="width: 100%; height: 100%;"></iframe></div>';


document.write(html);

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("left").onload = function () {
        var contentDoc = document.getElementById("left").contentDocument;
        updateUrl(window.location.href, contentDoc.getElementsByTagName("title")[0].innerText);
        a = contentDoc.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            a[i].onclick = function (e) {
                console.log(e, e.parent);
                updateUrl(e.target.href, e.target.innerText);
                return true;
            };
        };
}
});


document.close();
