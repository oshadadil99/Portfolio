import '../index.css';
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiPhp, SiHtml5, SiCss3, SiPython, SiTensorflow, SiFlask,
         SiGooglecloud, SiPytorch, SiSupabase, SiMysql, SiTailwindcss,
         SiNodedotjs, SiSpringboot, SiLangchain, SiOpenai,
         SiMeta, SiHuggingface } from "react-icons/si";
import { FaBrain, FaChartBar, FaBullhorn } from "react-icons/fa";

const categories = [
  {
    title: "AI / Machine Learning",
    skills: [
      { icon: SiPython,     name: "Python",      color: "text-blue-400" },
      { icon: SiTensorflow, name: "TensorFlow",  color: "text-orange-400" },
      { icon: SiPytorch,    name: "PyTorch",     color: "text-red-500" },
      { icon: SiFlask,      name: "Flask",       color: "text-gray-300" },
      { icon: FaBrain,      name: "LLMs",        color: "text-purple-400" },
      { icon: SiHuggingface,name: "HuggingFace", color: "text-yellow-400" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { icon: RiReactjsLine, name: "React",       color: "text-cyan-400" },
      { icon: SiHtml5,       name: "HTML5",       color: "text-orange-500" },
      { icon: SiCss3,        name: "CSS3",        color: "text-blue-500" },
      { icon: SiTailwindcss, name: "Tailwind CSS",color: "text-cyan-300" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: SiNodedotjs,  name: "Node.js",    color: "text-green-400" },
      { icon: SiSpringboot, name: "Spring Boot", color: "text-green-500" },
      { icon: SiPhp,        name: "PHP",         color: "text-indigo-400" },
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      { icon: SiGooglecloud, name: "Google Cloud", color: "text-blue-500" },
      { icon: SiSupabase,    name: "Supabase",     color: "text-emerald-400" },
      { icon: SiMysql,       name: "MySQL",        color: "text-blue-400" },
    ],
  },
  {
    title: "Digital Marketing & Strategy",
    skills: [
      { icon: FaChartBar,  name: "Market Research", color: "text-purple-400" },
      { icon: FaBullhorn,  name: "Digital Marketing",color: "text-pink-400" },
      { icon: FaBrain,     name: "AI Strategy",     color: "text-violet-400" },
    ],
  },
];

const inView = { once: true, amount: 0.1 };

const Technology = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 pt-4">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ duration: 0.6 }}
        className="mb-16 text-5xl font-bold text-white"
      >
        Skills.
      </motion.h1>

      <div className="flex flex-col gap-14">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
          >
            {/* Category heading + divider */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-semibold text-white whitespace-nowrap">
                {cat.title}
              </h2>
              <div className="flex-1 h-px bg-neutral-800" />
            </div>

            {/* Skill cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
              className="flex flex-wrap gap-4"
            >
              {cat.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden:   { opacity: 0, scale: 0.7 },
                      visible:  { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-neutral-600 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    <Icon className={`text-4xl ${skill.color}`} />
                    <span className="text-xs text-neutral-400 text-center leading-tight px-1">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
