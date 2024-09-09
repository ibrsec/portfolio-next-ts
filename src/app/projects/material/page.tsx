"use client";

import { useAppSelector } from "@/lib/hooks"; 
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const materialPage = () => { 

  const projects = useAppSelector((state) => state.projects.projects);

  const materialProjects = projects?.filter(item => item?.category?.includes("material"))

  console.log("projects= ", projects);
  console.log("materialProjects=", materialProjects);
  return (
    <ProjectCardWrapper>
      {materialProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default materialPage