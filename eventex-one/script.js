// begin sanity check
   console.log("Ready to Go!");  
// prepare desired element(s) with DOM
let entireBody = document.getElementById('body');
entireBody.style.backgroundColor = "orange";
   console.log("Backgroundcolor is white");
let onebutton = document.getElementById('onebutton');   
let twobutton = document.getElementById('twobutton');   
let threebutton = document.getElementById('threebutton');   

// add event listener(s) {
onebutton.addEventListener("mouseover", () => {
entireBody.style.backgroundColor = "red"
   console.log('BackgroundColor is Red');
});

twobutton.addEventListener("mouseover", () => {
entireBody.style.backgroundColor = "green"
   console.log('BackgroundColor is Green');
});

threebutton.addEventListener("mouseover", () => {
entireBody.style.backgroundColor = "blue"
   console.log('BackgroundColor is Blue');
});