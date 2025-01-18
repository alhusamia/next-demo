"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: Props) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex item-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-red-500">{error.message}</div>
        <button className="text-2xl font-bold text-blue-500" onClick={reload}>
          Reset
        </button>
      </div>
    </div>
  );
}
