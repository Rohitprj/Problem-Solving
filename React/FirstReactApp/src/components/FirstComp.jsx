import React from "react";

export function FirstComp({ name }) {
  return (
    <div>
      <p>my name is {name} kumar</p>
      <p>-------------------------------------------</p>
    </div>
  );
}

export function SecondComp({ name, course }) {
  console.log(name);
  return (
    <div>
      <p>
        Hello i am prop  and my course is {name, course}
      </p>
    </div>
  );
}
