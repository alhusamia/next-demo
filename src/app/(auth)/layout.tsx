"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forget-password" },
];

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [inputData, setInputData] = useState<string>("");

  return (
    <div>
      <nav className="flex items-center justify-center p-4">
        <div>
          <input
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <div className="mr-4 pv-2 ph-2 bg-white flex rounded-lg align-center juctify-center">
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
      </nav>
      {children}
    </div>
  );
};
