"use client";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex item-center justify-center h-screen">
      <div className="text-2xl font-bold text-red-500">
        Something went wrong
      </div>
    </div>
  );
}
