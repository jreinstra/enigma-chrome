//alert("im pickle rick");

//alert(document.getElementsByTagName("title")[0].innerText);


document.open("text/html", "replace");

var url = window.location.href;
var html = '<div style="width: 50% !important; height:100%;"> <iframe style="width: 100%; height: 100%;" src="' + url + '"</div> <div style="width: 50% !important;"></div>';
document.write(html);
document.close();
