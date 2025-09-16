"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const menuItems = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

interface NavMenuProps {
  className?: string;
  isMobile?: boolean;
}

export function NavMenu({ className, isMobile = false }: NavMenuProps) {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={className}>
      <ul
        className={cn(isMobile ? "space-y-6 text-base" : "flex gap-8 text-sm")}
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-muted-foreground hover:text-accent-foreground block duration-150"
            >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
