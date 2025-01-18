import { Metadata } from "next";
import { About } from "./about";

export const metadata: Metadata = {
  title: "About yazan Page",
  description: "This is the about page.",
};

export default function AboutPage() {
  return <About />;
}
