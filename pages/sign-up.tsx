import SignUpForm from '@/components/organisme/SignUpForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SignUp() {
  return (
   <>
     {/* <!-- Sign Up --> */}
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
            <form action="">
                <div className="pb-50">
                    <Link className="navbar-brand" href="/">
                        <Image src={'icon/logo.svg'} width={60} height={60} alt='' />
                    </Link>
                </div>
                <SignUpForm />
            </form>
        </div>
    </section>
   </>
  )
}
