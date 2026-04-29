import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  async function getData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
          Main Page
        </p>
        <h1 className="text-5xl font-black tracking-tight text-slate-900">
          Home
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          This is the home page of the ReactRouter Vite project.
        </p>
        {/* <button
          onClick={getData}
          className="bg-indigo-600 inline-block w-fit px-3 rounded-md text-white pt-1 hover:bg-indigo-700 cursor-pointer"
        >
          Data
        </button> */}
        {loading && <p className="text-5xl">Loading...</p>}
        {products && (
          <>
            <p>{products.id}</p>
            <p>{products.title}</p>
          </>
        )}
      </main>
    </div>
  );
}
