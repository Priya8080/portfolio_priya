import { useState, useRef, useEffect } from 'react'
import { MessageSquare, Send, X, Bot, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Hi! I am Priya\'s AI Assistant. How can I help you today?' }
    ])
    const [input, setInput] = useState('')
    const scrollRef = useRef(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const qaData = {
        'skills': 'Priya is proficient in React, Node.js, Python, and Java. She also works with Tailwind CSS and Framer Motion for premium UI/UX.',
        'experience': 'Priya has 1+ years of experience in full-stack development and has built over 10 projects, including AI-driven farming systems.',
        'availability': 'Yes, Priya is available for freelance projects and full-time opportunities. Would you like to check her contact section?',
        'projects': 'Priya has built AgroLedger, EcoVibe UI, and a GitHub Profile Search tool, among others.',
        'about': 'Priya is a passionate Full Stack Developer focused on building modern, responsive, and interactive web applications.'
    }

    const handleSend = () => {
        if (!input.trim()) return

        const userMsg = { role: 'user', text: input }
        setMessages(prev => [...prev, userMsg])
        
        const lowerInput = input.toLowerCase()
        let botResponse = 'That\'s a great question! For more details, you can check my sections or contact me directly.'

        for (const key in qaData) {
            if (lowerInput.includes(key)) {
                botResponse = qaData[key]
                break
            }
        }

        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', text: botResponse }])
        }, 600)

        setInput('')
    }

    return (
        <div className="fixed bottom-10 right-10 z-[100]">
            {/* Chat Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-primary-light text-black flex items-center justify-center shadow-2xl shadow-primary-light/40 relative group"
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                {!isOpen && (
                    <span className="absolute -top-12 right-0 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-black/10">
                        Ask Me Anything!
                    </span>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-[350px] max-w-[calc(100vw-40px)] bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary-light/10 border-b border-white/10 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center">
                                <Bot size={20} className="text-primary-light" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold">Priya AI</h3>
                                <p className="text-[10px] text-primary-light animate-pulse">Online</p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div 
                            ref={scrollRef}
                            className="h-[350px] overflow-y-auto p-4 space-y-4 scroll-smooth"
                        >
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                                        msg.role === 'bot' 
                                            ? 'bg-white/5 border border-white/10 text-white/80' 
                                            : 'bg-primary-light text-black font-medium'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-black/50 border-t border-white/10 flex gap-2">
                            <input 
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about skills, experience..."
                                className="flex-1 bg-white/5 border border-white/5 rounded-xl px-4 py-2 text-xs text-white outline-none focus:border-primary-light/30 transition-colors"
                            />
                            <button 
                                onClick={handleSend}
                                className="p-2 rounded-xl bg-primary-light text-black hover:scale-105 transition-transform"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Chatbot
