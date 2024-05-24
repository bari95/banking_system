
'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm,Control } from "react-hook-form"

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
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')


interface customInput {
    control : Control <z.infer<typeof formSchema>>,
    name:'email' | 'password' | 'state' | 'dateOfBirth' | 'postalCode' | 'firstName' | 'lastName' | 'SSN' | 'address',
    label:string,
    placeholder:string
}

function CustomInput({control,name,label,placeholder} : customInput ) {
  



  return (
    <div>
 <FormField
          control={control}
          name={name}
          render={({ field }) => (
        <div className='foorm-item'>
          <FormLabel className='form-label'>
            {label}
          </FormLabel>
          <div className='flex w-full flex-col'>
            <FormControl>
              <Input 
              placeholder={placeholder}
              className='input-class'
              type={name === "email" ? 'email' : 'text'}
              {...field}
              />

            </FormControl>
          </div>
            <FormMessage className='form-message'/>

        </div>
          )}
        />

    </div>
  )
}

export default CustomInput