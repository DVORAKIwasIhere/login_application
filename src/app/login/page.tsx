"use client";
import { useUserStore } from "@/store/user";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });
      console.log(response);

      document.cookie = `accessToken=${response.data.token}; path=/; secure; samesite=strict`;
      console.log("its in cookies" + document.cookie);

      useUserStore.getState().login({
        accessToken: response.data.accessToken,
        user: {
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
        },
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>LoginPage</div>
      <div></div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default LoginPage;
