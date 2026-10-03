import { Image } from "expo-image";
import { router } from "expo-router";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { formatPrice, Product } from "../lib/shopify";

export default function ProductCard({
  product,
  style,
}: {
  product: Product;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Pressable
      style={[styles.card, style]}
      onPress={() => router.push(`/product/${product.handle}`)}
    >
      <Image
        source={{ uri: product.featuredImage?.url }}
        style={styles.img}
        contentFit="cover"
      />
      <Text style={styles.title} numberOfLines={2}>
        {product.title}
      </Text>
      <Text style={styles.price}>
        {formatPrice(product.priceRange.minVariantPrice)}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  img: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
  },
  title: { marginTop: 8, fontWeight: "600", color: "#111" },
  price: { marginTop: 2, color: "#6d28d9", fontWeight: "700" },
});
