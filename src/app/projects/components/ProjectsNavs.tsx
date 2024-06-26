"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

 
const ProjectsNavs = () => {
    const pathName= usePathname();
    const allProjectsActiveClass = pathName === "/projects"? "active" : "";
    const htmlProjectsActiveClass = pathName === "/projects/htmlcss"? "active" : "";
    const reactProjectsActiveClass = pathName === "/projects/react"? "active" : "";
    const nextProjectsActiveClass = pathName === "/projects/nextjs"? "active" : "";
    const typescriptProjectsActiveClass = pathName === "/projects/typescript"? "active" : "";

  return (
    <div className="flex items-center justify-center">
        <div className="flex items-center justify-center border-b-2 mb-2">
            <Link className={allProjectsActiveClass + " project-nav-links"} href="/projects" >All</Link>
            <Link className={htmlProjectsActiveClass + " project-nav-links"} href="/projects/htmlcss" >HTML</Link>
            <Link className={reactProjectsActiveClass + " project-nav-links"} href="/projects/react" >React.js</Link>
            <Link className={nextProjectsActiveClass + " project-nav-links"} href="/projects/nextjs" >Next.js</Link>
            <Link className={typescriptProjectsActiveClass + " project-nav-links"} href="/projects/typescript" >TypeScript</Link>
        </div>

    </div>
  )
}

export default ProjectsNavs