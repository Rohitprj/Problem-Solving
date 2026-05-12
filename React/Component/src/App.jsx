import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MyAbout from "./components/About";
import Footer, { Adderss, Phone } from "./components/Footer";
import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";
import Slider3 from "./components/Slider3";

export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Slider />
      <Slider2 />
      <Slider3 />
      <MyAbout />
      <Footer />
      <Phone />
      <Adderss />
    </div>
  );
}

// 1. Default Import

// Used when a file exports one main thing using export default.

// Button.js

// export default function Button() {
//   return <button>Click</button>;
// }

// Importing
// import Button from './Button';

// You can rename it anything:
// import MyButton from './Button';

// 2. Named Import

// Used when a file exports multiple things.

// utils.js
// export function add(a, b) {
//   return a + b;
// }

// export function subtract(a, b) {
//   return a - b;
// }

// Importing
// import { add, subtract } from './utils';
// Named imports must match the exported names.

// This fails:

// import { sum } from './utils'; // ❌

// Unless renamed:

// import { add as sum } from './utils';

// 3. Default + Named Together

// A file can have both.

// user.js
// export default function User() {
//   return <h1>User</h1>;
// }

// export const role = 'admin';

// Importing
// import User, { role } from './user';

// 4. Import Everything (* as)

// Imports all named exports into one object.

// math.js
// export const pi = 3.14;

// export function square(x) {
//   return x * x;
// }

// Importing
// import * as MathUtils from './math';

// console.log(MathUtils.pi);
// console.log(MathUtils.square(4));
