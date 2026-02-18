import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const projectData = {
    title: "Premium E-Commerce Ecosystem",
    description: "A full-stack production-ready platform featuring real-time inventory management, secure Stripe payments, and a dedicated admin dashboard for deep analytics.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Redux"],
    image: "/Project Image.JPG", 
    liveLink: "https://sa-cart-ecommerce-project.vercel.app/",
    githubLink: "https://github.com/saad-aziz1/SA-CART-ecommerce-Project"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 bg-[#FEFFF2] dark:bg-dark-bg transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SectionHeading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left mb-16"
        >
          <span className="text-[#F59E0B] font-extrabold tracking-widest text-sm uppercase">Featured Work</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#020617] dark:text-white mt-2">
            My Major <span className="text-[#F59E0B]">Project</span>.
          </h2>
        </motion.div>

        {/* ProjectCard */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white dark:bg-slate-800/50 rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Left */}
            <motion.div variants={itemVariants} className="lg:w-1/2 overflow-hidden group bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-700">
              <img 
                src={projectData.image} 
                alt={projectData.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Right */}
            <motion.div variants={itemVariants} className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[#F59E0B] mb-4">
                <Layers size={18} />
                <span className="font-black text-xs tracking-widest uppercase">MERN STACK APP</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-[#020617] dark:text-white mb-6 leading-tight">
                {projectData.title}
              </h3>
              
              <p className="text-[#64748b] dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                {projectData.description}
              </p>

              {/* TechTags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {projectData.tech.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-50 dark:bg-slate-700/50 text-[#0F172A] dark:text-slate-200 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-600">
                    {tag}
                  </span>
                ))}
              </div>

              {/* ActionButtons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={projectData.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#F59E0B] text-white px-10 py-4 rounded-2xl font-black hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 active:scale-95"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
                <a 
                  href={projectData.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-[#0F172A] dark:border-slate-600 text-[#0F172A] dark:text-white px-10 py-4 rounded-2xl font-black hover:bg-[#0F172A] hover:text-white dark:hover:bg-slate-700 transition-all active:scale-95"
                >
                  <Github size={20} />
                  Code
                </a>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;