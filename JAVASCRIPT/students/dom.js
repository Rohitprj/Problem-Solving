// console.log("Hello")

// const btn = (document.getElementById("btn").innerText = "ME CLICK");

// console.log(document.getElementById("btn").tagName);

// console.log("THIS :=", btn);

// console.log(document.body.children);

// const para = document.getElementsByClassName("hello")[0];
// console.log(para);

// const getElem = document.querySelector(".hello").innerText;

// console.log("TAKE ELEM", getElem);

// console.log(document.children[0]);

// const button = (document.getElementById("btn").innerText = "ME click");
// console.log("This is my btn", button);

// const btn = (document.getElementById("btn").innerText = "ME CLICK");

// console.log("ACCESSED BTN", btn);

const btn = document.querySelector(".hello");

btn.style.backgroundColor = "red";
btn.style.fontSize = "30px";

console.log(btn);

const newId = btn.getAttribute("class");

console.log(newId);

btn.setAttribute("class", "by");

// console.log(btn.getAttribute("id"));
// btn.setAttribute("id", "btn1");

// btn.style.backgroundColor = "green";

// const cls = document.getElementsByClassName("hello")[0];

// console.log(cls);
