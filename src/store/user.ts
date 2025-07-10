import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  } | null;

  accessToken: string | null;
  login: (data: { accessToken: string; user: UserState["user"] }) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      login: ({ accessToken, user }) => set({ accessToken, user }),
      logout: () => set({ user: null, accessToken: null }),
    }),
    {
      name: "user-storage",
    }
  )
);
