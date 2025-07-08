import { create } from "zustand";

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

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  accessToken: "",
  login: ({ accessToken, user }) => set({ accessToken, user }),
  logout: () => set({ user: null, accessToken: null }),
}));
