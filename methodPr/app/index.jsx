import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

export default function index() {
  const [value, setValue] = useState(10);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle || value <= 0) return;
    const interval = setInterval(() => {
      setValue((value) => {
        return value - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [toggle, value]);
  const button = () => {
    setToggle((r) => !r);
  };
  console.log(value);
  return (
    <View style={{ alignItems: "center", gap: 10 }}>
      <Text>count {value}</Text>
      <Pressable
        style={{ backgroundColor: "skyblue", padding: 10 }}
        onPress={button}
      >
        <Text style={{ color: "white" }}>{toggle ? "resume" : "pause"}</Text>
      </Pressable>
    </View>
  );
}

// import { View, Text, Pressable, StyleSheet } from "react-native";
// import React, { useState, useEffect } from "react";

// export default function Index() {
//   const [value, setValue] = useState(1); // Start with 1 as the initial value
//   const [isPaused, setIsPaused] = useState(false); // Track if counting is paused

//   useEffect(() => {
//     if (isPaused || value >= 10) return; // Stop the interval if paused or value reaches 10

//     const interval = setInterval(() => {
//       setValue((prevValue) => prevValue + 1); // Increment value
//     }, 1000);

//     // Cleanup the interval when the component unmounts or the counter is paused
//     return () => clearInterval(interval);
//   }, [isPaused, value]); // Re-run effect if isPaused or value changes

//   const togglePause = () => {
//     setIsPaused((prev) => !prev); // Toggle pause state
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.counter}>{value}</Text>
//       <Pressable
//         style={({ pressed }) => [
//           styles.button,
//           { backgroundColor: pressed ? "#ddd" : "#4CAF50" },
//         ]}
//         onPress={togglePause}
//       >
//         <Text style={styles.buttonText}>{isPaused ? "Resume" : "Pause"}</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   counter: {
//     fontSize: 50,
//     marginBottom: 20,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 20,
//   },
// });
