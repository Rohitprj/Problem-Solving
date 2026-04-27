import React, { useState } from "react";
import WhatsApp from "./WhatsApp";

export default function App() {
  const [show, setShow] = useState(false);
  const isShow = () => setShow(!show);
  return (
    <div className="flex justify-center items-center h-screen relative">
      <button onClick={isShow} className="h-10 w-10 bg-red-500 rounded-2xl">
        <p>App</p>
      </button>
      {show && <WhatsApp setShow={setShow} />}
    </div>
  );
}
