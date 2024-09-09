"use client";

import { useAppSelector } from "@/lib/hooks"; 
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const bootstrapPage = () => { 
  

  const projects = useAppSelector((state) => state.projects.projects);

  const bootstrapProjects = projects?.filter(item => item?.category?.includes("bootstrap"))

  console.log("projects= ", projects);
  console.log("bootstrapProjects=", bootstrapProjects);
  return (
    <ProjectCardWrapper>
      {bootstrapProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default bootstrapPage