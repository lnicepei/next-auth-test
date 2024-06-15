'use client';

import { useUserStore } from '@/store/userStore';

export default function Card() {
  const user = useUserStore((state) => state.user);

  return <h1>{JSON.stringify(user)}</h1>;
}
