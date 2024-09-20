// pages/auth/signin.tsx
"use client";

import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function SignIn() {
  const [providers, setProviders] = useState<any>({});

  const fetchProviders = async () => {
    const providers = await getProviders();
    setProviders(providers);
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-8 bg-card rounded-lg shadow-lg">
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name} className="mb-4">
            <Button
              onClick={() => signIn(provider.id, { redirectTo: "/topics" })}
              className="w-full"
            >
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
