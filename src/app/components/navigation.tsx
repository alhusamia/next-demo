"use client";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product 1", href: "/products/1" },
    { name: "Users", href: "/users-server" },
  ];

  return (
    <nav className="flex items-center justify-center p-4">
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <div
            key={link.name}
            className="mr-4 pv-2 ph-2 bg-white flex rounded-lg align-center juctify-center"
          >
            <Link
              key={link.name}
              href={link.href}
              className={isActive ? "font-bold mr-4" : "mr-4 text-blue-500"}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};
