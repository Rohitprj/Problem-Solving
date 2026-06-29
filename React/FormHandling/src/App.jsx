import React from "react";
import "./App.css";

function App() {
  function form(e) {
    e.preventDefault();
    console.log("form submitted");
  }
  return (
    <>
      {/* <p>React</p> */}
      <form onSubmit={(e) => form(e)}>
        <input type="text" placeholder="Email" />
        <br />
        <input type="text" placeholder="Password" />
        <br />
        <button>Login</button>
      </form>
    </>
  );
}

export default App;
