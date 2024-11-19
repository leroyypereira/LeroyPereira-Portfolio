// import React from 'react'
// import aboutImg from "../assets/aboutimg.png"
// import { ABOUT_TEXT } from '../constants'

// const About = () => {
//   return (
//     <div className = "border-b border-neutral-900 pb-4">
//         <h2 className ="my-20 text-center text-4xl">About
//             <span className = "text-neutral-500"> Me</span>
//         </h2>
//         <div className = "flex flex-wrap">
//             <div className = "w-full lg:w-1/2 lg:p-8">
//                 <div className = "flex items-center justify-center">
//                     <img className = "rounded-2xl" src={aboutImg} alt="About Me" />
//                 </div>
//             </div>
//             <div className = "w-full lg:2-1/2">
//                 <div className = "flex justify-center lg:justify-start">
//                     <p>{ABOUT_TEXT}</p>
//                 </div>
//             </div>
//         </div>      
//     </div>
//   );
// }
import React from 'react';
import aboutImg from "../assets/aboutimg.png";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="object-scale-down h-80 w-70 rounded-2xl" src={aboutImg} alt="About Me" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;