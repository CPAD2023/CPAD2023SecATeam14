"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { AuthContextProvider } from "@/context/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </NextUIProvider>
  );
}
