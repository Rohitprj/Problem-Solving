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

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [value, setValue] = useState("");
//   const [data, setData] = useState([]);
//   function form(e) {
//     e.preventDefault();
//     console.log("Form submitted", value);
//     setData([...data, value]);
//     setValue("");
//   }
//   return (
//     <>
//       <form onSubmit={(e) => form(e)}>
//         <label>Notes</label>
//         <br />
//         <input
//           type="text"
//           placeholder="enter your name"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <br />
//         <button>submit</button>
//         <div>
//           {data.map((item, index) => (
//             <p key={index}>{item}</p>
//           ))}
//         </div>
//       </form>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  function form(e) {
    e.preventDefault();

    if (!value.trim()) return;

    console.log("Form submitted", value);
    setData([...data, value]);
    setValue("");
  }

  return (
    <div className="container">
      <form className="note-form" onSubmit={form}>
        <h2>📝 Notes App</h2>

        <label>Notes</label>

        <input
          type="text"
          placeholder="Enter your note..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit">Add Note</button>

        <div className="notes">
          {data.map((item, index) => (
            <div className="note" key={index}>
              {item}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
