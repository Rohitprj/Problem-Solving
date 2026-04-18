import React from "react";

export default function App() {
  function value(val) {
    console.log(val);
  }
  const wheel = (value) => {
    console.log("wheel", value);
  };
  return (
    <div
      onWheel={(element) => wheel(element.deltaY)}
      style={{ height: "1000px" }}
    >
      <p>Main</p>
      <input
        type="text"
        placeholder="Enter here.."
        onChange={(element) => value(element.target)}
      />
    </div>
  );
}
