'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/constants';
import Link from 'next/link';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
  
function MobileNav({user}:MobileNavProps) {
    const pathname = usePathname();

  return (
    <section className='bg-white'>
    <Sheet>
    <SheetTrigger>
        <Image 
        src="/icons/hamburger.svg"
        width={30}
        height = {30}
        alt ='menu'
        className='cursor-pointer'
        />
    </SheetTrigger>
    <SheetContent side="left" className='border-none bg-white'>
    <Link href='/' className='mb-12 
        cursor-pointer flex items-center gap-2 '>
        <Image src='/icons/logo.svg'
        width={34}
        height={34}
        alt='Logo'
        className='size-[24px max-xl:size-14'
            />
        <h1 className='sidebar-logo'>
            Horizon
        </h1>
        </Link>
        
    {sidebarLinks.map((item)=>{
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

            return (
               <Link 
               href={item.route} 
               key={item.label} 
               className={cn('sidebar-link', {
                'bg-bank-gradient':isActive
               })}>
                        <div className='relative size-6'>
                            <Image 
                                src={item.imgURL}
                                alt={item.label}
                                fill
                              
                            />
                        </div>
                        <p className={cn('sidebar-label',{' !text-white':isActive})}>{item.label}</p>
                </Link>
            )
        })}
    </SheetContent>
  </Sheet>
   </section>
  )
}

export default MobileNav