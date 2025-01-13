"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="mt-6 text-3xl font-bold">About Page</h1>
        <p className="mt-4 text-lg">This is the about page.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => router.push("/")}
        >
          Go to home{" "}
        </button>
      </div>
    </main>
  );
}
