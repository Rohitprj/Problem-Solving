import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function LandingPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Welcome to the App!</Text>
      <Button
        title="Enter Main App"
        onPress={() => router.push("/(drawer)/(tabs)")}
      />
    </View>
  );
}
