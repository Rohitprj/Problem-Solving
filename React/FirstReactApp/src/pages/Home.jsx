import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>This is a Home page</p>
      <Link>
        <p>home</p>
      </Link>

      <p>about</p>
      <p>contact</p>
      <Link to="/about" className="text-blue-900 ">
        About
      </Link>
    </div>
  );
}
