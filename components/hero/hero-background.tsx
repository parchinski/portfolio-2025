"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function HeroBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const variants = {
    initial: { opacity: 0 },
    enter: { opacity: 0.8, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.6, ease: "easeIn" } },
  };

  const imgSrc =
    resolvedTheme === "dark" ? "/dark-background.jpg" : "/light-background.jpg";
  const imgAlt =
    resolvedTheme === "dark" ? "Dark background" : "Light background";

  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none isolate hidden lg:block -z-30"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 -z-20">
        {mounted && (
          <AnimatePresence mode="wait">
            <motion.div
              key={imgSrc} // key triggers re-mount on theme change
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={imgSrc}
                alt={imgAlt}
                fill
                priority
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/* tiny LQIP */"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
      />
    </>
  );
}
