"use client";
import React from "react";
import { useUserStore } from "@/store/user";
import styles from "./Footer.module.scss";

const Footer = () => {
  const user = useUserStore((state) => state.user);
  return (
  <div className={styles.footer}>
    <div>{new Date().getFullYear()}</div>
    {user? "Logged as " + user.email : ""}</div>);
};

export default Footer;
