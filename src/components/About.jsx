import '../index.css';
import { motion } from "framer-motion";
import bgVideo from '../assets/0524.mp4';

const inView = { once: true, amount: 0.2 };

const roles = [
  "AI Engineer",
  "Digital Strategist",
  "AI Product Manager",
  "Digital Marketer",
];

const About = () => {
  return (
    <div className='relative border-b border-neutral-900 py-20 px-8 overflow-hidden min-h-screen'>

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
        src={bgVideo}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-neutral-950/40" />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ duration: 0.6 }}
        className='mb-16 text-center text-4xl font-bold text-white'
      >
        About Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='max-w-3xl mx-auto flex flex-col gap-8'
      >
        {/* Role badges */}
        <div className='flex flex-wrap justify-center gap-3'>
          {roles.map((label) => (
            <span
              key={label}
              className='px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-400 text-sm font-medium'
            >
              {label}
            </span>
          ))}
        </div>

        {/* Bio */}
        <div className='bg-neutral-900 p-8 rounded-xl border border-neutral-800'>
          <p className='text-neutral-300 leading-relaxed mb-4'>
            I'm <span className='text-white font-semibold'>Oshada Dilshan</span> an AI Engineer,
            Digital Strategist, and AI Product Manager passionate about building intelligent systems
            that drive real business impact. I bridge the gap between cutting-edge AI technology and
            strategic product thinking to create solutions that are not just powerful, but purposeful.
          </p>
          <p className='text-neutral-400 leading-relaxed'>
            With a strong foundation in AI/ML engineering and hands on experience in digital marketing,
            I help brands scale through AI-driven market research, data informed strategy, and
            end to end product development. I thrive at the intersection of technology, creativity,
            and business turning bold ideas into elegant digital experiences.
          </p>
        </div>

        {/* Stats row */}
        <div className='grid grid-cols-3 gap-4'>
          {[
            { value: "AI",      label: "Engineering" },
            { value: "Product", label: "Management" },
            { value: "Digital", label: "Marketing" },
          ].map(({ value, label }) => (
            <div key={label} className='bg-neutral-900 rounded-xl border border-neutral-800 p-4 text-center'>
              <p className='text-purple-400 font-bold text-lg'>{value}</p>
              <p className='text-neutral-500 text-sm mt-1'>{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

export default About;
