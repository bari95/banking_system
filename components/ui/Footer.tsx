

import { logout } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Footer({user, type='desktop'}:FooterProps) {
 const route=useRouter();
 const handleLogout=async ()=>{
         try {
            const loggedOut =await logout();
            if(loggedOut){
                route.push('sign-in');
            }
         } catch (error) {
            console.log('error', error)
         }
 }
 
    return (
    <footer className='footer mb-6'>
        <div className={type ==="desktop" ? 'footer_name':'footer_name-mobile'}>
            <p className='text-xl font-bold text-gray-700'>
                {user?.name[0]}
            </p>
        </div>
        <div className={type ==="desktop" ? 'footer_email':'footer_email-mobile'}>
            <h1 className=' text-14 truncate font-semibold text-gray-700'>
                {user?.name}
            </h1>
            <p className='text-14 truncate font-normal text-gray-600'>
                {user?.email}
            </p>
        </div>
        <div className=''>
            <Image 
            src='/icons/logout.svg'
            alt='jsm' 
            width={30}
            height={30}
            onClick={handleLogout}/>
        </div>
    </footer>
  )
}

export default Footer