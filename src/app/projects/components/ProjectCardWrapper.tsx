import { ReactNode } from "react"


const ProjectCardWrapper = ({children}:{children:ReactNode}) => {
  return (
    <section className="container p-3   mx-auto ">
    <div className="    grid   grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  </section>
  )
}

export default ProjectCardWrapper