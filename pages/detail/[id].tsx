import Footer from '@/components/organisme/Footer'
import Navbar from '@/components/organisme/Navbar'
import TopUpForm from '@/components/organisme/TopUpForm'
import TopUpItem from '@/components/organisme/TopUpItem'
import { getDetailVoucher } from '@/services/palyer'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

export default function Detail() {
  const {query, isReady} = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [dataItem, setDataITem] = useState({
    name : ' ',
    thumbnail : ' ',
    category : {
      name: ' ',
    }
  });
const [nominals, setNominals] = useState([]);
const [payments, setPayments] = useState([]);
  const getVoucherDetailAPI = useCallback( async (id: any) => { 
    const data = await getDetailVoucher(id);
    console.log('data : ', data);
    setDataITem(data.detail);
    localStorage.setItem('data-item', JSON.stringify(data.detail));
    setNominals(data.detail.nominals);
    setPayments(data.payment);
  },[]);


  useEffect(()=>{
    if (isReady) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      console.log('router sudah siap', query.id);
      getVoucherDetailAPI(query.id);
    } else {
      console.log('route belum siap')
    }
  }, [isReady])

  if (isLoading) {
    return "<h1>loading</h1>";
  }

  
  return (
   <>
   <Navbar />
    <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
            <div className="detail-header pb-50">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
                <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                  <TopUpItem data={dataItem} type='mobile'/>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                    <TopUpItem data={dataItem} type='dekstop' />
                    <hr/>
                  <TopUpForm payments={payments} nominals={nominals}/>
                </div>
            </div>
        </div>
    </section>
    <Footer />
   </>
  )
}
