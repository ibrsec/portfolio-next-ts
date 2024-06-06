"use client";

import { useAppSelector } from "@/lib/hooks";
import useProject from "@/lib/useProject";
import { useEffect } from "react";
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const TypescriptPage = () => {
  const { getProjects } = useProject();

  useEffect(() => {
    getProjects();
  }, []);

  const projects = useAppSelector((state) => state.projects.projects);

  const typescriptProjects = projects?.filter(item => item?.category?.includes("typescript"))

  console.log("projects= ", projects);
  console.log("typescriptProjects=", typescriptProjects);
  return (
    <ProjectCardWrapper>
      {typescriptProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default TypescriptPage