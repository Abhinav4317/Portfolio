import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project-journal.png",
      projectName: "Memoria",
      projectLink: "https://memoria-journal.vercel.app/",
      projectDescription:
        "Memoria is a journaling and mood analysis app that integrates mood-based images from Pixabay, real-time mood analysis, and personalized disposition summaries. It uses NeonDB and Prisma for secure database operations, Clerk for authentication, and JWT for session management. The app features mood charts and insights to support emotional well-being.",
      projectTech: [
        "Next.js",
        "Clerk",
        "NeonDB",
        "Prisma",
        "Tailwind",
        "Pixabay API",
        "Shadcn UI",
      ],

      projectExternalLinks: {
        github: "https://github.com/Abhinav4317/Memoria-Journal",
        externalLink: "https://memoria-journal.vercel.app/",
      },
    },
    {
      image: "/project-bookstore.png",
      projectName: "BookHaven",
      projectLink: "https://book-haven-gilt.vercel.app/",
      projectDescription:
        "BookHaven is an online bookstore and blogging app built with the MERN stack and Vite. It features image optimization via Cloudinary, secure transactions through Stripe, and advanced search and filter functionalities. The app supports buying and selling hard and digital copies, publishing blogs, and uses JWT and bcryptjs for fast login.",
      projectTech: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Tailwind v3",
        "Stripe",
        "JWT",
        "Cloudinary",
        "Vite",
      ],
      projectExternalLinks: {
        github: "https://github.com/Abhinav4317/Memoria-Journal",
        externalLink: "https://book-haven-gilt.vercel.app/",
      },
    },
    {
      image: "/project-sih.png",
      projectName: "Yojana Sahayak",
      projectLink: "https://github.com/Abhinav4317/P.S.1760-SIH",
      projectDescription:
        "The AI-driven financial scheme recommender, developed for Smart India Hackathon 2024, won national recognition. It offers personalized recommendations, regional insights, and loan predictions for farmers, with dashboards for officers to manage scheme targets across 1,500+ districts, using AI/ML models.",
      projectTech: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "TensorFlow",
        "Matplotlib",
        "Uvicorn",
      ],
      projectExternalLinks: {
        github: "https://github.com/Abhinav4317/P.S.1760-SIH",
        externalLink: "https://github.com/Abhinav4317/SIH-P.S.1760-ML_MODEL",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
