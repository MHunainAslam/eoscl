import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import LoyalCustomer from '@/components/about/LoyalCustomer'
import VendorsTab from '@/components/vendors/VendorsTab'
import NaanGuys from '@/components/vendors/VendorsTabData/NaanGuys'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner heading={'Partners'} />
            <NaanGuys />
            <LoyalCustomer />
            {/* <Contact /> */}
        </>
    )
}

export default page