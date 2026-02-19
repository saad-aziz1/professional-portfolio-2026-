import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Slow Motion Variants (Jo hum pehly sections me use kr chuky hain)
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    // ADJUSTMENT: Theme colors apply kiye (Light: #FEFFF2, Dark: #0F172A)
    <footer className="bg-[#FEFFF2] dark:bg-[#0F172A] text-[#020617] dark:text-white py-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left"
        >
          
          {/* Logo Section with Animation */}
          <motion.div variants={footerVariants}>
            <h2 className="text-3xl font-black tracking-tighter">
              SAAD<span className="text-[#F59E0B]">AZIZ</span>
            </h2>
            <p className="text-[#64748b] dark:text-slate-400 mt-3 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">
              Transforming complex problems into elegant digital solutions.
            </p>
          </motion.div>

          {/* Quick Links with Hover Effects */}
          <motion.div variants={footerVariants} className="flex justify-center gap-8 text-sm font-bold uppercase tracking-widest text-[#0F172A] dark:text-slate-300">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-[#F59E0B] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F59E0B] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </motion.div>

          {/* Social Icons with Spring Animation */}
          <motion.div variants={footerVariants} className="flex justify-center md:justify-end gap-5">
            {[
              { Icon: Github, href: "https://github.com/saad-aziz1", color: "hover:bg-black" },
              { Icon: Linkedin, href: "https://linkedin.com/in/saad-aziz-90533b239/", color: "hover:bg-[#0077b5]" },
              { Icon: Mail, href: "mailto:saadaziz.official.com", color: "hover:bg-red-500" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 text-[#0F172A] dark:text-white transition-all ${social.color} hover:text-white`}
              >
                <social.Icon size={22} />
              </motion.a>
            ))}
          </motion.div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-[#59677a] uppercase tracking-widest"
        >
          <p>© {currentYear} Saad Aziz • All rights reserved.</p>
         
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;