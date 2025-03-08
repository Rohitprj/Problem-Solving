import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

export default function index() {
  const [value, setValue] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((preValue) => {
        if (preValue >= 10) {
          clearInterval(interval);
          return preValue;
        }
        return preValue + 1;
      });
    }, 1000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);
  return (
    <View>
      <Text>index {value}</Text>
    </View>
  );
}
