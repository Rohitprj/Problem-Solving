/*

Events in JS
The change in the state of an object is known as an Event
Events are fired to notify code of "interesting changes" that may affect code execution.

> Mouse events (click, double click etc.)
> Keyboard events (keypress, keyup, keydown)
> Form events (submit etc.)
> Print event & many more


Event Listeners

node.addEventListener( event, callback ) 
node.removeEventListener( event, callback ) 

*/

let btn = document.querySelector("#btn");

// btn.onclick = () => {
//   console.log("We are in js file");
//   let a = 10;
//   a++;
//   console.log(a);
// };

// let box = document.querySelector("#box");

// box.onmouseover = (event) => {
//   console.log(event);
//   console.log(event.type);
//   console.log("inside box in js file");
// };

let a = btn.addEventListener("click", () => {
  console.log("I am an event listener-a");
});
let b = () => {
  console.log("I am an event listener-b");
};

btn.addEventListener("click", b);
let c = btn.addEventListener("click", () => {
  console.log("I am an event listener-c");
});

btn.removeEventListener("click", b);
