"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const user = useUser();
  console.log("Counter Component");
  const [count, setCount] = useState(0);

  if (!isLoaded && !userId) return null;
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
