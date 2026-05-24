import '../index.css';
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import bgImage from '../assets/home.png';

export const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden border-b border-neutral-900">

      {/* Background image */}
      <img
        src={bgImage}
        alt="home background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 15%' }}
      />

      {/* Left gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Text content — bottom left */}
      <div className="absolute bottom-32 left-10 lg:left-20 max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Hi, I'm <span className="text-purple-400">Oshada</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-lg lg:text-xl text-neutral-200 mb-3"
        >
          AI Engineer | AI Product Manager | Empowering brands scale through AI-driven Market Research 
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="text-sm lg:text-base text-neutral-400 italic"
        >
          "Turning ideas into elegant, impactful digital solutions."
        </motion.p>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-400 cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <HiChevronDown className="text-2xl" />
        </motion.div>
        <span className="text-xs tracking-widest uppercase">Scroll Down</span>
      </motion.div>

    </div>
  );
}

export default Hero;
