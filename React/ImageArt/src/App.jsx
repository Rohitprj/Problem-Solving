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
            className="p-2 h-46 w-1/6"
          />
        ))}
      </div>
      <div className="flex flex-row justify-center gap-6 mt-4">
        <button
          className="bg-orange-500 p-2 rounded-md"
          onClick={() => setCount(count - 1)}
        >
          Prev
        </button>
        <button
          className="bg-orange-500 p-2 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
