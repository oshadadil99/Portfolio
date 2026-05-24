import '../index.css';
import { motion } from "framer-motion";
import picture2 from '../assets/mypic2.jpg';

const inView = { once: true, amount: 0.2 };

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.6 }}
          className='my-20 text-center text-4xl font-bold text-white'
        >
          About Me
        </motion.h1>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex flex-wrap items-center lg:flex-nowrap gap-8'>
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={inView}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className='w-full lg:w-1/2'
                >
                    <div className='flex items-center justify-center'>
                        <img
                            className='rounded-2xl object-cover w-full max-w-md h-auto shadow-xl border border-neutral-800'
                            src={picture2}
                            alt="About me"
                        />
                    </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={inView}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className='w-full lg:w-1/2'
                >
                    <div className='bg-neutral-900 p-8 rounded-lg border border-neutral-800'>
                        <p className='text-neutral-300 leading-relaxed tracking-tight text-justify'>
                            A highly ambitious and passionate individual who loves to discover the best
                            paths to achieve goals.
                            I'm keen to study IT because I find it fascinating from an early age.
                            Programming and coding have been the passion of my life and also love
                            graphic designing. I am an honest, reliable, and presentable individual with an
                            outgoing personality and a comprehensive educational background. Apart
                            from these technical things I love to spend my spare time reading and
                            traveling. Being a student at the faculty of science, University of Kelaniya
                            directed me to enhance the strengths of my life while eliminating weaknesses.
                            I am eager to be challenged in order to grow my own skills by engaging in
                            extra-curricular activities as well as volunteering programs.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>

  )
}

export default About;