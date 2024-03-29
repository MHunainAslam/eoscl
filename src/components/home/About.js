import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <>
            <section>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-5 my-auto about-img">
                            <img src={'/assets/images/banner/banner.png'} alt="" width={500} height={500}></img>
                        </div>
                        <div className="col-md-7 my-auto">
                            <p className="heading">About Us </p>
                            <p className="para">
                                Welcome to the Event Ontario business club program! This program is a fantastic opportunity for entrepreneurs and professionals to take advantage of discounts and incentives offered by EOSCL sponsors. As a business member, you can benefit from these special offers and connect with other EOSCL players. We are proud to offer this program and support the success of our members. 

                            </p>
                            <Link href="/about" className='btn primary-btn mt-3'>Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About