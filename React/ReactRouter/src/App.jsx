import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Category from "./pages/Category";
import Clothes from "./pages/Clothes";
import Accessories from "./pages/Accessories";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:username" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/mens" element={<Mens />} />
        <Route path="/products/womens" element={<Womens />} />
        <Route path="/category" element={<Category />}>
          <Route path="clothes" element={<Clothes />} />
          <Route path="accessories" element={<Accessories />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

// import React, { useState } from "react";
// import { TbHandClick } from "react-icons/tb";
// import Options from "./Options";

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="flex justify-center items-center h-screen bg-amber-100 ">
//       <button
//         onClick={() => setShow(!show)}
//         className="cursor-pointer border-2 p-6"
//       >
//         <TbHandClick size={50} />
//       </button>
//       {show && <Options setShow={setShow} />}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// export default function App() {
//   const [products, setProducts] = useState(null);

//   async function getData() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await res.json();
//     setProducts(data);
//     console.log(data);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       <p>This is a Home page</p>
//       {products && (
//         <>
//           <p>{products.id}</p>
//           <p>{products.title}</p>
//         </>
//       )}
//     </div>
//   );
// }

// import React from "react";

// export default function App() {
//   const sectionStyle = {
//     height: "100vh",
//     paddingTop: "60px",
//   };

//   const headerStyle = {
//     position: "fixed",
//     top: 0,
//     width: "100%",
//     background: "#333",
//     padding: "10px",
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//   };

//   const linkStyle = {
//     color: "white",
//     textDecoration: "none",
//     cursor: "pointer",
//   };

//   return (
//     <div style={{ scrollBehavior: "smooth" }}>
//       {/* Header */}
//       <header style={headerStyle}>
//         <a href="#home" style={linkStyle}>
//           Home
//         </a>
//         <a href="#about" style={linkStyle}>
//           About
//         </a>
//         <a href="#contact" style={linkStyle}>
//           Contact Us
//         </a>
//       </header>

//       {/* Sections */}
//       <section id="home" style={sectionStyle}>
//         <h1>Home</h1>
//         <p>This is a Home page</p>
//       </section>

//       <section id="about" style={sectionStyle}>
//         <h1>About</h1>
//         <p>This is the About section</p>
//       </section>

//       <section id="contact" style={sectionStyle}>
//         <h1>Contact Us</h1>
//         <p>This is the Contact section</p>
//       </section>
//     </div>
//   );
// }

// import React, { useRef } from "react";

// export default function App() {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const sectionStyle = {
//     height: "100vh",
//     paddingTop: "60px",
//   };

//   const headerStyle = {
//     position: "fixed",
//     top: 0,
//     width: "100%",
//     background: "#333",
//     padding: "10px",
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//   };

//   const linkStyle = {
//     color: "white",
//     cursor: "pointer",
//   };

//   return (
//     <div>
//       {/* Header */}
//       <header style={headerStyle}>
//         <span style={linkStyle} onClick={() => scrollToSection(homeRef)}>
//           Home
//         </span>
//         <span style={linkStyle} onClick={() => scrollToSection(aboutRef)}>
//           About
//         </span>
//         <span style={linkStyle} onClick={() => scrollToSection(contactRef)}>
//           Contact Us
//         </span>
//       </header>

//       {/* Sections */}
//       <section ref={homeRef} style={sectionStyle}>
//         <h1>Home</h1>
//         <p>This is a Home page</p>
//       </section>

//       <section ref={aboutRef} style={sectionStyle}>
//         <h1>About</h1>
//         <p>This is the About section</p>
//       </section>

//       <section ref={contactRef} style={sectionStyle}>
//         <h1>Contact Us</h1>
//         <p>This is the Contact section</p>
//       </section>
//     </div>
//   );
// }
