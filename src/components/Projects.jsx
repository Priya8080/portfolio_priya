import { motion } from 'framer-motion'
import { ExternalLink, Github as GithubIcon } from 'lucide-react'

const Projects = () => {
    const projects = [
        {
            title: 'AgroLedger',
            description: 'AI-powered farming management system with smart weather insights.',
            image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
            tags: ['React', 'Python', 'Tailwind', 'AI'],
            github: '#',
            demo: '#'
        },
        {
            title: 'EcoVibe UI',
            description: 'Modern nature-inspired design system for sustainable startups.',
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
            tags: ['Framer', 'Three.js', 'Next.js'],
            github: '#',
            demo: '#'
        },
        {
            title: 'GitUser Search',
            description: 'Real-time GitHub profile explorer using the official REST API.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
            tags: ['JavaScript', 'API', 'CSS3'],
            github: '#',
            demo: '#'
        }
    ]

    return (
        <section id="projects" className="py-24 px-6 bg-dark-card/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Selected <span className="gradient-text">Works</span></h2>
                        <p className="text-white/50 max-w-md">Highlighting some of my favorite development projects and experiments.</p>
                    </div>
                    <motion.button 
                        whileHover={{ x: 5 }}
                        className="text-primary-light font-bold flex items-center gap-2 border-b border-primary-light/30 pb-1"
                    >
                        View All Archives <ExternalLink size={16} />
                    </motion.button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl overflow-hidden bg-black border border-white/10 hover:border-primary-light/40 transition-colors"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary-light px-2 py-0.5 rounded-md bg-primary-light/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <p className="text-sm text-white/50 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex gap-4">
                                    <a href={project.demo} className="p-2.5 rounded-full bg-white/5 hover:bg-primary-light hover:text-black transition-all">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.github} className="p-2.5 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all">
                                        <GithubIcon size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
