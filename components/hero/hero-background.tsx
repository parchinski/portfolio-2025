"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { AnimatedGroup } from "@/components/ui/animated-group";

export function HeroBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* decorative gradients */}
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate contain-strict hidden lg:block"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      </div>

      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                delayChildren: 1,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.3,
                duration: 2,
              },
            },
          },
        }}
        className="absolute inset-0 -z-20"
      >
        {mounted && (
          <>
            {resolvedTheme === "dark" ? (
              <Image
                src="/dark-background.jpg"
                alt="Dark background"
                className="absolute inset-0 -z-20 w-full h-full object-cover opacity-80"
                width="3276"
                height="4095"
              />
            ) : null}
          </>
        )}
      </AnimatedGroup>

      {/* gradient fade */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
      />
    </>
  );
}
