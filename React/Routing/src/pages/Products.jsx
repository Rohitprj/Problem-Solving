import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="h-screen">
      <div className="flex justify-center gap-6">
        <button>
          <Link
            className="p-6 bg-amber-200 text-2xl border-2 inline-block cursor-pointer"
            to="/products/mens"
          >
            Mens
          </Link>
        </button>
        <button>
          <Link
            className="p-6 bg-indigo-100 text-2xl border-2 inline-block cursor-pointer"
            to="/products/womens"
          >
            Womens
          </Link>
        </button>
      </div>
      <p className="text-2xl">This is a Products page</p>
    </div>
  );
}
