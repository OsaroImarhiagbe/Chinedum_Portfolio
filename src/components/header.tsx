'use client'
import { motion} from 'motion/react';
import { header } from '@/utils/data';
import { useRouter, usePathname} from 'next/navigation';
const Header = () => {

    const router = useRouter()
    const pathname = usePathname()
    return (
        <>
              <motion.div 
        className="w-20 lg:w-24 flex flex-col items-center fixed left-0 top-0 z-50 h-screen py-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >       
        {/* Centered content wrapper */}
        <div className="flex-1 flex flex-col items-start justify-evenly w-full px-4">
          <h1 className='text-white font-spacegrotesk whitespace-nowrap'>Houdïnï CHïN</h1>
          {/* Navigation Items */}
          <nav className="flex flex-col items-start space-y-6">
              {header.map((item, index) => (
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
          </nav>
          <div>
            <p className='text-white/60 text-sm font-spacegrotesk'>@ 2025</p>
          </div>
        </div>
      </motion.div>
        </>
    );
}
export default Header