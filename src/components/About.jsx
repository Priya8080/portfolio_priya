import { motion } from 'framer-motion'

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '1+' },
        { label: 'Projects Completed', value: '10+' },
        { label: 'Certifications', value: '5+' },
    ]

    return (
        <section id="about" className="py-24 px-6 bg-dark-card relative overflow-hidden">
             <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 p-4 bg-white/5">
                        <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-primary-light/10 to-transparent flex items-center justify-center">
                            {/* Placeholder for About Image */}
                            <div className="w-1/2 h-1/2 border-2 border-primary-light/20 rounded-full animate-float" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                        Driven by <span className="text-primary-light">Curiosity</span> & <span className="text-primary-light">Code</span>
                    </h2>
                    <p className="text-lg text-white/60 mb-8 leading-relaxed">
                        I am a self-taught Full Stack Developer with a passion for creating digital solutions 
                        that are not only functional but also visually stunning. My journey started with 
                        a fascination for how things work on the web, and it has evolved into a dedicated 
                        pursuit of mastery in modern frameworks and AI integration.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-2xl font-bold text-primary-light">{stat.value}</h3>
                                <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
             </div>
        </section>
    )
}

export default About
