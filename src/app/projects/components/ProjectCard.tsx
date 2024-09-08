import Image from 'next/image'
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
                    <span className=" transition-all text-md font-[600] text-purple-500 hover:text-white  bg-slate-700 px-4 py-1 rounded-md capitalize"  > {category}</span>
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