"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectCardWrapper from "./components/ProjectCardWrapper";
import { useAppSelector } from "@/lib/hooks";
import useProject from "@/lib/useProject";

const projectsMock: IProject[] = [
  {
    id: 1,
    projectName: "Todo Nowie",
    projectLiveLink: "https://todo-nowie-nextjs.vercel.app/",
    projectRepo: "https://github.com/ibrsec/todo-nowie",
    projectGif:
      "https://github.com/ibrsec/accordion-react/raw/main/src/img/project.gif",
    category: ["next"],
  },
  {
    id: 2,
    projectName: "Ultra Stock App",
    projectLiveLink: "https://ultra-stock-app.vercel.app/stock",
    projectRepo: "https://github.com/ibrsec/stock-app",
    projectGif:
      "https://github.com/ibrsec/stock-app/raw/master/public/project.gif",
    category: ["next"],
  },
  {
    id: 3,
    projectName: "Blog App",
    projectLiveLink: "https://ultra-blog-app.vercel.app/",
    projectRepo: "https://github.com/ibrsec/blog-app",
    projectGif:
      "https://github.com/ibrsec/blog-app/raw/master/public/project.gif",
    category: ["next"],
  },
  {
    id: 3,
    projectName: "Blog App",
    projectLiveLink: "https://ultra-blog-app.vercel.app/",
    projectRepo: "https://github.com/ibrsec/blog-app",
    projectGif:
      "https://github.com/ibrsec/blog-app/raw/master/public/project.gif",
    category: ["next"],
  },
  {
    id: 3,
    projectName: "Blog App",
    projectLiveLink: "https://ultra-blog-app.vercel.app/",
    projectRepo: "https://github.com/ibrsec/blog-app",
    projectGif:
      "https://github.com/ibrsec/blog-app/raw/master/public/project.gif",
    category: ["next"],
  },
  {
    id: 3,
    projectName: "Blog App",
    projectLiveLink: "https://ultra-blog-app.vercel.app/",
    projectRepo: "https://github.com/ibrsec/blog-app",
    projectGif:
      "https://github.com/ibrsec/blog-app/raw/master/public/project.gif",
    category: ["next"],
  },
];

const ProjectsPage: React.FC = () => { 
//   const [projects, setProjects] = useState<IProject[]>([]);


const projects = useAppSelector(state=>state.projects.projects)
// console.log('projectsSlicedan', projectsSlicedan)

 
const {getProjects} = useProject();


useEffect(() => {
      getProjects();

  }, []);
  console.log(projects);






  return (
    <ProjectCardWrapper>
      {projects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  );
};

export default ProjectsPage;
