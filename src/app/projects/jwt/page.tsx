"use client";

import { useAppSelector } from "@/lib/hooks"; 
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const jwtPage = () => { 

  const projects = useAppSelector((state) => state.projects.projects);

  const jwtProjects = projects?.filter(item => item?.category?.includes("jwt"))

  console.log("projects= ", projects);
  console.log("jwtProjects=", jwtProjects);
  return (
    <ProjectCardWrapper>
      {jwtProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default jwtPage