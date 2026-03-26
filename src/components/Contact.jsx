import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 italic">Let's Create Together</h2>
                        <p className="text-lg text-white/50 mb-10 max-w-md uppercase tracking-wider">
                            I'm always open to discussing new projects, creative ideas, or being part of your vision.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-light/50 transition-colors">
                                    <Mail className="text-primary-light" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase font-bold mb-1">Email Me</p>
                                    <a href="mailto:priya0a23@gmail.com" className="text-lg font-medium hover:text-primary-light transition-colors">priya0a23@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-light/50 transition-colors">
                                    <Phone className="text-primary-light" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase font-bold mb-1">Call Me</p>
                                    <a href="tel:+919661445541" className="text-lg font-medium hover:text-primary-light transition-colors">+91 9661445541</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-dark-card border border-white/10 p-10 rounded-3xl backdrop-blur-3xl shadow-2xl relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <form className="space-y-6 relative z-10">
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 block">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-primary-light/30 transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 block">Email Address</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-primary-light/30 transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 block">Your Message</label>
                                <textarea 
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-primary-light/30 transition-colors resize-none"
                                    placeholder="Tell me about your project"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary-light text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary-light/10"
                            >
                                Send Message <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
