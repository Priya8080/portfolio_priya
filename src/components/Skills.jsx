import { motion } from 'framer-motion'
import { Code, Palette, Server, Database, Cloud, Terminal } from 'lucide-react'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: <Palette className="text-primary-light" />,
            skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript']
        },
        {
            title: 'Backend',
            icon: <Server className="text-primary-light" />,
            skills: ['Node.js', 'Express', 'Python', 'Flask', 'Java']
        },
        {
            title: 'Database & Cloud',
            icon: <Database className="text-primary-light" />,
            skills: ['MongoDB', 'MySQL', 'Firebase', 'AWS', 'REST APIs']
        }
    ]

    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 italic">Technical Arsenal</h2>
                    <p className="text-white/50">Modern tools I use to bring ideas to life</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-dark-card border border-white/10 hover:border-primary-light/30 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary-light/10 flex items-center justify-center mb-6 border border-primary-light/20 group-hover:scale-110 transition-transform">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-white/60 hover:text-white transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
