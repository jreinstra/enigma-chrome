//alert("im pickle rick");

//alert(document.getElementsByTagName("title")[0].innerText);

setTimeout(function() {
	var inner = document.getElementsByTagName("body")[0].innerHTML;
	console.log("inner:", inner);
	document.getElementsByTagName("body")[0].innerHTML = '<div style="width: 50% !important;">' + inner + '</div>' + '<div style="width: 50%;"></div>';
}, 10000);