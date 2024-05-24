

import AuthForm from '@/components/ui/AuthForm'
// import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

function SignUp() {
 // const logged= getLoggedInUser();
 // console.log(logged)
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up"/>
    </section>
  )
}

export default SignUp