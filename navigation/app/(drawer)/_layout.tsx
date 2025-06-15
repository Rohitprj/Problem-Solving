// import { View, Text, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";
// import { Drawer } from "expo-router/drawer";

// function CustomDrawerContent() {
//   const router = useRouter();

//   return (
//     <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}>
//       <TouchableOpacity
//         onPress={() => router.push("/(drawer)/(tabs)")}
//         style={{ marginBottom: 20 }}
//       >
//         <Text style={{ fontSize: 18 }}>🏠 Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => router.push("/(drawer)/(tabs)/explore")}
//         style={{ marginBottom: 20 }}
//       >
//         <Text style={{ fontSize: 18 }}>ℹ️ About</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// export default function DrawerLayout() {
//   return (
//     <Drawer
//       screenOptions={{
//         headerShown: true,
//         drawerPosition: "left",
//         headerTitle: "Drawer",
//       }}
//       drawerContent={CustomDrawerContent}
//     />
//   );
// }

import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";

function CustomDrawerContent() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}>
      <TouchableOpacity
        onPress={() => router.push("/(drawer)/(tabs)")}
        style={{ marginBottom: 20 }}
      >
        <Text style={{ fontSize: 18 }}>🏠 Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/(drawer)/(tabs)/about")}
        style={{ marginBottom: 20 }}
      >
        <Text style={{ fontSize: 18 }}>ℹ️ About</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function DrawerLayout() {
  const pathname = usePathname();

  let headerTitle = "App";
  if (pathname === "/(drawer)/(tabs)") {
    headerTitle = "Home";
  } else if (pathname === "/(drawer)/(tabs)/about") {
    headerTitle = "About";
  }

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerPosition: "left",
        headerTitle: headerTitle, // 👈 Dynamic title here
      }}
      drawerContent={CustomDrawerContent}
    />
  );
}
