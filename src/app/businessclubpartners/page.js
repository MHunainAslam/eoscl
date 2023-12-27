import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import LoyalCustomer from '@/components/about/LoyalCustomer'
import VendorsTab from '@/components/vendors/VendorsTab'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner heading={'Business Club Partners'} />
            <VendorsTab />
            {/* <LoyalCustomer /> */}
            {/* <Contact /> */}
        </>
    )
}

export default page