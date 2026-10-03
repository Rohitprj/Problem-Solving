import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useCart } from "../../context/CartContext";

export default function TabsLayout() {
  const { count } = useCart();
  const icon =
    (name: keyof typeof Ionicons.glyphMap) =>
    ({ color, size }: { color: string; size: number }) => (
      <Ionicons name={name} color={color} size={size} />
    );

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#6d28d9" }}>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", tabBarIcon: icon("home") }}
      />
      <Tabs.Screen
        name="products"
        options={{ title: "Products", tabBarIcon: icon("grid") }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: icon("cart"),
          tabBarBadge: count > 0 ? count : undefined,
        }}
      />
    </Tabs>
  );
}
