import React, { useEffect, useState } from "react";
import axios from "axios";
import AxiosInstance from "./utils/AxiosInstance";

export default function App() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  async function getData() {
    try {
      const res = await AxiosInstance.get("/todos/1");
      const data = await res.data;
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getData2() {
    try {
      const res = await AxiosInstance.get("/todos/2");
      const data = await res.data;
      console.log(data);
      setData2(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
    getData2();
  }, []);

  return (
    <div>
      <p>{data && data.title}</p>
      <p>{data2 && data2.title}</p>
    </div>
  );
}
