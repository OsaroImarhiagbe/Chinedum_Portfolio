'use client'
import { motion} from 'motion/react';
import { header } from '@/utils/data';
import { useRouter, usePathname} from 'next/navigation';
import Link from 'next/link';
const Header = ({id,content,name}:{id?:string,content?:string,name?:string}) => {

    const router = useRouter()
    const pathname = usePathname()
    return (
        <>
              <motion.div 
        className="w-40 lg:w-100 flex flex-col items-center fixed left-0 top-0 z-50 h-screen py-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >       
        {/* Centered content wrapper */}
        <div className="flex-1 flex flex-col items-start justify-evenly w-full px-4">
          <h1 className='text-white font-spacegrotesk whitespace-nowrap cursor-pointer'><Link href='/'> Houdïnï CHïN</Link></h1>
          {/* Navigation Items */}
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
          
              { id && <>
              <h1 className='text-green-500/60 font-spacegrotesk whitespace-nowrap'>{name}</h1>
            <p className="text-white/70 text-sm font-spacegrotesk leading-relaxed max-w-lg">{content}</p> </> }
           
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