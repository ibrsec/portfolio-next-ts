"use client";

import { useAppSelector } from "@/lib/hooks";
import useProject from "@/lib/useProject";
import { useEffect } from "react";
import ProjectCardWrapper from "../components/ProjectCardWrapper";
import ProjectCard from "../components/ProjectCard";


const NextPage = () => {
  const { getProjects } = useProject();

  useEffect(() => {
    getProjects();
  }, []);

  const projects = useAppSelector((state) => state.projects.projects);

  const nextProjects = projects?.filter(item => item?.category?.includes("next"))

  console.log("projects= ", projects);
  console.log("nextProjects=", nextProjects);
  return (
    <ProjectCardWrapper>
      {nextProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  )
}

export default NextPage