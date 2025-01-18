"use client";
import { useRouter } from "next/router";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    // redirect('/')
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
