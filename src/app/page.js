"use client";

import Image from "next/image";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="border-b w-full text-center p-2 mb-4">Gallery app</h1>
      <section className="px-4">
        <Gallery />
      </section>
    </main>
  );
}
