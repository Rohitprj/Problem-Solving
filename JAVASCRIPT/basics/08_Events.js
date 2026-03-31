let btn = document.querySelector("#btn");

btn.onclick = () => {
  console.log("We are in js file");
  let a = 10;
  a++;
  console.log(a);
};

let box = document.querySelector("#box");

box.onmouseover = (event) => {
  console.log(event);
  console.log("inside box in js file");
};
