import Banner from '@/components/Banner'
import LoyalCustomer from '@/components/about/LoyalCustomer'
import Allmembershipcards from '@/components/membershipcards/Allmembershipcards'
import VendorsTab from '@/components/vendors/VendorsTab'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner heading={'Membership Cards'} />
            <Allmembershipcards />
            <LoyalCustomer />
        </>
    )
}

export default page