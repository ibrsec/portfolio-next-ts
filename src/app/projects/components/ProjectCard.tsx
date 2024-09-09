import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
type IProps = {
    item:IProject;
}
const ProjectCard:React.FC<IProps> = ({item}) => {
  return (
    <article
            
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-[350] md:max-w-[370px] mx-auto mt-24 group   w-full h-[250px] hover:scale-105 transition-all "
            
          > 

            <Image
              src={item?.projectGif}  
              alt={item?.projectName}
              className="absolute inset-0 h-full w-full object-top object-contain" 
              />
              
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 flex flex-col items-start justify-start" />
            <div className="z-10  transition-all">
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                {item?.projectName}
              </h3>
              <div className="z-10 gap-y-1 justify-start flex-wrap text-sm leading-6 text-gray-300 flex items-center gap-3 mt-3 ">
                {
                  item?.category?.map(category=>(
                    <Link  href={"/projects/"+category} ><span className=" transition-all text-md font-[600] text-purple-500 hover:text-white  bg-slate-700 px-4 py-1 rounded-md capitalize"  > {category}</span></Link>
                  ))
                }
                
              </div>
            </div> 
            <div className="group-hover:z-10  transition-all">
              {/* <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                {item?.projectName}
              </h3> */}
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 flex items-center gap-3 mt-3 ">
                <a className=" transition-all text-lg font-[600] text-green-500 hover:text-white  bg-slate-700 px-4 py-1 rounded-md" href={item?.projectLiveLink} target="_blank">Live</a>
                <a className=" transition-all text-lg font-[600] text-green-500 hover:text-white  bg-slate-700 px-4 py-1 rounded-md" href={item?.projectRepo} target="_blank">Repo</a>
              </div>
            </div> 
          </article>
  )
}

export default ProjectCard


/*
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

             */