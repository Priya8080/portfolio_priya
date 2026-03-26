const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-heading font-bold text-white mb-2 italic">Priya Kumari</h2>
                    <p className="text-white/40 text-xs tracking-widest uppercase">Full Stack Developer & UI Designer</p>
                </div>

                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
                    <a href="#home" className="hover:text-primary-light transition-colors">Home</a>
                    <a href="#about" className="hover:text-primary-light transition-colors">About</a>
                    <a href="#projects" className="hover:text-primary-light transition-colors">Projects</a>
                    <a href="https://github.com/Priya8080" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                </div>

                <div className="text-white/20 text-[10px] font-medium uppercase tracking-[0.2em]">
                    © 2026 Priya Singh. Crafted for the future.
                </div>
            </div>
        </footer>
    )
}

export default Footer
