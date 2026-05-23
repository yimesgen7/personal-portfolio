"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Web development: HTML, CSS, TypeScript, JavaScript, React, NextJS.</li>
        <li>Programming languages: Python, Java,JavaScript, Golang</li>
        <li>Frameworks: Spring Boot, FastAPI,Django, NextJS</li>
        <li>Databases: MySQL, PostgreSQL,MongoDB</li>
        <li>Tools: Git, GitHub, Docker, Linux</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>preparatory school: Falcon Acadamy</li>
        <li>Bachelor degree: Unity University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://www.udacity.com/certificate/lp/47a041ca-9d6f-4855-a923-0683fa6d0e76"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-sky-500 transition-colors underline-offset-2 hover:underline"
          >
            Android Fundamentals – Udacity
          </a>
        </li>
        <li>
          <a
            href="https://www.udacity.com/certificate/lp/316f20ab-52e5-438e-8dde-17f8944f8d2b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-sky-500 transition-colors underline-offset-2 hover:underline"
          >
            AI Fundamentals – Udacity
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-foreground" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-images.png"
          alt="About me"
          width={500}
          height={500}
          className="rounded-lg object-cover"
          priority
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
