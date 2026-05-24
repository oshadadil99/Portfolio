import '../index.css';
import { motion } from "framer-motion";
import project1 from '../assets/Projects/project-1.jpg';
import project2 from '../assets/Projects/project-2.jpg';
import project3 from '../assets/Projects/project-3.jpg';
import project4 from '../assets/Projects/project-4.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "E-Commerce Website",
      description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      image: project2,
      title: "Task Management App",
      description: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      image: project3,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      image: project4,
      title: "Blogging Platform",
      description: "A platform to create, edit, and publish blogs with user authentication and comment features.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className='my-20 text-center text-4xl font-bold text-white'
        >
          Projects
        </motion.h1>
        <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={{
                          hidden: { opacity: 0, y: 40 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:transform hover:scale-105"
                    >
                        <div className="relative overflow-hidden h-32">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                            <p className="text-neutral-400 mb-4 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-neutral-800 text-purple-400 text-sm rounded-full border border-neutral-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}
 
export default Projects;