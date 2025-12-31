'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { LOGO } from '../../../../public/assets/images/images'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Blocks, Code2, FileCode, GitBranch, HandPlatter, Moon } from 'lucide-react'
import {BsDiscord} from 'react-icons/bs'
import { ExpandedTabs } from '@/components/ui/expanded-tabs'
import ThemeToggleButton from '@/components/ui/theme-toggle-button'
import { useTheme } from 'next-themes'
 const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme()
 
    useEffect(() => {
      setMounted(true)
    }, [])

  return (
    <section className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md p-0'>
       <div className='container mx-auto p-0'>
          <div className='flex items-center justify-between rounded-full p-0'>
             {/* Logo - Left Side */}
             <div className='flex items-center gap-3'>
                {mounted && (
                  <Image
                   alt='logo'
                   src={theme === 'dark' ? LOGO.DARK_LOGO : LOGO.LIGHT_LOGO}
                   className='w-64 h-auto max-h-16 sm:w-72 sm:max-h-20 lg:w-80 lg:max-h-24 object-contain'
                   width={320}
                   height={96}
                  />
                )}
                {!mounted && (
                  <div className='w-64 max-h-16 sm:w-72 sm:max-h-20 lg:w-80 lg:max-h-24' style={{ height: '4rem' }} />
                )}
             </div>

             {/* Navigation - Center (Desktop only) */}
             <nav className='hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2'>
               <Link 
                 href="/#" 
                 className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
               >
                 HOME
               </Link>
               <Link 
                 href="/#" 
                 className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
               >
                 ABOUT
               </Link>
               <Link 
                 href="/#" 
                 className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
               >
                 BLOG
               </Link>
             </nav>

             {/* Theme Toggle & Navigation - Right Side */}
             <div className='flex items-center gap-4 flex-1 justify-end'>
               {/* Navigation - Tablet (beside theme button) */}
               <nav className='hidden md:flex lg:hidden items-center gap-6'>
                 <Link 
                   href="/#" 
                   className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
                 >
                   HOME
                 </Link>
                 <Link 
                   href="/#" 
                   className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
                 >
                   ABOUT
                 </Link>
                 <Link 
                   href="/#" 
                   className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
                 >
                   BLOG
                 </Link>
               </nav>
               
               <ThemeToggleButton
                 variant='circle-blur'
               />
             </div>
          </div>
       </div>
    </section>
  )
}

export default Navbar