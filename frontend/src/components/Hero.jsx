
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    
    <section id="home" className="min-h-screen flex items-center bg-[#FEFFF2] dark:bg-dark-bg transition-colors duration-1000 overflow-hidden pt-24 lg:pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="flex-1 flex justify-center order-1 lg:order-2"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-secondary/20 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] overflow-hidden rounded-[2rem] border-4 border-white dark:border-slate-800 shadow-2xl">
              <img 
                src="Saad Aziz Image.png" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

       
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left order-2 lg:order-1"
        >
          <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3">
            Available for Projects
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
            Hi, I'm Saad, <span className="text-secondary">MERN</span> Developer
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg lg:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
            I specialize in crafting high-performance, modern web applications, seamlessly blending robust back-end logic with intuitive, pixel-perfect front-end design.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
            <button className="bg-transparent border-2 border-secondary text-secondary dark:bg-secondary dark:text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-orange-500/10">
              Hire Me
            </button>
            <button className="border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95">
              View Work
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;