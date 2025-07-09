"use client";
import axios from "axios";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "./utils/interfaces";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=12"
      );
      setProducts(response.data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>placeholder</main>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
