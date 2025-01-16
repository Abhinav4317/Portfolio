import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi! my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Abhinav Gangwar.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        Crafting scalable web solutions.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        I{"’"}m a pre-final year student at{" "}
        <span className="link">IIIT Bhopal</span> proficient in full-stack web
        development, including the <span className="link">MERN</span> and{" "}
        <span className="link">Vercel stacks</span>. With a strong foundation in{" "}
        <span className="link">Algorithms and Data Structures</span>, I excel at
        solving complex problems and optimizing performance, while my full-stack
        expertise drives me to create efficient, user-centric digital
        experiences.
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Check out my Resume"
          link="https://portfolio-beta-ecru-59.vercel.app/Abhinav_Resume.pdf"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
