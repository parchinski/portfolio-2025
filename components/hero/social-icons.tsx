"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SocialIconsProps {
  className?: string;
  isScrolled?: boolean;
}

export function SocialIcons({ className }: SocialIconsProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render the correct icons after hydration to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which icons to use based on the theme
  const githubIcon =
    mounted && resolvedTheme === "dark" ? "/github-dark.svg" : "/github.svg";
  const linkedinIcon =
    mounted && resolvedTheme === "dark"
      ? "/linkedin-dark.svg"
      : "/linkedin.svg";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
      >
        <Link
          href="https://github.com/parchinski"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <Image
            src={githubIcon}
            alt="GitHub"
            width={16}
            height={16}
            className="size-4"
          />
          <span>GitHub</span>
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
      >
        <Link
          href="https://www.linkedin.com/in/bryant-parchinski-2b026b277/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Image
            src={linkedinIcon}
            alt="LinkedIn"
            width={16}
            height={16}
            className="size-4"
          />
          <span>LinkedIn</span>
        </Link>
      </Button>
    </div>
  );
}
