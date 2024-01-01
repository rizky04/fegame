import ContentOverView from '@/components/organisme/ContentOverView'
import SideBar from '@/components/organisme/SideBar'
import React from 'react'

export default function Member() {
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
