import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCart } from "../../context/CartContext";
import { formatPrice, getProduct, Product } from "../../lib/shopify";

export default function ProductDetail() {
  const { handle } = useLocalSearchParams<{ handle: string }>();
  const { add } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [variantId, setVariantId] = useState("");
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(handle)
      .then((p) => {
        setProduct(p);
        setVariantId(p?.variants.edges[0]?.node.id ?? "");
      })
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  if (!product) return <Text style={{ margin: 24 }}>Product not found.</Text>;

  const variants = product.variants.edges.map((e) => e.node);
  const variant = variants.find((v) => v.id === variantId) ?? variants[0];

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Stack.Screen options={{ title: product.title }} />
      <Image
        source={{ uri: product.featuredImage?.url }}
        style={styles.img}
        contentFit="cover"
      />
      <View style={{ padding: 16 }}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{formatPrice(variant.price)}</Text>
        <Text style={styles.desc}>{product.description}</Text>

        <Text style={styles.label}>Variant</Text>
        <View style={styles.row}>
          {variants.map((v) => (
            <Pressable
              key={v.id}
              onPress={() => setVariantId(v.id)}
              style={[styles.chip, v.id === variant.id && styles.chipOn]}
            >
              <Text style={{ color: v.id === variant.id ? "#fff" : "#111" }}>
                {v.title}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.label}>Quantity</Text>
        <View style={styles.row}>
          <Pressable
            style={styles.qtyBtn}
            onPress={() => setQty((q) => Math.max(1, q - 1))}
          >
            <Text style={styles.qtyTxt}>−</Text>
          </Pressable>
          <Text style={{ fontSize: 18, marginHorizontal: 16 }}>{qty}</Text>
          <Pressable style={styles.qtyBtn} onPress={() => setQty((q) => q + 1)}>
            <Text style={styles.qtyTxt}>+</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.addBtn}
          onPress={() => {
            add(product, variant, qty);
            Alert.alert("Added to cart", `${qty} × ${product.title}`);
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
            Add to Cart
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: { width: "100%", aspectRatio: 1, backgroundColor: "#f2f2f2" },
  title: { fontSize: 22, fontWeight: "800" },
  price: {
    fontSize: 20,
    color: "#6d28d9",
    fontWeight: "700",
    marginVertical: 6,
  },
  desc: { color: "#444", lineHeight: 20 },
  label: { marginTop: 16, marginBottom: 8, fontWeight: "700" },
  row: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 8 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  chipOn: { backgroundColor: "#6d28d9", borderColor: "#6d28d9" },
  qtyBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyTxt: { fontSize: 20, fontWeight: "700" },
  addBtn: {
    marginTop: 24,
    backgroundColor: "#6d28d9",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
});
