import React from "react";

export default function Profile({ dev, name }) {
  console.log("Hi i am prop", dev, name);

  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <p>Hello i am {dev}</p>
      <p>Hello i am {name}</p>
    </div>
  );
}
