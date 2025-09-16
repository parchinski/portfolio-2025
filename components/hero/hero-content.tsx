"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroContent() {
  return (
    <div className="mx-auto max-w-7xl px-12">
      <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
        <AnimatedGroup variants={transitionVariants}>
          <Link
            href="https://github.com/parchinski"
            className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
          >
            <span className="text-foreground text-sm">
              Passionate Full-Stack Developer
            </span>
            <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

            <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
              <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                <span className="flex size-6">
                  <ArrowRight className="m-auto size-3" />
                </span>
                <span className="flex size-6">
                  <ArrowRight className="m-auto size-3" />
                </span>
              </div>
            </div>
          </Link>

          <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
            Bryant Parchinski
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
            A passionate software developer from Florida, currently learning
            DevOps and Full-Stack Development. Ready to bring my skills to your
            team.
          </p>
        </AnimatedGroup>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
        >
          <div key={1} className="bg-foreground/10 rounded-[14px] border p-0.5">
            <Button asChild size="lg" className="rounded-xl px-5 text-base">
              <a href="mailto:bryantparchinski@gmail.com">
                <span className="text-nowrap">Contact Me</span>
              </a>
            </Button>
          </div>
          <div key={2} className="bg-foreground/10 rounded-[14px] border p-0.5">
            <Button asChild size="lg" className="rounded-xl px-5 text-base">
              <a href="mailto:bryantparchinski@gmail.com">
                <span className="text-nowrap">About Me</span>
              </a>
            </Button>
          </div>
          <div key={3} className="bg-foreground/10 rounded-[14px] border p-0.5">
            <Button asChild size="lg" className="rounded-xl px-5 text-base">
              <a href="mailto:bryantparchinski@gmail.com">
                <span className="text-nowrap">Hire Me</span>
              </a>
            </Button>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
