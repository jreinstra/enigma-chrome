document.open("text/html", "replace");

function updateUrl(url, headline) {
    console.log(url, headline);
    $.post("http://enigma.joseb.me/analyze", JSON.stringify({"site": url, "headline": headline}), function(data) {
        console.log(data);
    })
    //$("#right").attr("src"
}


var url = window.location.href;
var html = '<div style="width: 50% !important; height:100%;"> <iframe id="left" style="width: 100%; height: 100%;" src="' + url + '"></iframe></div> <div style="width: 50% !important;"><iframe id="right" style="width: 100%; height: 100%;"></iframe></div>';


document.write(html);

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("left").onload = function () {
        a = document.getElementById("left").contentDocument.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            a[i].onclick = function () {
                updateUrl(a.href, document.getElementById("left").contentDocument.title.innerHTML);
                return false;
            };
        };
}
});


document.close();
