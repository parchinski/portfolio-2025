"use client";

import React from "react";
import { Variants } from "framer-motion";
import { ExternalLink, FileText, Mail } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";

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

export function AboutMeSection() {
  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center">
          {/* Left Column - Profile Image */}
          <AnimatedGroup
            className="w-full lg:w-1/3"
            variants={transitionVariants}
          >
            <div className="relative overflow-hidden rounded-3xl border shadow-xl h-[600px] bg-gradient-to-tr from-purple-500/30 to-cyan-500/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-background/30 dark:text-foreground/10">
                  BP
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 mix-blend-overlay" />
            </div>
          </AnimatedGroup>

          {/* Right Column - About Me Content */}
          <div className="w-full lg:w-2/3">
            <AnimatedGroup variants={transitionVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <TextEffect>About Me</TextEffect>
              </h2>

              <div className="space-y-4 text-lg">
                <p>
                  I&apos;m a passionate Full-Stack Developer with experience
                  building modern web applications using React, Next.js,
                  Node.js, and TypeScript. With a strong foundation in both
                  frontend and backend development, I create responsive,
                  accessible, and performant user experiences.
                </p>

                <p>
                  Currently focusing on expanding my DevOps knowledge with
                  technologies like Docker, Kubernetes, and CI/CD pipelines.
                  I&apos;m dedicated to continuous learning and staying
                  up-to-date with industry best practices.
                </p>

                <p>
                  When I&apos;m not coding, I enjoy exploring new technologies,
                  contributing to open-source projects, and mentoring aspiring
                  developers.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Tailwind CSS",
                    "Docker",
                    "Git",
                    "RESTful APIs",
                    "GraphQL",
                    "CI/CD",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-xl">
                  <a href="mailto:bryantparchinski@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contact Me</span>
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl"
                >
                  <a href="/resume.pdf" download>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Download Resume</span>
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="rounded-xl"
                >
                  <a
                    href="https://github.com/parchinski"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    <span>View Projects</span>
                  </a>
                </Button>
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
