import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
          Main Page
        </p>
        <h1 className="text-5xl font-black tracking-tight text-slate-900">
          Home
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          This is the home page of the ReactRouter Vite project.
        </p>
      </main>
    </div>
  );
}
