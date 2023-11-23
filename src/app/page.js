import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/home/Banner'
import About from '@/components/home/About'
import MemberShip from '@/components/home/MemberShip'
import Vendors from '@/components/home/Vendors'
import MembershipBanner from '@/components/MembershipBanner'
import Testimonial from '@/components/home/Testimonial'
import Contact from '@/components/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    < >
      <Banner />
      <About />
      <MemberShip />
      <Vendors />
      <MembershipBanner reverse={false} />
      <Testimonial />
      <Contact />
    </>
  )
}
