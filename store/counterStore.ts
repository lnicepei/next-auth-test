import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type State = {
  count: number;
};

export type Actions = {
  increment: () => void;
  // decrement: () => void;
  // updateCount: (newCount: number) => void;
};

export const useCounterStore = create<State & Actions>()(
  persist(
    (set) => ({
      count: 0,
      increment: () =>
        set((state) => ({
          count: state.count + 1,
        })),
    }),
    { name: 'task-store', skipHydration: true }
  )
);
