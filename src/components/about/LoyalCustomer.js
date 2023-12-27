import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoyalCustomer = () => {
    return (
        <>
            <section>
                <div className="container py-3 my-5">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="heading">
                                Become Our Loyal
                                Customer, Reach
                                Our Team Right Now
                            </p>
                            <p className="para">
                                As a member of the EOSCL business club, you can enjoy several additional benefits, including a business card holder and access to various perks. These perks include discounted advertising opportunities at Event Ontario events, a free business advertisement in the Event Ontario marketing video on social media, invitations to business club events to expand your professional network, preferred rates on marketing packages, and your business logo featured on the EOSCL website at no extra cost. You can also take advantage of preferred rates on the voucher program and more. <br /><br />
                                Join our Business Club Partner program by paying an annual fee and enjoy a steady stream of customers using your services.

                            </p>
                            <Link href={'/contactus'} className='btn primary-btn'>Contact Us</Link>
                        </div>
                        <div className="col-md-6 my-md-auto mt-3">
                            <Image src={'/assets/images/card/Rectangle 84.png'} className='w-100 object-fit-cover h-auto' width={1000} height={1000} alt=''></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoyalCustomer