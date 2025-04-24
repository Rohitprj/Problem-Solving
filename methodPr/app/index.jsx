import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

export default function index() {
  const [timeStart, setTimeStart] = useState(6);
  const [show, setShow] = useState(false);
  function timer() {
    useEffect(() => {
      if (timeStart <= 0) {
        setShow(true);
        return;
        //  clearInterval(time);
      }
      const time = setInterval(() => {
        setTimeStart((prev) => prev - 1);
      }, 1000);
      //   return () => clearInterval(time);
    }, []);
  }
  timer();
  return (
    <View>
      <Text>Timer : {timeStart}</Text>
      <Text>{show && <Text>Done</Text>}</Text>
    </View>
  );
}
