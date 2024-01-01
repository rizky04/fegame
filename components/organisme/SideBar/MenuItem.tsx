import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cx from "classnames";
interface MenuItemProps {
    title: string,
    icon: 'overview' | 'settings' | 'transactions' | 'messages' | 'card' | 'reward' | 'logout'
    active? : boolean,
    href : string,
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const {title, icon, active, href} = props;
    const classItem = cx({
        item: true,
        active,
        'mb-30': true,
    });
  return (
    <>
    <div className={classItem}>
        <Image className="icon me-3" src={`/icon/${icon}.svg`} height={25} width={25} alt="" />
            <p className="item-title m-0">
                <Link href={`${href}`} className="text-lg text-decoration-none">{title}</Link>
            </p>
        </div>
    </>
  )
}
