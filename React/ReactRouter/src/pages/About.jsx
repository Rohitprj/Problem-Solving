import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function About() {
  const params = useParams();
  console.log("My params", params);

  const [theme, setTheme] = useState("light");
  const [toggle, setToggle] = useState(false);

  const lightColors = {
    background: "#FFFFFF",
    text: "#000000",
  };

  const darkColors = {
    background: "#0A0E27",
    text: "#FFFFFF",
  };

  useEffect(() => {
    if (toggle) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [toggle]);

  return (
    <main
      style={{
        backgroundColor:
          theme === "light" ? lightColors.background : darkColors.background,
        color: theme === "light" ? lightColors.text : darkColors.text,
      }}
      className=" mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16"
    >
      <p>Params :- {params.username}</p>
      <p
        onClick={() => setToggle(!toggle)}
        style={{
          color:
            theme === "light" ? darkColors.background : lightColors.background,
        }}
        className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600"
      >
        About Page
      </p>
      <h1
        style={{
          color:
            theme === "light" ? darkColors.background : lightColors.background,
        }}
        className="mt-3 text-5xl font-black tracking-tight text-slate-900"
      >
        About
      </h1>
      <p
        style={{
          color:
            theme === "light" ? darkColors.background : lightColors.background,
        }}
        className="mt-4 max-w-2xl text-lg leading-8 text-slate-600"
      >
        This is the about page.
      </p>
    </main>
  );
}
