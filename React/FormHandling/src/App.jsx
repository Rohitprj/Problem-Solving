import React from "react";

export default function App() {
  const data = {
    name: "Rohit",
    age: 20,
    course: "BCA",
  };
  localStorage.setItem("name", "Rohit");
  localStorage.setItem("name1", "Ahmed");
  localStorage.setItem("name2", "Nikhil");
  localStorage.setItem("My-self", JSON.stringify(data));
  const name = JSON.parse(localStorage.getItem("My-self"));
  console.log(name);

  //   localStorage.removeItem("name");
  //   localStorage.clear();

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}
