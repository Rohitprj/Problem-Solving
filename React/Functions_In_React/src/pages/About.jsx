import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="">
      <p>This is an about page</p>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
