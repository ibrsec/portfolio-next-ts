"use client";

import { useAppSelector } from "@/lib/hooks"; 
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const reduxPage = () => { 

  const projects = useAppSelector((state) => state.projects.projects);

  const reduxProjects = projects?.filter(item => item?.category?.includes("redux"))

  console.log("projects= ", projects);
  console.log("reduxProjects=", reduxProjects);
  return (
    <ProjectCardWrapper>
      {reduxProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default reduxPage