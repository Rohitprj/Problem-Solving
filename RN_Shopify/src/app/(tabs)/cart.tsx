import { Image } from "expo-image";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../lib/shopify";

export default function Cart() {
  const { items, total, setQty, remove } = useCart();

  return (
    <View style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={(i) => i.variant.id}
        contentContainerStyle={{ padding: 16, gap: 10 }}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            Your cart is empty
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image
              source={{ uri: item.product.featuredImage?.url }}
              style={styles.img}
              contentFit="cover"
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={{ fontWeight: "600" }} numberOfLines={1}>
                {item.product.title}
              </Text>
              <Text style={{ color: "#666" }}>{item.variant.title}</Text>
              <Text style={{ color: "#6d28d9", fontWeight: "700" }}>
                {/* ${(Number(item.variant.price.amount) * item.qty).toFixed(2)} */}
                {formatPrice({
                  ...item.variant.price,
                  amount: String(Number(item.variant.price.amount) * item.qty),
                })}
              </Text>
              <View style={styles.qtyRow}>
                <Pressable
                  style={styles.qtyBtn}
                  onPress={() => setQty(item.variant.id, item.qty - 1)}
                >
                  <Text>−</Text>
                </Pressable>
                <Text style={{ marginHorizontal: 12 }}>{item.qty}</Text>
                <Pressable
                  style={styles.qtyBtn}
                  onPress={() => setQty(item.variant.id, item.qty + 1)}
                >
                  <Text>+</Text>
                </Pressable>
                <Pressable
                  onPress={() => remove(item.variant.id)}
                  style={{ marginLeft: "auto" }}
                >
                  <Text style={{ color: "crimson" }}>Remove</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
      {items.length > 0 && (
        <View style={styles.footer}>
          <Text style={{ fontSize: 18, fontWeight: "800" }}>
            {/* Subtotal: ${total.toFixed(2)} */}
            Subtotal:{" "}
            {formatPrice({
              amount: String(total),
              currencyCode: items[0].variant.price.currencyCode,
            })}
          </Text>
          <Pressable
            style={styles.btn}
            onPress={() =>
              Alert.alert("Demo", "Checkout is not implemented in this demo.")
            }
          >
            <Text style={{ color: "#fff", fontWeight: "700" }}>Checkout</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fafafa" },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  img: { width: 80, height: 80, borderRadius: 8, backgroundColor: "#f2f2f2" },
  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#6d28d9",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
});
