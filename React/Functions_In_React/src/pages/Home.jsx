import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>This is a Home page</p>
      <Link to="/about">About</Link>
    </div>
  );
}
