import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-slate-900"
        >
          ReactRouter
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link className="hover:text-slate-950" to="/about">
            About
          </Link>
          <Link className="hover:text-slate-950" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-slate-950" to="/login">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
