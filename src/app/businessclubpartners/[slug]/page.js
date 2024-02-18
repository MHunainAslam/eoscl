'use client'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import LoyalCustomer from '@/components/about/LoyalCustomer'
import VendorsTab from '@/components/vendors/VendorsTab'
import NaanGuys from '@/components/vendors/VendorsTabData/NaanGuys'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    
    const searchParams = useSearchParams()

    const cat = JSON.parse(searchParams.get('cat'))
    return (
        <>
            <Banner heading={cat} />
            <NaanGuys />
            <LoyalCustomer />
            {/* <Contact /> */}
        </>
    )
}

export default Page