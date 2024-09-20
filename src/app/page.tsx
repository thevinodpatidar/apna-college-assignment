"use client";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
}
