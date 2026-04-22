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
//   // const [count, setCount] = useState(0);
//   const [input, setInput] = useState("");
//   const [submit, setSubmit] = useState("");
//   return (
//     <div>
//       <input type="text" onChange={(e) => setInput(e.target.value)} />
//       <button type="submit" onClick={() => setSubmit(input)}>
//         Submit
//       </button>
//       <p>{submit}</p>
//       {/* <button onClick={() => setCount(count++)}>increment</button>
//       <p>{count}</p>
//       <button onClick={() => setCount(count--)}>decrement</button> */}
//     </div>
//   );
// }

import React from "react";

export default function App() {
  const submit = (e) => {
    e.preventDefault();
    console.log("form submitted with the value: " + e.target.elements[0].value);
  };

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

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
