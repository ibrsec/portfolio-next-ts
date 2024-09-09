"use client";

import { useAppSelector } from "@/lib/hooks"; 
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const tailwindPage = () => { 

  const projects = useAppSelector((state) => state.projects.projects);

  const tailwindProjects = projects?.filter(item => item?.category?.includes("tailwind"))

  console.log("projects= ", projects);
  console.log("tailwindProjects=", tailwindProjects);
  return (
    <ProjectCardWrapper>
      {tailwindProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default tailwindPage