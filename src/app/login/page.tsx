"use client";
import { useUserStore } from "@/store/user";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/lib/validation";
import styles from "./login.module.scss";

const LoginPage = () => {
  const router = useRouter();

  const accessToken = useUserStore((s) => s.accessToken);

  useEffect(() => {
    if (accessToken) {
      router.push("/");
    }
  }, [accessToken, router]);

  const login = useUserStore((state) => state.login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [authError, setAuthError] = useState("");

  const handleSubmit = async () => {
    setAuthError("");
    setErrorMsg("");

    const result = loginSchema.safeParse({ username, password });

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Validation failed";
      setErrorMsg(firstError);
      return;
    }

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      login({
        accessToken: response.data.token,
        user: {
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
        },
      });

      router.push("/");
    } catch (error) {
      console.log(error);
      setAuthError("Invalid username or password");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.title}>Login</div>

        <input
          type="text"
          className={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMsg && <div className={styles.error}>{errorMsg}</div>}
        <div>

          {authError && <div className={styles.error}>{authError}</div>}
        </div>

        <button className={styles.button} onClick={handleSubmit}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
