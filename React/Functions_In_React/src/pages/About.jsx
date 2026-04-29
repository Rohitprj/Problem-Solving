// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// let productsCache = null;
// let hasRequestedProducts = false;

// export default function About() {
//   useEffect(() => {
//     if (productsCache || hasRequestedProducts) {
//       return;
//     }

//     hasRequestedProducts = true;

//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         productsCache = data;
//         console.log("API DATA", data);
//       })
//       .catch((error) => {
//         hasRequestedProducts = false;
//         console.log(error);
//       });
//   }, []);
//   return (
//     <div className="">
//       <p>This is an about page</p>
//       <Link to="/contact">Contact</Link>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [products, setProducts] = useState([]);
  async function apiHandling() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    setProducts(data);
    console.log("Data", JSON.stringify(data, null, 2));
  }
  useEffect(() => {
    apiHandling();
  }, []);
  return (
    <div className="">
      <p>This is an about page</p>
      <Link to="/contact">Contact</Link>
      {products && <p>{products.title}</p>}
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data); // store data in state
//         console.log("API DATA", data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h2>This is an about page</h2>
//       <Link to="/contact">Contact</Link>
//       {/* {products.map((item) => (
//         <p key={item.id}>{item.title}</p>
//       ))} */}
//     </div>
//   );
// }
