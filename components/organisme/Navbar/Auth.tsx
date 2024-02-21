import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import Image from 'next/image';
import { JWTPayloadTypes, UserTypes } from '@/services/data-types';
import { useRouter } from 'next/router';

export default function Auth() {
  const [isLogin, serIslogin] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    avatar: ''
  });
  useEffect(()=> {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload : JWTPayloadTypes = jwtDecode(jwtToken);
      const userFormPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${userFormPayload.avatar}`;
      serIslogin(true);
      setUser(user);
    }
    console.log('user :', user);
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/');
    serIslogin(false);
  }
  if (isLogin) {
    return (
      <>
        <li className="nav-item my-auto dropdown d-flex">
          <div className="vertical-line d-lg-block d-none"></div>
          <div>
            <Link
              className="dropdown-toggle ms-lg-40"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Image
                src={user.avatar}
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
              />
            </Link>
            <ul
              className="dropdown-menu border-0"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <Link className="dropdown-item text-lg color-palette-2" href="/member">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-lg color-palette-2" href="/">
                  Wallet
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-lg color-palette-2" href="/member/edit-profile">
                  Account Settings
                </Link>
              </li>
              <li onClick={onLogout}>
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </li>
      </>
    );
  }else{
    return(
      <li className="nav-item my-auto">
      <Link className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          href="/sign-in" role="button">Sign
          In</Link>
    </li>
    );
  }
}
