import React, { useState } from 'react'; 
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import axios from 'axios'; 
import { toast } from 'react-hot-toast'; 

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const res = await axios.post('http://localhost:5001/api/contact/send', formData);
      
      if (res.status === 200) {
        toast.success("Message sent successfully!"); 
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  const WhatsAppIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeInOut" } }
  };

  return (
    <section id="contact" className="py-24 bg-[#FEFFF2] dark:bg-dark-bg transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.0 }} className="text-center mb-16">
          <span className="text-[#F59E0B] font-extrabold tracking-widest text-sm uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#020617] dark:text-white mt-2">
            Let's Talk <span className="text-[#F59E0B]">Business</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <h3 className="text-3xl font-bold text-[#020617] dark:text-white">Contact Information</h3>
            <p className="text-[#64748b] dark:text-slate-400 text-lg leading-relaxed">
              I'm actively seeking Full-time Career Opportunities. Feel free to reach out via form or any of my social handles.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#0F172A] dark:text-slate-200">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700"><Mail className="text-[#F59E0B]" size={24} /></div>
                <span className="font-bold">saadaziz@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-[#0F172A] dark:text-slate-200">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700"><MapPin className="text-[#F59E0B]" size={24} /></div>
                <span className="font-bold">Lahore, Pakistan</span>
              </div>
            </div>
            <div className="flex gap-4 pt-6">
              <a href="https://github.com/saad-aziz1" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:bg-[#0F172A] hover:text-white transition-all text-[#0F172A] dark:text-white border border-slate-100 dark:border-slate-700"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/saad-aziz-90533b239/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:bg-[#0077b5] hover:text-white transition-all text-[#0F172A] dark:text-white border border-slate-100 dark:border-slate-700"><Linkedin size={24} /></a>
              <a href="https://wa.me/+923135609226" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:bg-[#25D366] hover:text-white transition-all text-[#0F172A] dark:text-white border border-slate-100 dark:border-slate-700"><WhatsAppIcon size={24} /></a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} 
                      className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-700">
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               
                <input name="name" value={formData.name} onChange={handleChange} required type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#F59E0B] outline-none text-[#020617] dark:text-white placeholder-[#475569] dark:placeholder-slate-400 font-bold" />
                <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#F59E0B] outline-none text-[#020617] dark:text-white placeholder-[#475569] dark:placeholder-slate-400 font-bold" />
              </div>
              <input name="subject" value={formData.subject} onChange={handleChange} required type="text" placeholder="Subject" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#F59E0B] outline-none text-[#020617] dark:text-white placeholder-[#475569] dark:placeholder-slate-400 font-bold" />
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Your Message" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#F59E0B] outline-none text-[#020617] dark:text-white placeholder-[#475569] dark:placeholder-slate-400 font-bold"></textarea>
              
              
              <button disabled={loading} type="submit" className="w-full bg-[#F59E0B] text-white py-4 rounded-xl font-black text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? "Sending..." : <><Send size={20} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;