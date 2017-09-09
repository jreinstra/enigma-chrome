document.open("text/html", "replace");



var url = window.location.href;
var html = '<div style="width: 50% !important; height:100%;"> <iframe id="left" style="width: 100%; height: 100%;" src="' + url + '" onload="didLoadFrame()"></iframe></div> <div style="width: 50% !important;"></div>';


document.getElementById("left").onload = function () {
		a = document.getElementById("left").contentDocument.getElementsByTagName('a');
	alert(a.length);
	for (var i = 0; i < a.length; i++) {
	    a[i].onclick = function () {
	    	alert("hello");
	        parent.iframeLinkClicked(this.href);
	        return false;
	    };
	};
}


document.write(html);
document.close();

