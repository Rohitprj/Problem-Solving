import { View, Text } from "react-native";
import React, { useState } from "react";

export default function index() {
  const [value, setValue] = useState(10);
  const interval = () => {};
  setInterval(interval, 1000);
  return (
    <View>
      <Text>index{value}</Text>
    </View>
  );
}
