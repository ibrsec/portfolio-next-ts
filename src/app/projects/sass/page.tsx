"use client";

import { useAppSelector } from "@/lib/hooks"; 
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const sassPage = () => { 

  const projects = useAppSelector((state) => state.projects.projects);

  const sassProjects = projects?.filter(item => item?.category?.includes("sass"))

  console.log("projects= ", projects);
  console.log("sassProjects=", sassProjects);
  return (
    <ProjectCardWrapper>
      {sassProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default sassPage