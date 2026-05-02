import React from "react";
import { RxCross1 } from "react-icons/rx";

export default function Options({ setShow }) {
  return (
    <div className="absolute border-2 p-6 bg-blue-500 h-60 w-3xl">
      <p>Options</p>
      <button className="cursor-pointer" onClick={() => setShow(false)}>
        <RxCross1 size={30} />
      </button>
    </div>
  );
}
