import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import MembershipBanner from '@/components/MembershipBanner'
import LoyalCustomer from '@/components/about/LoyalCustomer'
import OurStory from '@/components/about/OurStory'
import React from 'react'

const page = () => {
  return (
    <>
      <Banner heading={'About Us'} />
      <OurStory />
      <MembershipBanner reverse={true} />
      <LoyalCustomer />
      <Contact />
    </>
  )
}

export default page