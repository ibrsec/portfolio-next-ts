"use client"; 
import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectCardWrapper from "./components/ProjectCardWrapper";
import { useAppSelector } from "@/lib/hooks";
import useProject from "@/lib/useProject";



const ProjectsPage: React.FC = () => {  

const projects = useAppSelector(state=>state.projects.projects) 

 
const {getProjects} = useProject();


useEffect(() => {
      getProjects();

  }, []);
  console.log(projects);






  return (
    <ProjectCardWrapper>
      {projects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </ProjectCardWrapper>
  );
};

export default ProjectsPage;
