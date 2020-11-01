document.addEventListener("DOMContentLoaded", () => {
	console.log('index.js is loaded ...')
    const c = document.getElementById('content')
    const BASE_URL = "http://localhost:3000"

    document.getElementById("btn1").addEventListener("click", (e) => {
    putAway()
    });

    document.getElementById("btn2").addEventListener("click", (e) => {
    search()
    });

    document.getElementById("btn3").addEventListener("click", (e) => {
    browse()
    });

    function putAway(){
        c.innerHTML = "putAway"
    }
    function search(){
        c.innerHTML = "search"
    }
    function browse(){
        c.innerHTML = "browse"
    }
});


