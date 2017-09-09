document.open("text/html", "replace");



var url = window.location.href;
var html = '<div style="width: 50% !important; height:100%;"> <iframe id="left" style="width: 100%; height: 100%;" src="' + url + '" onload="didLoadFrame()"></iframe></div> <div style="width: 50% !important;"></div>';


document.write(html);

document.addEventListener("DOMContentLoaded", function(event) { 
  	document.getElementById("left").onload = function () {
		a = document.getElementById("left").contentDocument.getElementsByTagName('a');
	for (var i = 0; i < a.length; i++) {
	    a[i].onclick = function () {
	    	alert("hello");
	        parent.iframeLinkClicked(this.href);
	        return false;
	    };
	};
}
});


document.close();


