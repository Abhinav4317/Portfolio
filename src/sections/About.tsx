import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            नमस्ते!! My name is Abhinav, and I am passionate about building
            impactful digital solutions for the web. My journey in web
            development began in my freshman year when I created{" "}
            <Link
              href="https://book-haven-gilt.vercel.app/"
              className="link"
              target="_blank"
            >
              BookHaven
            </Link>
            , a digital bookstore and blogging app using React.js and
            Express.js.
          </p>
          <p className="about-grid-info-text">
            Since then, I’ve worked on a variety of projects, exploring tools
            and frameworks like React.js, Node.js, Prisma, NeonDB, Next.js, and
            WebSockets. My love for problem-solving has also driven my deep
            interest in Algorithms and Data Structures, earning me the{" "}
            <span className="link">Knight</span> badge on{" "}
            <Link
              target="_blank"
              href="https://leetcode.com/u/abhinav4317/"
              className="link"
            >
              LeetCode
            </Link>
            .
          </p>

          <p className="about-grid-info-text">
            When I’m not coding, you can find me binging on action-packed movies
            and shows, fueling my creative energy.
          </p>
          <p className="about-grid-info-text">
            I am currently trying to explore the fascinating world of Ethereum
            and Quantum Cryptography.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React.js</li>
            <li className="about-grid-info-list-item">Express.js</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">NeonDB(Postgres)</li>
            <li className="about-grid-info-list-item">Prisma</li>
            <li className="about-grid-info-list-item">Tailwind</li>
            <li className="about-grid-info-list-item">Git/GitHub</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/profile3.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
