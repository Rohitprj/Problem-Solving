import React from "react";

export default function NotFound() {
  return (
    <div>
      {/* <div class="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">
        <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 class="text-6xl font-bold mb-4">Page Not Found</h1>
          <p class="text-xl">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <a
            href="/"
            class="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
          >
            Go Home
          </a>
        </div>

        <div
          id="overlay"
          class="absolute inset-0 bg-black z-20 pointer-events-none"
        ></div>
      </div> */}
      <p>Page Not Found</p>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
      <a href="/">Go Home</a>
    </div>
  );
}
