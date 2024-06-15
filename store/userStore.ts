import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  name: string;
};

type State = {
  user: User | null;
};

type Actions = {
  fetchUser: () => Promise<User>;
};

export const useUserStore = create<State & Actions>()(
  persist(
    (set) => ({
      user: null,
      fetchUser: async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await res.json();

        set(() => ({
          user: user,
        }));

        return user;
      },
    }),
    { name: 'user-store', skipHydration: true }
  )
);
