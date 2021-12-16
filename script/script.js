var xhr = new XMLHttpRequest(); 

xhr.onreadystatechange = function () {
    if( xhr.readyState ==  4 && xhr.status == 200 ) {
        res = xhr.response;
        res = JSON.parse(res);
        console.log(res)
    }
}

xhr.open("GET", "URL_AQUI");
xhr.send();