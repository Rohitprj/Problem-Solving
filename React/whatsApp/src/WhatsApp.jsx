import React from "react";

export default function WhatsApp({ setShow }) {
  const close = () => setShow(false);
  return (
    <div className="flex flex-row justify-between bg-cyan-300 h-1/2 w-2xs p-4 rounded-2xl absolute">
      <p>WhatsApp</p>
      <button onClick={close} className="bg-red-400 h-8 w-4">
        X
      </button>
    </div>
  );
}
