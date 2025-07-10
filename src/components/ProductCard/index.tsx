import { ProductProps } from "@/app/utils/interfaces";
import React from "react";
import styles from "./ProductCard.module.scss";
import { useUserStore } from "@/store/user";

const ProductCard = ({ products }: ProductProps) => {
  const accessToken = useUserStore((s) => s.accessToken);
  return (
    <div className={styles.card}>
      <img
        src={products.thumbnail}
        alt={products.title}
        className={styles.image}
      />
      <div className={styles.title}>{products.title}</div>
      <div className={styles.category}>{products.category}</div>
      <div className={styles.price}>${products.price}</div>
      {accessToken && <button className={styles.button}>add to cart</button>}
    </div>
  );
};

export default ProductCard;
