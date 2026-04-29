import React, { useEffect } from "react";
import { Link } from "react-router-dom";

let productsCache = null;
let hasRequestedProducts = false;

export default function About() {
  useEffect(() => {
    if (productsCache || hasRequestedProducts) {
      return;
    }

    hasRequestedProducts = true;

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        productsCache = data;
        console.log("API DATA", data);
      })
      .catch((error) => {
        hasRequestedProducts = false;
        console.log(error);
      });
  }, []);
  return (
    <div className="">
      <p>This is an about page</p>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
