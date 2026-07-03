import React from "react";

export default function App() {
  const data = {
    name: "Rohit",
    age: 20,
    course: "BCA",
  };
  localStorage.setItem("name", JSON.stringify(data));
  const name = localStorage.getItem("name");
  console.log(typeof name);

  // localStorage.setItem("name", "Rohit");
  // localStorage.setItem("name1", "Harsh");
  // const name = localStorage.getItem("name");
  // localStorage.removeItem("name1");
  // localStorage.clear();
  // localStorage.setItem("My-self", JSON.stringify(data));
  // const name = JSON.parse(localStorage.getItem("My-self"));
  // console.log(name);

  //   localStorage.removeItem("name");
  //   localStorage.clear();

  return (
    <div>
      <p>Hello{name}</p>
    </div>
  );
}
