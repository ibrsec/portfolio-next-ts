"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathName = usePathname();
  // console.log(pathName);
  // const [activeNav,setActiveLink] = useState('/');
  // useEffect(()=>{
  //   setActiveLink(pathName);
  // },[pathName])
  // console.log('activeNav = ',activeNav);
   
  const homeActiveClass = pathName === "/" ? "active" : "";
  const aboutActiveClass = pathName === "/about" ? "active" : "";
  const projectsActiveClass = pathName === "/projects" ? "active" : "";
  const contactActiveClass = pathName === "/contact" ? "active" : "";
console.log(pathName);
  return (
    <header id="header" className=" text-center pt-4 pb-1 fixed top-0 w-full bg-[#121e25] z-10 " style={{boxShadow:"0 .4px 30px #64fa91"}}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-2">
            
      
      <h1 className="tracking-widest text-[2rem] md:text-[3rem] lg:text-[4.5rem] font-[700] mb-4 mt-4  cursor-pointer text-[#64fa91] transition-all text-nowrap hover:scale-110" style={{fontFamily:"Bungee Shade"}}>İbrahim Seçkin</h1>
      {/* transform: scale(1.1); */}
      <nav className="navbar flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-13 ">   
        <Link className={homeActiveClass + " navbarlink"} href="/">Home</Link>
        <Link className={aboutActiveClass + " navbarlink"} href="/about">About</Link>
        <Link className={projectsActiveClass + " navbarlink"} href="/projects">Projects</Link>
        <Link className={contactActiveClass + " navbarlink"} href="/contact">Contact</Link>
      </nav>

      </div>
    </header>
  )
}

export default Header;