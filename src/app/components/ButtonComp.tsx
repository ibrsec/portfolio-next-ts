import React from "react";
type IProps = {
    text:string;
}
const ButtonComp:React.FC<IProps> = ({text}) => {
  return (
    <button
      className="px-10 py-6 text-[16px] md:text-[20px] my-5 bg-[#121e25] hover:bg-[#21573177] active:bg-[#215731cc] rounded-2xl transition-all"
      style={{ boxShadow: "0 .4px 20px #64fa91" }}
    >
      {text}
    </button>
  );
};

export default ButtonComp;
