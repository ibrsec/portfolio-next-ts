"use client";

import { useAppSelector } from "@/lib/hooks"; 
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const mongodbPage = () => { 

  const projects = useAppSelector((state) => state.projects.projects);

  const mongodbProjects = projects?.filter(item => item?.category?.includes("mongodb"))

  console.log("projects= ", projects);
  console.log("mongodbProjects=", mongodbProjects);
  return (
    <ProjectCardWrapper>
      {mongodbProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default mongodbPage