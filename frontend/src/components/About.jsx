import { motion } from 'framer-motion';
import { Award, Globe, Zap } from 'lucide-react';

const About = () => {


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.8 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (


        <motion.section
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="py-24 bg-[#FEFFF2] dark:bg-dark-bg transition-colors duration-500 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="mb-16 space-y-2">
                    <span className="text-secondary font-bold tracking-widest text-sm text-[#ee9e1e]">
                        MY BIOGRAPHY
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
                        Beyond<span className="text-secondary text-[#ee9e1e]"> the Code</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left */}

                    <div className="lg:col-span-7 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-2xl shadow-slate-200/50 dark:shadow-none">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6">
                            I transform complex ideas into elegant digital realities.
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                            As a MERN Stack Developer, I don't just write code; I build ecosystems.
                            Whether it's a scalable microservice or a pixel-perfect UI.
                        </p>

                        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-black text-secondary">07+</div>
                                <div className="text-xs font-bold text-slate-400 uppercase">Months Learning Exp</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-secondary">2+</div>
                                <div className="text-xs font-bold text-slate-400 uppercase">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-secondary">02+</div>
                                <div className="text-xs font-bold text-slate-400 uppercase">Personal Personal </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-secondary">100%</div>
                                <div className="text-xs font-bold text-slate-400 uppercase">Commitment</div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 grid grid-cols-1 gap-6"
                    >
                        {[
                            { icon: <Zap className="text-orange-500" />, title: "Fast Performance", desc: "Optimized for lightning-speed user experience." },
                            { icon: <Globe className="text-blue-500" />, title: "Global Standards", desc: "Writing clean, maintainable, and industry-standard code." },
                            { icon: <Award className="text-yellow-500" />, title: "Quality First", desc: "No compromises on the integrity of the architecture." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="bg-white/80 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-center gap-6 shadow-lg transition-all"
                            >
                                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{feature.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
};

export default About;