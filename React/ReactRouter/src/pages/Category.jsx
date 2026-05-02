import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Category() {
  return (
    <div className="h-screen">
      <p>This is a Category page</p>
      <button>
        <Link to="/category/clothes">Clothes</Link>
      </button>
      <button>
        <Link to="/category/accessories">Accessories</Link>
      </button>
      {/* <Outlet /> */}
    </div>
  );
}
