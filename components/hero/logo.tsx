"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("h-10 w-28", className)} />;
  }

  const logoSrc = theme === "dark" ? "/logo-dark.svg" : "/logo.svg";

  return (
    <Image
      src={logoSrc}
      alt="Bryant Parchinski"
      width={112}
      height={54}
      className={cn("h-10 w-auto", className)}
      priority
    />
  );
}
