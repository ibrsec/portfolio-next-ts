"use client";

import { useAppSelector } from "@/lib/hooks";
import useProject from "@/lib/useProject";
import { useEffect } from "react";
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";

const HtmlCssPage = () => {
  const { getProjects } = useProject();

  useEffect(() => {
    getProjects();
  }, []);

  const projects = useAppSelector((state) => state.projects.projects);

  const htmlProjects = projects?.filter(item => item?.category?.includes("html"))

  console.log("projects= ", projects);
  console.log("htmlProjects=", htmlProjects);
  return (

    <ProjectCardWrapper>
      {htmlProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  );
};

export default HtmlCssPage;

const a = [
  {
    id: 1,
    projectName: "Todo Nowie",
    projectLiveLink: "https://todo-nowie-nextjs.vercel.app/",
    projectRepo: "https://github.com/ibrsec/todo-nowie",
    projectGif:
      "https://github.com/ibrsec/todo-nowie/raw/main/public/images/project.gif",
    category: ["html"],
  },
  {
    id: 2,
    projectName: "Ultra Stock App",
    projectLiveLink: "https://ultra-stock-app.vercel.app/stock",
    projectRepo: "https://github.com/ibrsec/stock-app",
    projectGif:
      "https://github.com/ibrsec/stock-app/raw/master/public/project.gif",
    category: ["html"],
  },
  {
    id: 3,
    projectName: "Blog App",
    projectLiveLink: "https://ultra-blog-app.vercel.app/",
    projectRepo: "https://github.com/ibrsec/blog-app",
    projectGif:
      "https://github.com/ibrsec/blog-app/raw/master/public/project.gif",
    category: ["react"],
  },
  {
    id: 4,
    projectName: "Blog App",
    projectLiveLink: "https://ultra-blog-app.vercel.app/",
    projectRepo: "https://github.com/ibrsec/blog-app",
    projectGif:
      "https://github.com/ibrsec/blog-app/raw/master/public/project.gif",
    category: ["react", "typescript"],
  },
  {
    id: 5,
    projectName: "Blog App",
    projectLiveLink: "https://ultra-blog-app.vercel.app/",
    projectRepo: "https://github.com/ibrsec/blog-app",
    projectGif:
      "https://github.com/ibrsec/blog-app/raw/master/public/project.gif",
    category: ["next"],
  },
  {
    id: 6,
    projectName: "Blog App",
    projectLiveLink: "https://ultra-blog-app.vercel.app/",
    projectRepo: "https://github.com/ibrsec/blog-app",
    projectGif:
      "https://github.com/ibrsec/blog-app/raw/master/public/project.gif",
    category: ["next"],
  },
  {
    id: 7,
    projectName: "Blog App",
    projectLiveLink: "https://ultra-blog-app.vercel.app/",
    projectRepo: "https://github.com/ibrsec/blog-app",
    projectGif:
      "https://github.com/ibrsec/blog-app/raw/master/public/project.gif",
    category: ["typescript"],
  },
  {
    id: 8,
    projectName: "Blog App",
    projectLiveLink: "https://ultra-blog-app.vercel.app/",
    projectRepo: "https://github.com/ibrsec/blog-app",
    projectGif:
      "https://github.com/ibrsec/blog-app/raw/master/public/project.gif",
    category: ["next", "typescript"],
  },
];
