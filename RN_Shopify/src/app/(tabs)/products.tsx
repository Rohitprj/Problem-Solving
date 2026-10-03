import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ProductCard from "../../components/ProductCard";
import { getProducts, Product } from "../../lib/shopify";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      setError("");
      setProducts(await getProducts());
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(
    () =>
      products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
      ),
    [products, query],
  );

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.search}
        placeholder="Search products..."
        value={query}
        onChangeText={setQuery}
      />
      {error ? (
        <Text style={{ color: "crimson", margin: 16 }}>Error: {error}</Text>
      ) : null}
      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={(p) => p.id}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          load();
        }}
        contentContainerStyle={{ padding: 8 }}
        renderItem={({ item }) => (
          <ProductCard product={item} style={{ flex: 1, margin: 6 }} />
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            No products found
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fafafa" },
  search: {
    margin: 12,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
