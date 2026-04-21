import React, { useState } from "react";

export default function App() {
  function value(val) {
    console.log(val);
  }
  const wheel = (value) => {
    console.log("wheel", value);
    console.log("wheel", value.deltaX);
    console.log("wheel", value.deltaY);
  };
  const double = (value) => {
    console.log("double", value);
  };

  const click = (value) => {
    console.log(value);
  };

  return (
    <div
      onWheel={(element) => wheel(element)}
      style={{ height: "1000px", width: "1000px" }}
    >
      <p>Main</p>
      <input
        type="text"
        placeholder="Enter here.."
        onChange={(element) => value(element.target.value)}
        value={}
      />
      <button onDoubleClick={(element) => double(element)}>Submit</button>
      <br />
      <br />
      <button onClick={(element) => click(element.target)}>Click</button>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// function UsersList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // API call inside useEffect
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data); // store API data in state
//         setLoading(false); // stop loading
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//         setLoading(false);
//       });
//   }, []); // empty dependency array = runs once when component mounts

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div>
//       <h2>Users List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UsersList;

// import React, { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount(count++)}>increment</button>
//       <p>{count}</p>
//       <button onClick={() => setCount(count--)}>decrement</button>
//     </div>
//   );
// }

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   // setCount(10);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>increase</button>
//       <p>count = {count}</p>
//     </div>
//   );
// }
