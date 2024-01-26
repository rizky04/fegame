import React, { useEffect } from 'react'
import Link from "next/link";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

interface Authprops {
  isLogin? : boolean,
}

export default function Auth(props: Partial<Authprops>) {
  const {isLogin} = props; 
  useEffect(()=>{
    const token = Cookies.get('token');
    const jwtToken = atob(token);
    const payload = jwtDecode(jwtToken);
    const user = payload.player;
    console.log('user :', user);
  });
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
              <img
                src="/img/avatar-1.png"
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
              <li>
                <Link className="dropdown-item text-lg color-palette-2" href="/sign-in">
                  Log Out
                </Link>
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
          href="./src/sign-in.html" role="button">Sign
          In</Link>
    </li>
    );
  }
}
