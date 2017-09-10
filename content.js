

document.addEventListener("DOMContentLoaded", function(event) { 
    
    var success_func = function(data) {
    console.log(data);
    var url = data.url;
    if(url != false) {
        window.location.href = "https://enigma.joseb.me/view"
    }
}

    
if (window.location.pathname != "/") {
    $.ajax("https://enigma.joseb.me/analyze", {
    "data": JSON.stringify({"site": window.location.href, "headline": document.getElementsByTagName("title")[0].innerText}),
    "type": "POST",
    "processData": false,
    "success": success_func,
    "contentType": "application/json"
});
}
    

});