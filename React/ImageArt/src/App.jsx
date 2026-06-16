import React, { useEffect } from "react";

export default function App() {
  const [images, setImages] = React.useState([]);
  const [count, setCount] = React.useState(1);

  async function getData() {
    const res = await fetch(
      `https://picsum.photos/v2/list?page=${count}&limit=18`,
    );
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
    setImages(data);
  }
  useEffect(() => {
    getData();
  }, [count]);

  return (
    <div className="bg-slate-900 h-screen">
      <div className="flex flex-row flex-wrap">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.download_url}
            alt={image.author}
            className="p-2 h-46 w-1/6 object-cover cursor-pointer hover:opacity-50 transition-opacity duration-300 ease-in-out transform hover:scale-105"
          />
        ))}
      </div>
      <div className="flex flex-row justify-center gap-6 mt-4">
        <button
          className="hover:bg-orange-600 bg-orange-500 p-2 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 text-white"
          onClick={() => setCount(count - 1)}
        >
          Prev
        </button>
        <button
          className="hover:bg-orange-600 bg-orange-500 p-2 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 text-white"
          onClick={() => setCount(count + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
