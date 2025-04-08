'use client'

import React from 'react'
import { Signup as SignupComponent, AuthLayout } from '@/components'

function SignupPage() {
  return (
    <div className='py-8'>
        <AuthLayout authentication={false}>
            <SignupComponent />
        </AuthLayout>
    </div>
  )
}

export default SignupPage
