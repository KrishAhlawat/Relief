"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 px-4 md:px-20 py-2 flex justify-between items-center">
      <Link href="/" className="text-white text-lg font-semibold">
        Relief
      </Link>

      <div className="space-x-4">
        <Link href="/" className="text-gray-300 hover:text-white">
          Home
        </Link>
        <Link href="/add" className="text-gray-300 hover:text-white">
          Add Relief
        </Link>
        <Link href="/about" className="text-gray-300 hover:text-white">
          About
        </Link>
      </div>
    </nav>
  );
}
