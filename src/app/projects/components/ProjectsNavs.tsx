"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

 
const ProjectsNavs = () => {
    const pathName= usePathname();
    const allProjectsActiveClass = pathName === "/projects"? "active" : "";
    const htmlProjectsActiveClass = pathName === "/projects/html"? "active" : "";
    const fullstackActiveClass = pathName === "/projects/fullstack"? "active" : "";
    const reactProjectsActiveClass = pathName === "/projects/react"? "active" : "";
    const expressProjectsActiveClass = pathName === "/projects/express"? "active" : "";
    const nextProjectsActiveClass = pathName === "/projects/next"? "active" : "";
    const typescriptProjectsActiveClass = pathName === "/projects/typescript"? "active" : "";
    const jwtProjectsActiveClass = pathName === "/projects/jwt"? "active" : "";
    const mongodbProjectsActiveClass = pathName === "/projects/mongodb"? "active" : "";
    const postgresqlProjectsActiveClass = pathName === "/projects/postgresql"? "active" : "";
    const reduxProjectsActiveClass = pathName === "/projects/redux"? "active" : "";
    const contextProjectsActiveClass = pathName === "/projects/context"? "active" : "";
    const tailwindProjectsActiveClass = pathName === "/projects/tailwind"? "active" : "";
    const materialProjectsActiveClass = pathName === "/projects/material"? "active" : "";
    const bootstrapProjectsActiveClass = pathName === "/projects/bootstrap"? "active" : "";
    const SassProjectsActiveClass = pathName === "/projects/sass"? "active" : "";

  return (
    <div className="flex items-center justify-center">
        <div className="flex items-center justify-center flex-wrap border-b-2 mb-2">
            <Link className={allProjectsActiveClass + " project-nav-links"} href="/projects" >All</Link>
            <Link className={htmlProjectsActiveClass + " project-nav-links"} href="/projects/html" >HTML</Link>
            <Link className={fullstackActiveClass + " project-nav-links"} href="/projects/fullstack" >Full-Stack</Link>
            <Link className={reactProjectsActiveClass + " project-nav-links"} href="/projects/react" >React.js</Link>
            <Link className={expressProjectsActiveClass + " project-nav-links"} href="/projects/express" >Express.js</Link>
            <Link className={nextProjectsActiveClass + " project-nav-links"} href="/projects/next" >Next.js</Link>
            <Link className={typescriptProjectsActiveClass + " project-nav-links"} href="/projects/typescript" >TypeScript</Link>
            <Link className={jwtProjectsActiveClass + " project-nav-links"} href="/projects/jwt" >Jwt</Link>
            <Link className={mongodbProjectsActiveClass + " project-nav-links"} href="/projects/mongodb" >MongoDB</Link>
            <Link className={postgresqlProjectsActiveClass + " project-nav-links"} href="/projects/postgresql" >PostgreSQL</Link>
            <Link className={reduxProjectsActiveClass + " project-nav-links"} href="/projects/redux" >Redux</Link>
            <Link className={contextProjectsActiveClass + " project-nav-links"} href="/projects/context" >Context</Link>
            <Link className={tailwindProjectsActiveClass + " project-nav-links"} href="/projects/tailwind" >Tailwind</Link>
            <Link className={materialProjectsActiveClass + " project-nav-links"} href="/projects/material" >Material</Link>
            <Link className={bootstrapProjectsActiveClass + " project-nav-links"} href="/projects/bootstrap" >Bootstrap</Link>
            <Link className={SassProjectsActiveClass + " project-nav-links"} href="/projects/sass" >Sass</Link>
        </div>

    </div>
  )
}

export default ProjectsNavs