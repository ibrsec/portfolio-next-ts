"use client";

import { useAppSelector } from "@/lib/hooks";
import useProject from "@/lib/useProject";
import { useEffect } from "react";
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const ReactPage = () => {
  const { getProjects } = useProject();

  useEffect(() => {
    getProjects();
  }, []);

  const projects = useAppSelector((state) => state.projects.projects);

  const reactProjects = projects?.filter(item => item?.category?.includes("react"))

  console.log("projects= ", projects);
  console.log("reactProjects=", reactProjects);
  return (
    <ProjectCardWrapper>
      {reactProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default ReactPage