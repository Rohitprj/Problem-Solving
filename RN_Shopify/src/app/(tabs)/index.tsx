import { Image } from "expo-image";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ProductCard from "../../components/ProductCard";
import {
  Collection,
  getCollections,
  getProducts,
  Product,
} from "../../lib/shopify";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      setError("");
      const [p, c] = await Promise.all([getProducts(), getCollections()]);
      setProducts(p);
      setCollections(c);
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

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  if (error) return <Text style={styles.error}>Error: {error}</Text>;

  return (
    <ScrollView
      style={styles.screen}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            load();
          }}
        />
      }
    >
      <Text style={styles.h}>Featured</Text>
      <FlatList
        horizontal
        data={products.slice(0, 8)}
        keyExtractor={(p) => p.id}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard product={item} style={{ width: 160 }} />
        )}
      />
      <Text style={styles.h}>Collections</Text>
      <View style={{ paddingHorizontal: 16, gap: 10, paddingBottom: 24 }}>
        {collections.map((c) => (
          <View key={c.id} style={styles.col}>
            <Image
              source={{ uri: c.image?.url }}
              style={styles.colImg}
              contentFit="cover"
            />
            <Text style={styles.colTitle}>{c.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fafafa" },
  h: { fontSize: 20, fontWeight: "800", margin: 16 },
  error: { margin: 24, color: "crimson" },
  col: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  colImg: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
  },
  colTitle: { marginLeft: 12, fontWeight: "600", fontSize: 16 },
});
