import { JWTPayloadTypes, UserTypes } from '@/services/data-types';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from "next/link";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    email: '',
    id: '',
  });
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  useEffect(()=>{
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFormPayload: UserTypes = payload.player; 
      
      console.log(user.avatar);
      setUser(userFormPayload);    
    }
  },[]);
  return (
    <>
     <div className="user text-center pb-50 pe-30">
        <Image src={`${API_IMG}/${user.avatar}`}  width="90" height="90" className="img-fluid mb-20" alt="avatar" />
        <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
        <p className="color-palette-2 m-0">{user.email}</p>
        <p className="color-palette-2 m-0">{user.id}</p>
    </div>
    </>
  )
}
