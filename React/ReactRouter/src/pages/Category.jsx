import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Category() {
  return (
    <div className="h-screen">
      <p>This is a Category page</p>
      <button>
        <Link
          className="p-6 bg-amber-200 text-2xl border-2 inline-block cursor-pointer"
          to="/category/clothes"
        >
          Clothes
        </Link>
      </button>
      <button>
        <Link
          className="p-6 bg-amber-200 text-2xl border-2 inline-block cursor-pointer"
          to="/category/accessories"
        >
          Accessories
        </Link>
      </button>
      <Outlet />
    </div>
  );
}
