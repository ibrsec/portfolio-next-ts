import React from 'react'
import ButtonComp from '../components/ButtonComp'

const AboutPage = () => {
  return (
    <section className="font-bold my-[120px] container mx-auto px-5  ">
            <div className=" flex flex-col md:flex-row items-center gap-7 md:gap-3 py-[10rem] ">
              <div className="flex-grow">
                <img src="/images/portfolio-about.webp" className="w-full object-contain" alt="" />
              </div>
              <div className="flex-grown">
                <h3 className='text-7xl lg:text-8xl'>About <span className='text-[#64fa91]'>Me</span></h3>
                <h4 className=' my-7 text-5xl lg:text-7xl'>Frontend Developer!</h4>
                <p className='font-[400] my-7 text-2xl tracking-wide'>I'm a passionate and results-oriented Full-Stack Developer with a strong foundation in building user-centric web applications. My experience spans both frontend and backend development, bridging the gap between software engineering and quality assurance. This unique blend allows me to deliver seamless, high-quality web solutions that prioritize both functionality and performance.</p>
                <a className="" href="https://www.linkedin.com/in/ibr-seckin/" target="true">
                <ButtonComp text="Read More" />
                </a>
              </div>
            </div>
            
          </section>
  )
}

export default AboutPage
