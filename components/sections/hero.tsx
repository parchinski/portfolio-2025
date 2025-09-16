"use client";

import { HeroHeader } from "@/components/hero/hero-header";
import { HeroBackground } from "@/components/hero/hero-background";
import { HeroContent } from "@/components/hero/hero-content";
import { CompanyCarousel } from "@/components/hero/company-carousel";

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="min-h-screen flex flex-col">
          <div className="relative flex-grow pt-24 md:pt-36">
            <HeroBackground />
            <HeroContent />
          </div>
          <div className="relative z-10 mt-auto">
            <CompanyCarousel />
          </div>
        </section>
      </main>
    </>
  );
}
