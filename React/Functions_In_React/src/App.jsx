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
//   const [input, setInput] = useState("");
//   const [submit, setSubmit] = useState([]);
//   console.log(submit);
//   return (
//     <div>
//       <input
//         className="border-2"
//         type="text"
//         onChange={(e) => setInput(e.target.value)}
//       />
//       {"\t"}
//       <button type="submit" onClick={() => setSubmit([...submit, input])}>
//         Submit
//       </button>
//       <ul>
//         {submit.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function App() {
//   const [name, setName] = useState("");
//   const [prev, prevName] = useState([]);
//   const [diaplay, setDisplay] = useState("");
//   // prevName(name);
//   // const store = [...name, prev];
//   // console.log("storeee", store);

//   const submit = (value) => {
//     value.preventDefault();
//     // console.log(value);
//     // console.log(name);
//     localStorage.setItem("name", name);
//     console.log(name);
//   };
//   localStorage.removeItem("name");
//   // const myname = localStorage.getItem("name");

//   // console.log("This is myname", myname);

//   return (
//     <div>
//       <form onSubmit={(e) => submit(e)}>
//         <p>Name</p>
//         <input
//           className="border-4"
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <p>Password</p>
//         <input className="border-4" type="text" />
//         <br />
//         <br />
//         <button
//           type="submit"
//           className="border-amber-400 border-2 bg-amber-700"
//           onClick={() => setDisplay(name)}
//         >
//           Log in
//         </button>
//       </form>
//       <p>{name}</p>
//     </div>
//   );
// }

// import React from "react";
// import Notes from "./pages/Notes";

// export default function App() {
//   const submit = (e) => {
//     e.preventDefault();
//     console.log("form submitted with the value: " + e.target.elements[0].value);
//   };

//   return (
//     <div>
//       {/* <form onSubmit={(e) => submit(e)}>
//         <input type="text" />
//         <button type="submit">Submit</button>
//       </form> */}
//       <Notes />
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

// import React from "react";
// import { AiFillAmazonCircle } from "react-icons/ai";

// export default function App() {
//   return (
//     <div className="">
//       <AiFillAmazonCircle size={50} color="red" />
//       <p>hi</p>
//     </div>
//   );
// }

// import React, { useEffect } from "react";

// export default function App() {
//   // useEffect(() => {}, []);

//   fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => console.log("API DATA", data))
//     .catch((error) => console.log(error));

//   return (
//     <div>
//       <p>hi</p>
//     </div>
//   );
// }
