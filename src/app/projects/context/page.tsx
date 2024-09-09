"use client";

import { useAppSelector } from "@/lib/hooks"; 
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const contextPage = () => { 
  

  const projects = useAppSelector((state) => state.projects.projects);

  const contextProjects = projects?.filter(item => item?.category?.includes("context"))

  console.log("projects= ", projects);
  console.log("contextProjects=", contextProjects);
  return (
    <ProjectCardWrapper>
      {contextProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default contextPage