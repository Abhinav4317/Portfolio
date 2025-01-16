import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const achievements = [
    {
      name: "SIH-2024",
      role: "Won Smart India Hackathon 2024",
      url: "https://drive.google.com/file/d/1-NDwMPeFLE6hhDG8GVb84TGDDmpRlBqh/view",
      start: "December 2024",
      end: "",
      shortDescription: [
        "Won Smart India Hackathon 2024, emerging as champions out of 1,000+ teams by solving problem statement #1760 from India Post.",
        "Developed an AI-driven solution for identifying financial needs based on demography and seasonal farming cycles, impacting millions.",
        "Awarded a cash prize of ₹1 lakh for delivering a solution that facilitates financial inclusion across rural India.",
        "Collaborated with a team of talented individuals, overcoming challenges and demonstrating the power of innovation and teamwork.",
      ],
    },
    {
      name: "CodeBhoj",
      role: "Stood 5th in Inter-Bhopal CP Contest",
      url: "#",
      start: "April 2023",
      end: "",
      shortDescription: [
        "Secured 5th place among 200+ participants in CodeBhoj, an inter-college coding contest held across Bhopal,demonstrating strong problem-solving skills in a highly competitive environment.",
      ],
    },
    {
      name: "LeetCode",
      role: "Acquired Knight Badge",
      url: "https://leetcode.com/u/abhinav4317/",
      start: "October 2024",
      end: "Present",
      shortDescription: [
        "Ranked in the top 3.46% on Leetcode, demonstrating strong problem-solving skills by earning the prestigious Knight badge and achieving a maximum rating of 1948.",
      ],
    },
    {
      name: "Codame",
      role: "Competitive Programming Team Executive",
      url: "#",
      start: "November 2023",
      end: "Present",
      shortDescription: [
        "Served as the Competitive Programming Team Executive at Codame, IIIT Bhopal, fostering a community of young CP enthusiasts by organizing regular sessions and contest discussions.",
        "Contributed to the development of contest problems for Inter-IIIT CP contests like OptiGo, Mr. and Miss. Coder, and First Line of Code (FLOC).",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Some of my Achievements</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {achievements.map((achievement, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={achievement.name}
              >
                <span>{achievement.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{achievements[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={achievements[selected].url} className="link">
                  {achievements[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {achievements[selected].start} - {achievements[selected].end}
            </p>
            <ul className="exp-details-list">
              {achievements[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
