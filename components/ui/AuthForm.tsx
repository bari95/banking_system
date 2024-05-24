
'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { authFormSchema } from '@/lib/utils'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { signIn, signUp } from '@/lib/actions/user.actions'
 


function AuthForm({type}:{type:string}) {
  const route =useRouter();
  const [user,setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const formSchema = authFormSchema(type)

 
  
 // 1. Define your form.
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    email:"",
    password:''
  },
})


  const onSubmit =  async (data: z.infer<typeof formSchema>)  => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(true);
    try {
      console.log(data);
      if(type==="sign-up"){
        console.log('type is sign up')
              const newUser = await signUp(data);
              console.log('it went on succesfully', 'user',newUser)
              setUser(newUser);
      }

      if(type === 'sign-in'){
              const response = await signIn({
               email:data.email,
              password:data.password
             })
               if(response){
                route.push('/')
                }
      }
    }
    
    catch(error){
      console.log(error)
    }
    finally{
    setLoading(false);
    }
  }




  return (
    <section className="auth-form">
       <header className='flex flex-col gap-5 md:gap-8'>
       <Link href='/' className='mb-6 
        cursor-pointer flex items-center gap-2 '>
        <Image src='/icons/logo.svg'
        width={34}
        height={34}
        alt='Logo'
        className='size-[24px max-xl:size-14'
            />
        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
            Horizon
        </h1>
        </Link>
        <div className='flex  flex-col gap-1 md:gap-3'>
          <h1 className=' text-24 lg:text-36 font-semibold text-gray-900'>
            {user ? 'Link Account': type === 'sign-in' ? 'Sign In' : 'Sign-Up'}
            <p className='text-16 font-normal text-gray-600'>
              { user ? 'Link your accounts to get started':" Please enter your details"}
            </p>
          </h1>
        </div>
       </header>
       { user ? (
        <div className='flex flex-col gap-4'>

        </div>
       ): (
        <>
            
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {
          type === 'sign-up' && (
            <>
            <div className ='flex gap-4'>
            <CustomInput 
                control={form.control}
                name='firstName' 
                label='first name:' 
                placeholder='enter your enter your First Name'/>

                <CustomInput 
                control={form.control}
                name='lastName' 
                label='Last Name:' 
                placeholder='enter your enter your last name'/>
                </div>

                <CustomInput 
                control={form.control}
                name='address' 
                label='Address:' 
                placeholder='enter your enter your address'/>
            
            <div className='flex gap-4'>
                <CustomInput 
                control={form.control}
                name='state' 
                label='State:' 
                placeholder=' for axample Germany'/>


                <CustomInput 
                control={form.control}
                name='postalCode' 
                label='Postal Code:' 
                placeholder='eg. 11012'/>
                </div>
              <div className='flex gap-4'>
                <CustomInput 
                control={form.control}
                name='dateOfBirth' 
                label='Date Of Birth:' 
                placeholder='YY-MM-DD'/>

                <CustomInput 
                control={form.control}
                name='SSN' 
                label='Social Security Number:' 
                placeholder='eg 1234'/>

              </div>

                </>
          )
        }
      <CustomInput control={form.control} name='email' label='email' placeholder='enter your enter your email'/>
        <CustomInput control={form.control} name='password' label='Password' placeholder='enter your enter your password'/>
        
        <div className = 'flex flex-col gap-4'>
        <Button type="submit" className='form-btn' disabled={isLoading}>
          {isLoading ? (
            <>
            <Loader2 className='animate-spin' size={20} /> &nbsp;
            Loading...
            </>
          ): (type === 'sign-in' ? 'Sign-in' : 'Sign-up')

          }
        </Button>

        </div>
       
      </form>
    </Form>
     <footer className='flex justify-center gap-1'>
      <p className='text-14  font-normal text-gray-600'>

        {
          type === 'sign-in' ? "Don't have an account ?" : 'Already have an account ?'
        }

      </p>
      <Link href={type === 'sign-in' ? "/sign-up" : '/sign-in'} className='form-link'>
        {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
      </Link>
     </footer>

            </>
       )}
    </section>
  )
}



export default AuthForm