"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
  MarqueeFade,
} from "@/components/ui/marquee";

interface CompanyProps {
  name: string;
  logoLight: string;
  logoDark: string;
  width: number;
  height: number;
  className?: string;
}

const companies: CompanyProps[] = [
  {
    name: "Kalogon",
    logoLight: "/kalogon.svg",
    logoDark: "/kalogon-dark.svg",
    width: 150,
    height: 40,
    className: "mx-8",
  },
  {
    name: "CTFd",
    logoLight: "/ctfd.svg",
    logoDark: "/ctfd-dark.svg",
    width: 100,
    height: 40,
    className: "mx-8",
  },
  {
    name: "HackUCF",
    logoLight: "/hackucf.svg",
    logoDark: "/hackucf-dark.svg",
    width: 130,
    height: 40,
    className: "mx-8",
  },
];

export function CompanyCarousel() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-8 mb-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-medium text-muted-foreground">
          Companies I&apos;ve Worked With
        </h3>
      </div>

      {/* Company carousel */}
      <Marquee>
        <MarqueeContent pauseOnHover>
          {mounted &&
            companies.map((company, idx) => (
              <MarqueeItem key={`${company.name}-${idx}`}>
                <Image
                  src={
                    resolvedTheme === "dark"
                      ? company.logoDark
                      : company.logoLight
                  }
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className={cn(
                    "transition-all duration-200",
                    company.className,
                  )}
                />
              </MarqueeItem>
            ))}
        </MarqueeContent>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
      </Marquee>
    </div>
  );
}
