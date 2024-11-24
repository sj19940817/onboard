"use client";
import React from "react";
import Link from "next/link";

// shadcn
import { Button } from "@/components/ui/button";

// assets
import { Wand2Icon } from "lucide-react";

interface HeroProps {
  title: string;
  description: string;
}

export const Hero = ({ title, description }: HeroProps) => {
  return (
    <div className="w-full max-w-full overflow-hidden bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 from-zinc-200 to-zinc-50">
      <div className="container">
        <div className="relative flex flex-col justify-center items-center w-full h-96 text-center">
          <h2 className="text-[130px] lg:text-[200px] font-bold text-black dark:text-white inline-flex tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {title}
          </h2>
          <div className="flex flex-col justify-center items-center rounded-3xl relative backdrop-blur bg-zinc-100/50 dark:bg-zinc-900/50 text-black dark:text-white px-16 py-8 mt-48 lg:mt-40 space-y-4">
            <h3 className="text-sm lg:text-base font-normal lg:font-light">
              {description}
            </h3>
            <Button size="lg" asChild>
              <Link href="#tours">
                <span>Start a tour</span> <Wand2Icon size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
