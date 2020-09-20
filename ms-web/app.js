'use strict';

console.log('here\'s a hidden message');
const bodycolor = document.body.style;

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
  if (bodycolor.backgroundColor =="red"){
    bodycolor.backgroundColor = "white"
  }
  else{
    bodycolor.backgroundColor ="red";
  }

}
