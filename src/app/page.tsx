"use client";

import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          DSA Learning Platform
        </h1>
        <Button className="mt-8" onClick={() => router.push("/login")}>
          Get Started
        </Button>
      </div>
    </main>
  );
}
