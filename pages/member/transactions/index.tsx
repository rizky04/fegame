import SideBar from '@/components/organisme/SideBar'
import FooterSideBar from '@/components/organisme/SideBar/FooterSideBar'
import TransactionContent from '@/components/organisme/TransactionContent'
import TableRow from '@/components/organisme/TransactionContent/TableRow'
import React from 'react'

export default function Transactions() {
  return (
   <>
    {/* <!-- Transactions --> */}
    <section className="transactions overflow-auto">
    <SideBar activeMenu='transaction'/>
       <TransactionContent />
    </section>
   </>
  )
}
