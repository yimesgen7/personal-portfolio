"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ethio Electric Utility Management System",
    description:
      "Full-stack utility management platform for billing, customers, and operations — built with Next.js, TypeScript, and Prisma.",
    image:
      "/images/projects/ethioelectric.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/yimesgen7/Ethio-Electric-utility-management-system",
    previewUrl: "https://ethio-electric-utility-management-s-one.vercel.app/",
  },
  {
    id: 2,
    title: "Mazeball 2.0",
    description:
      "Interactive maze ball game with start and hard modes — built with Next.js and TypeScript.",
    image: "/images/projects/maze ball.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yimesgen7/mazeball2.0",
    previewUrl: "https://mazeball2-0.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-foreground mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-foreground flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
