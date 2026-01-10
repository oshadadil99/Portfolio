import '../index.css';

import {RiReactjsLine} from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";



const Technology = () => {
  const skills = [
    { icon: RiReactjsLine, color: "text-cyan-400", hoverColor: "hover:border-cyan-400", name: "React" },
    { icon: SiPython, color: "text-blue-400", hoverColor: "hover:border-blue-400", name: "Python" },
    { icon: SiTensorflow, color: "text-orange-400", hoverColor: "hover:border-orange-400", name: "TensorFlow" },
    { icon: SiPytorch, color: "text-red-500", hoverColor: "hover:border-red-500", name: "PyTorch" },
    { icon: SiFlask, color: "text-gray-300", hoverColor: "hover:border-gray-300", name: "Flask" },
    { icon: SiSpringboot, color: "text-green-500", hoverColor: "hover:border-green-500", name: "Spring Boot" },
    { icon: SiNodedotjs, color: "text-green-400", hoverColor: "hover:border-green-400", name: "Node.js" },
    { icon: SiTailwindcss, color: "text-cyan-300", hoverColor: "hover:border-cyan-300", name: "Tailwind CSS" },
    { icon: SiGooglecloud, color: "text-blue-500", hoverColor: "hover:border-blue-500", name: "Google Cloud" },
    { icon: SiSupabase, color: "text-emerald-400", hoverColor: "hover:border-emerald-400", name: "Supabase" },
    { icon: SiMysql, color: "text-blue-600", hoverColor: "hover:border-blue-600", name: "MySQL" },
    { icon: SiHtml5, color: "text-orange-500", hoverColor: "hover:border-orange-500", name: "HTML5" },
    { icon: SiCss3, color: "text-blue-500", hoverColor: "hover:border-blue-500", name: "CSS3" },
    { icon: SiPhp, color: "text-indigo-400", hoverColor: "hover:border-indigo-400", name: "PHP" },
  ];

  return (
    <div className='border-b border-neutral-900 pb-24'>
        <h1 className='my-20 text-center text-4xl font-bold text-white'>Skills</h1>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex flex-wrap items-center justify-center gap-6'>
                {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <div 
                            key={index}
                            className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900 ${skill.hoverColor} transition-all duration-300 hover:transform hover:scale-110`}
                        >
                            <IconComponent className={`text-7xl ${skill.color}`}/>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Technology;