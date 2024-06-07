"use client";
import { useEffect, useRef } from "react"
import ProjectsNavs from "./components/ProjectsNavs"
import { AppStore, makeStore } from "@/lib/store"
import { Provider } from "react-redux" 


const ProjectsLayout = ({children}:{children:React.ReactNode}) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }


  return (
    <div className="pt-[150px] pb-[150px] md:pt-[130px]">
        <Provider store={storeRef.current}>
          
        <ProjectsNavs /> 
        {children}
        </Provider>
        
        
        
        </div>
  )
}

export default ProjectsLayout