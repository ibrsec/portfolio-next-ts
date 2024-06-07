import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="mt-[130px]  ">
      <form
        action="https://formspree.io/f/mzbnlqby"
        method="POST"
        className=" text-center w-11/12 md:w-3/5 sm:w-4/5 mx-auto my-4"
      >
        {/* text-align: center;
  width: 60%; 
  margin: 1rem auto; */}
        <h5>Send me a Message</h5>
        {/* <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        /> */}
        <input type="email" name="email" id="email" placeholder="Email" />
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          defaultValue={""}
        />
        <input type="submit" />
      </form>
      <div className="flex items-center gap-3 mb-5 justify-center mt-15">
        <a href="https://www.linkedin.com/in/ibr-seckin/" target="true">
          <div className="border border-3 border-[#64fa91] hover:border-blue-400 p-4 text-[#64fa91] hover:text-blue-400 rounded-full transition-all">
            <FaLinkedinIn className="text-[20px]" />
          </div>
        </a>
        <a href="https://github.com/ibrsec" target="true">
          <div className="border border-3 border-[#64fa91] hover:border-blue-400 p-4 text-[#64fa91] hover:text-blue-400 rounded-full transition-all">
            <FaGithub className="text-[20px]" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactPage;
