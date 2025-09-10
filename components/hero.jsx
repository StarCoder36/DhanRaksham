"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return; // ✅ prevent null errors

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-56 pb-20 px-20 overflow-hidden">
      {/* Background Image Layer */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 transition-all duration-500 h-[80vh] md:h-screen"
      >
        <Image
          src="/dhanpic.jpeg"
          alt="Dashboard Preview"
          fill
          className="object-cover opacity-40 blur-sm"
          priority
        />
      </div>

      {/* Content Layer */}
      <div className="container relative z-10">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-16 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
