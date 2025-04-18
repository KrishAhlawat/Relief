"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  //   const { user } = useAuth()
  const router = useRouter();
  return (
    <nav className="bg-gray-800 px-4 py-2 flex justify-between items-center">
      <Link href="/" className="text-white text-lg font-semibold">
        Relief
      </Link>

      <div className="space-x-4">
        <Link href="/" className="text-gray-300 hover:text-white">
          Home
        </Link>
        <Link href="/about" className="text-gray-300 hover:text-white">
          About
        </Link>
        <Link href="/contact" className="text-gray-300 hover:text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
}
