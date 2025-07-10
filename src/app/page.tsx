"use client";
import axios from "axios";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "./utils/interfaces";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=12"
        );
        setProducts(response.data.products);
      } catch (error) {
        setError("failed to load products");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.title}>Latest products</div>
      <div className={styles.grid}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
    </div>
  );
}
