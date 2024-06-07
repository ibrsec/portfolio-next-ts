import Image from "next/image";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ButtonComp from "./components/ButtonComp";
export default function Home() {
  return (
    <div>
      <>
        <div className="">
          
          <main className="font-bold my-[120px] container mx-auto px-5  ">
            <div className="desc-container flex flex-col md:flex-row items-center gap-1 ">
              <div className="flex-grow">
                <h2
                  id="desc "
                  className="text-[3rem] md:text-[4.8rem] font-[500] text-white"
                  style={{ fontFamily: "Courier New" }}
                >
                  {/*
          font-family: 'Courier New', Courier, monospace;
          font-size: 4.8rem;
          font-weight: 500;
          color: #fff; */}
                  Hi there!!
                  <br />
                  Welcome to my Portfolio page👋🏻
                </h2>
                <h4 className="text-[2rem] md:text-5xl font-semibold text-[#64fa91] my-4 tracking-wide">
                  I'm a Frontend Developer!
                </h4>
                <a href="/pdf/resume.pdf" download="ibrahim-seckin-resume">
                <ButtonComp text="Dowload Resume"/></a>
                <div className="flex items-center gap-3 my-5">
                  <a
                    href="https://www.linkedin.com/in/ibr-seckin/"
                    target="true"
                  >
                    <div className="border border-3 border-[#64fa91] hover:border-blue-400 p-4 text-[#64fa91] hover:text-blue-400 rounded-full transition-all">
                      <FaLinkedinIn className="text-[20px]" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/ibrsec"
                    target="true"
                  >
                    <div className="border border-3 border-[#64fa91] hover:border-blue-400 p-4 text-[#64fa91] hover:text-blue-400 rounded-full transition-all">
                      <FaGithub className="text-[20px]" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex-grown">
                <img src="/images/1.png" alt="" />
              </div>
            </div>
            
          </main>



          
          {/*  */}
          
        </div>
        
      </>
    </div>
  );
}
