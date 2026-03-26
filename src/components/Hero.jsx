import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex items-center relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/5 blur-[120px] rounded-full animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-light/10 border border-primary-light/20 text-primary-light text-sm font-bold mb-6"
                    >
                        Available for Opportunities
                    </motion.span>
                    <h1 className="text-5xl md:text-8xl font-heading font-bold leading-tight mb-6">
                        Crafting <span className="gradient-text">Next-Gen</span> Digital Experiences
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
                        I'm Priya Kumari, a Full Stack Developer dedicated to building high-performance 
                        web applications with immersive AI-powered interfaces.
                    </p>

                    <div className="flex flex-wrap gap-6 items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-light text-black px-8 py-4 rounded-full font-bold shadow-xl shadow-primary-light/20 flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={18} />
                        </motion.button>
                        
                        <div className="flex gap-4">
                            <motion.a 
                                whileHover={{ y: -5 }}
                                href="https://github.com/Priya8080" target="_blank"
                                className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-primary-light transition-colors text-white/70"
                            >
                                <Github size={22} />
                            </motion.a>
                            <motion.a 
                                whileHover={{ y: -5 }}
                                href="https://linkedin.com/in/priya-kumari-3500492bb" target="_blank"
                                className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-primary-light transition-colors text-white/70"
                            >
                                <Linkedin size={22} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 w-full aspect-square rounded-3xl bg-gradient-to-br from-primary-light/10 to-transparent border border-white/10 backdrop-blur-3xl overflow-hidden group">
                        <div className="absolute inset-0 bg-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                             {/* Floating Elements for 3D feel */}
                             <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-full h-full border-2 border-primary-light/30 rounded-full flex items-center justify-center relative"
                             >
                                <div className="w-4/5 h-4/5 border border-primary-light/20 rounded-full flex items-center justify-center">
                                     <div className="w-2/3 h-2/3 bg-primary-light/10 blur-3xl rounded-full" />
                                </div>
                                <motion.div 
                                    className="absolute top-0 right-0 p-4 bg-black/80 border border-white/10 rounded-2xl backdrop-blur-xl"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                >
                                    <Code className="text-primary-light" size={40} />
                                </motion.div>
                             </motion.div>
                        </div>
                    </div>
                    {/* Decorative Card */}
                    <div className="absolute -bottom-6 -left-6 p-6 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl z-20 shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center">
                                <span className="text-primary-light font-bold">10+</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold">Projects Built</p>
                                <p className="text-xs text-white/40">Modern Full Stack Apps</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
