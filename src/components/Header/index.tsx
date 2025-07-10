"use client";

import Link from "next/link";
import { useUserStore } from "@/store/user";

import styles from "./Header.module.scss";
import { useEffect } from "react";

export default function Header() {
  const accessToken = useUserStore((s) => s.accessToken);
  useEffect(() => {
  console.log('accessToken', accessToken);
}, [accessToken]);
  const logout = useUserStore((s) => s.logout);
  const hasHydrated = useUserStore((s) => s.hasHydrated);
  
  if (!hasHydrated) return null;

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.contacts}>
          <span>📞 +021-95-51-84</span>
          <span>✉️ shop@abelohost.com</span>
          <span>🏠 1734 Stonecoal Road</span>
        </div>
        <div>
          {accessToken ? (
            <button onClick={logout} className={styles.logoutButton}>
              🔓 Logout
            </button>
          ) : (
            <Link href="/login" className={styles.loginButton}>
              👤 Login
            </Link>
          )}
          
        </div>
      </div>
      <div className={styles.banner}>
        <h1 className={styles.title}>Abelohost Shop.</h1>
        <div className={styles.bannerLogo}></div>
        {/* placeholder */}
      </div>
    </header>
  );
}
