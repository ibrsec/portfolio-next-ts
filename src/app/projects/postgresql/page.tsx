"use client";

import { useAppSelector } from "@/lib/hooks"; 
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const postgresqlPage = () => { 

  const projects = useAppSelector((state) => state.projects.projects);

  const postgresqlProjects = projects?.filter(item => item?.category?.includes("postgresql"))

  console.log("projects= ", projects);
  console.log("postgresqlProjects=", postgresqlProjects);
  return (
    <ProjectCardWrapper>
      {postgresqlProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default postgresqlPage