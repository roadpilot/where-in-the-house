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
        fetch(`${BASE_URL}/users/21`)
        .then(function (response) {
            // The API call was successful!
            return response.text();
        }).then(function (html) {
            // This is the HTML from our response as a text string
            // console.log(html);
            c.innerHTML = html
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        })
    }
    function search(){
        c.innerHTML = "search"
    }
    function browse(){
        fetch(`${BASE_URL}/items`)
        .then(function (response) {
            // The API call was successful!
            return response.text();
        }).then(function (html) {
            // This is the HTML from our response as a text string
            console.log(html);
            c.innerHTML = html
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        })
    }

});


