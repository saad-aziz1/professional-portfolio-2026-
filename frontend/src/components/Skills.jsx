import { motion } from 'framer-motion';
import { 
  Database, 
  Layout, 
  Server, 
  Github, 
  Globe,
  Zap 
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "Frontend", tools: "React.js, Tailwind CSS", icon: <Layout className="text-blue-500" /> },
    { name: "Backend", tools: "Node.js, Express.js", icon: <Server className="text-green-500" /> },
    { name: "Database", tools: "MongoDB, Firebase", icon: <Database className="text-emerald-500" /> },
    { name: "Version Control", tools: "Git, GitHub", icon: <Github className="text-slate-700 dark:text-white" /> },
    { name: "State Management", tools: "Redux Toolkit", icon: <Zap className="text-yellow-500" /> },
    { name: "API Design", tools: "RESTful APIs", icon: <Globe className="text-indigo-500" /> }
  ];

  // ContainerVariant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, 
      },
    },
  };

  // IndividualCardVariant
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="skills" className="py-24 bg-[#FEFFF2] dark:bg-dark-bg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SectionHeading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left mb-16"
        >
          <span className="text-secondary font-bold tracking-widest text-sm uppercase">My Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mt-2">
            Technical <span className="text-secondary">Skills</span>.
          </h2>
        </motion.div>

        {/* SkillsGrid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-secondary transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-2xl group-hover:bg-secondary/10 transition-colors">
                  {skill.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                {skill.tools}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;