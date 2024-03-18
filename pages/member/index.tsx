import ContentOverView from '@/components/organisme/ContentOverView'
import SideBar from '@/components/organisme/SideBar'
import { JWTPayloadTypes, UserTypes } from '@/services/data-types'
import { jwtDecode } from 'jwt-decode'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

interface CheckoutProps {
  user: UserTypes
}

export default function Member(props: CheckoutProps) {
  const {user} = props;
  return (
   <>
        {/* <!-- Overview --> */}
    <section className="overview overflow-auto">
       <SideBar activeMenu='overview'/>
       <ContentOverView />
    </section>
   </>
  )
}

export async function getServerSideProps({req}:any) {
  const {token} = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      }
    }
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
  return {
    props: {
      user: userFromPayload
    }
  }
}