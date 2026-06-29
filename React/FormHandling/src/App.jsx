// import React from "react";
// import "./App.css";

// function App() {
//   function form(e) {
//     e.preventDefault();
//     console.log("form submitted");
//   }
//   return (
//     <>
//       {/* <p>React</p> */}
//       <form onSubmit={(e) => form(e)}>
//         <input type="text" placeholder="Email" />
//         <br />
//         <input type="text" placeholder="Password" />
//         <br />
//         <button>Login</button>
//       </form>
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [value, setValue] = useState("");

//   function form(e) {
//     e.preventDefault();
//     console.log("form submitted by", value);
//     setValue("");
//   }
//   return (
//     <>
//       <form onSubmit={(e) => form(e)}>
//         <input
//           type="text"
//           placeholder="enter your name"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <br />
//         <button>Login</button>
//       </form>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  function form(e) {
    e.preventDefault();
    console.log("Form submitted", value);
    setValue("");
  }
  return (
    <>
      <form onSubmit={(e) => form(e)}>
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="enter your name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}

export default App;
