import React from "react";

export default function About() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
        About Page
      </p>
      <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-900">
        About
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        This is the about page.
      </p>
    </main>
  );
}
