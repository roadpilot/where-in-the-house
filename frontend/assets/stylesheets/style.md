/* body {
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-weight: 300;
  line-height: 1.6em;
  font-size: 1.3em;
}

a {
  color: #97659;
}

input {
  font-size: 1.5em;
}

.container {
  width: 960px;
  margin: auto;
  margin-top: 50px;
}

ul {
  padding-left: 20px;
}

.delete-note-link {
  color: red;
}

#editable {
  border: 1px solid black;
  padding: 20px;
}

#notes-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
} */

html {
    height: 100%;
}
body {
    height: 100%;
    margin: 0;
    min-width: 300px;
    background-repeat: no-repeat;
    background-attachment: fixed;
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000533+0,2989d8+100,7db9e8+100 */
background: #000533; /* Old browsers */
background: -moz-linear-gradient(top,  #000533 0%, #2989d8 100%, #7db9e8 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #000533 0%,#2989d8 100%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #000533 0%,#2989d8 100%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000533', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */

}
.centered {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.navigation {
  position: fixed;
  top: 50%;
  left: 30%;
  transform: translate3d(-50%, -50%, -50%);
  z-index: 3;
}

 .square-box{width:600px;}
 .square-box .top{background:url('http://i.imgur.com/KRjgdhP.jpg') no-repeat 0 0; height:27px; float:left; width:100%;}
 .square-box .content{background:url('http://i.imgur.com/zjNrRfD.jpg') repeat-y 0 0; min-height:100px; padding:0 5%;  float:left; width:90%;}
 .square-box .bottom{background:url('http://i.imgur.com/mOXsXSQ.jpg') no-repeat 0 0;  height:27px;  float:left; width:100%;}

.shadow {
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
  border-radius:4%; /*supported by all latest Browser*/
  -moz-border-radius:4%; /*For older Browser*/
  -webkit-border-radius:4%;/*For older Browser*/
  background-color:whitesmoke;
  width:40%;
  height:40%;
  position: fixed;
  top: 75%;
}

.content-div{
  margin-left:20px;
}

html {
  height: 100%;
}

/* html,
.root {
  padding: 0;
  margin: 0;
  font-size: 18px;
} */

html {
    height: 100%;
}
body {
    height: 100%;
    margin: 0;
    min-width: 300px;
    background-repeat: no-repeat;
    background-attachment: fixed;
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000533+0,2989d8+100,7db9e8+100 */
background: #000533; /* Old browsers */
background: -moz-linear-gradient(top,  #000533 0%, #2989d8 100%, #7db9e8 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #000533 0%,#2989d8 100%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #000533 0%,#2989d8 100%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000533', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */

}

body,button,textarea,input[type="text"] {
  font: menu;
  font-size: 1rem;
  line-height: 1.4;
  padding: 0;
  margin: 0;
}

.centered {
  position: fixed;
  top: 40%;
  left: 45%;
  transform: translate(-50%, -50%);
}

.navigation {
  width:100%;
  position: fixed;
  top: 40%;
  _left: 35%;
  padding-left:10px;
  transform: translate3d(-50%, -50%, -50%);
  z-index: 3;
  text-align: center;
  style="min-width:200px"
}

// .square-box{width:600px;}
// .square-box .top{background:url('http://i.imgur.com/KRjgdhP.jpg') no-repeat 0 0; height:27px; float:left; width:100%;}
// .square-box .content{background:url('http://i.imgur.com/zjNrRfD.jpg') repeat-y 0 0; min-height:100px; padding:0 5%;  float:left; width:90%;}
// .square-box .bottom{background:url('http://i.imgur.com/mOXsXSQ.jpg') no-repeat 0 0;  height:27px;  float:left; width:100%;}

.shadow {
  -moz-box-shadow:    2px 2px 2px 2px #ccc;
  -webkit-box-shadow: 2px 2px 2px 2px #ccc;
  box-shadow:         2px 2px 2px 2px #ccc;
  border-radius:0%; /*supported by all latest Browser*/
  -moz-border-radius:4%; /*For older Browser*/
  -webkit-border-radius:4%;/*For older Browser*/
}

.wrapper{
  width:100%;
  height:100%;
  border:5px solid black;
}

.content{
  background-color:whitesmoke;
  width:400px;
  position: fixed;
  top:80%;
  /* padding-left:20px;
  padding-bottom:20px;
  padding-top:20px;
  height:40%;
  /* height:10%; */
  /* position:fixed;
  top: 50%;
  left: 30%; */
  /* overflow:hidden;  */
  /* overflow-y:auto; */ */
}

input[type="button"] {
  font: menu;
  font-size: 1.2rem;
  line-height: 1.4;
  padding: 5px;
  margin: 0;
}

input[type="button"]:disabled {
  background: silver;
}

details[open] summary ~ * {
  animation: open 1.0s ease-in-out;
}

@keyframes open {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

details {
  padding-bottom: 2px;
}

details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 95%;
  padding-bottom: 0.5rem 0;
  border-top: 1px solid black;
  position: relative;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 300;
  list-style: none;
  padding-bottom:5px;
}

details summary:after {
  content: "+";
  color: black;
  position: absolute;
  font-size: 1.75rem;
  line-height: 0;
  margin-top: 0.75rem;
  right: 0;
  font-weight: 200;
  transform-origin: center;
  transition: 200ms linear;
}
details[open] summary:after {
  transform: rotate(45deg);
  font-size: 2rem;
}
details summary {
  outline: 0;
}
details p {
  font-size: 0.95rem;
//  margin: 0 0 1rem;
  padding-top: 1rem;
}

  <style_>
    .wrapper{
  /* width:100%;
  horizontal-align:center;
  height:100%; */
  display:flex;
  justify-content: center;
}

.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
  </style>
