// import React from "react";

// export default function App() {
//   function value(val) {
//     console.log(val);
//   }
//   const wheel = (value) => {
//     console.log("wheel", value);
//   };
//   return (
//     <div
//       onWheel={(element) => wheel(element.deltaY)}
//       style={{ height: "1000px" }}
//     >
//       <p>Main</p>
//       <a href="/New">Go</a>
//       <input
//         type="text"
//         placeholder="Enter here.."
//         onChange={(element) => value(element.target)}
//       />
//     </div>
//   );
// }

import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
