document.open("text/html", "replace");

function updateUrl(url, headline) {
    console.log(url, headline);
    $.post("http://enigma.joseb.me/analyze", {"site": url, "headline": headline}, function(data) {
        console.log(data);
    }, function(err) {
        console.log(err);
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
