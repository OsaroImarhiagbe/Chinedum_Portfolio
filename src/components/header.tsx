'use client'
import { motion, AnimatePresence } from 'motion/react';
import { header } from '@/utils/data';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const Header = ({id, content, name}:{id?:string, content?:string, name?:string}) => {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-6 left-4 z-[60] text-white p-2"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Desktop - Always visible */}
            <motion.div 
                className="hidden lg:flex w-100 flex-col items-center fixed left-0 top-0 z-50 h-screen py-8"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >       
                <div className="flex-1 flex flex-col items-start justify-evenly w-full px-4">
                    <h1 className='text-white font-spacegrotesk whitespace-nowrap cursor-pointer'>
                        <Link href='/'> Houdïnï CHïN</Link>
                    </h1>
                    
                    <nav className="flex flex-col items-start space-y-6">
                        {!id && header.map((item, index) => (
                            <motion.button
                                key={index}
                                onClick={() => router.push(item.link)}
                                className={`${pathname === item.link ? 'text-green-500/60' :'text-white/60'} font-spacegrotesk underline cursor-pointer hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                whileHover={{ scale: 1.1, x: 5 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    
                        {id && <>
                            <h1 className='text-green-500/60 font-spacegrotesk whitespace-nowrap'>{name}</h1>
                            <p className="text-white/70 text-sm font-spacegrotesk leading-relaxed max-w-lg">{content}</p> 
                        </>}
                    </nav>
                    
                    <div>
                        <p className='text-white/60 text-sm font-spacegrotesk'>© 2025</p>
                    </div>
                </div>
            </motion.div>

            {/* Mobile - Toggleable */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="lg:hidden w-64 flex flex-col items-center fixed left-0 top-0 z-50 h-screen py-8 bg-[#0B0F14]"
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >       
                        <div className="flex-1 flex flex-col items-start justify-evenly w-full px-4 pt-16">
                            <h1 className='text-white font-spacegrotesk whitespace-nowrap cursor-pointer'>
                                <Link href='/' onClick={() => setIsOpen(false)}> Houdïnï CHïN</Link>
                            </h1>
                            
                            <nav className="flex flex-col items-start space-y-6">
                                {!id && header.map((item, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => {
                                            router.push(item.link)
                                            setIsOpen(false)
                                        }}
                                        className={`${pathname === item.link ? 'text-green-500/60' :'text-white/60'} font-spacegrotesk underline cursor-pointer hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                            
                                {id && <>
                                    <h1 className='text-green-500/60 font-spacegrotesk whitespace-nowrap'>{name}</h1>
                                    <p className="hidden md:block text-white/70 text-sm font-spacegrotesk leading-relaxed max-w-lg">{content}</p> 
                                </>}
                            </nav>
                            
                            <div>
                                <p className='text-white/60 text-sm font-spacegrotesk'>© 2025</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default Header