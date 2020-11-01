document.addEventListener("DOMContentLoaded", () => {
	console.log('index.js is loaded ...')

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
        
    }
});

const BASE_URL = "http://localhost:3000"

