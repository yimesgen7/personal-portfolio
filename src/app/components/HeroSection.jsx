"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-blue-500 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-foreground">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Yimesgen amanuel",
                1000,
                "UI/UX Designer",
                1000,
                "frontend dev",
                1000,
                "backend dev",
                1000,
              ]}
              wrapper="span"
              speed={15}
              repeat={Infinity}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base sm:text-lg mb-6 lg:text-xl max-w-xl"
          >
            A fullstack developer based in the{" "}
            <span className="bg-gradient-to-r from-green-700 to-pink-400 bg-clip-text text-transparent">
              ETHIOPIA
            </span>
            . I&apos;m passionate about building modern web applications using
            Next.js, React, and Tailwind CSS.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 w-full sm:w-auto rounded-full font-medium bg-sky-300 hover:bg-sky-400 text-sky-900 shadow-sm shadow-sky-300/40 dark:bg-sky-500/80 dark:hover:bg-sky-500 dark:text-white dark:shadow-sky-500/25 transition-colors duration-200"
            >
              Hire Me
            </Link>
            <Link
              href="CV.pdf"
              className="inline-flex items-center justify-center px-6 py-3 w-full sm:w-auto rounded-full font-medium border border-border bg-card text-foreground hover:bg-muted transition-colors duration-200"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-card w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/yime.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
