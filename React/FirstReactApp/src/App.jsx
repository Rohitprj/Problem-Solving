// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// import { FirstComp, SecondComp } from "./components/FirstComp";

// export default function App() {
//   return (
//     <div>
//       <h1 className="bg-amber-300 font text-red-700">Hello</h1>
//       <FirstComp name="Rohit" />
//       <SecondComp />
//       <p className="bg-blue-700 font-extrabold">This is a paragraph</p>
//       <p>This is a paragraph</p>
//       <p>This is a paragraph</p>
//       <p>This is a paragraph</p>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import WhoITrain from "./components/WhoITrain";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1200);
  }, []);

  const items = [1, 2, 3];

  return (
    <div>
      <WhoITrain />
    </div>
    // <div className="p-10 grid grid-cols-3 gap-6">
    //   {items.map((item, index) => (
    //     <div
    //       key={item}
    //       className="w-64 h-72 border rounded-xl overflow-hidden shadow bg-white"
    //     >
    //       {!loaded ? (
    //         <div className="animate-pulse p-4 space-y-4">
    //           <div className="h-40 bg-gray-300 rounded"></div>
    //           <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    //           <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    //         </div>
    //       ) : (
    //         <div
    //           className={`transition-all duration-700 ease-in-out delay-${
    //             index * 200
    //           } opacity-100 translate-y-0`}
    //         >
    //           <img
    //             src="https://picsum.photos/300/200"
    //             className="w-full h-40 object-cover"
    //           />
    //           <div className="p-4">
    //             <h2 className="font-bold text-lg">Card Title</h2>
    //             <p className="text-gray-500">Smooth reveal animation</p>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   ))}
    // </div>
  );
}
