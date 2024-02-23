import CheckoutConfirmation from '@/components/organisme/CheckoutConfirmation'
import CheckoutDetail from '@/components/organisme/CheckoutDetail'
import ChekoutItem from '@/components/organisme/CheckoutItem'
import { JWTPayloadTypes, UserTypes } from '@/services/data-types'
import { jwtDecode } from 'jwt-decode'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CheckoutProps {
  user: UserTypes
}

export default function Checkout(props: CheckoutProps) {
  const {user} = props;
  console.log('user: ', user);
  return (
    <>
     {/* <!-- Checkout Content --> */}
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
            <div className="logo text-md-center text-start pb-50">
                <Link className="" href="#">
                    <Image src={'icon/logo.svg'} height={60} width={60} alt='logo' />
                </Link>
            </div>
            <div className="title-text pt-md-50 pt-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
            </div>
          <ChekoutItem />
            <hr/>
           <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
    </section>
    </>
  )
}

export async function getServerSideProps({req}) {
  const {token} = req.cookies;
  if(!token){
    return {
      redirect: {
        destination: '/sign-in',
        permanent : false,
      }
    }
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  return {
    props: {
      user: userFromPayload
    },
  };
}


