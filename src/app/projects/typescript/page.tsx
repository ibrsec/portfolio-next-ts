"use client";

import { useAppSelector } from "@/lib/hooks"; 
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const TypescriptPage = () => { 

  const projects = useAppSelector((state) => state.projects.projects);

  const typescriptProjects = projects?.filter(item => item?.category?.includes("typescript"))

  console.log("projects= ", projects);
  console.log("typescriptProjects=", typescriptProjects);
  return (
    <ProjectCardWrapper>
      {typescriptProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default TypescriptPage