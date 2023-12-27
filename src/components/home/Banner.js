import React from 'react'
import Header from '../layout/Header'
import Link from 'next/link'
import Image from 'next/image'
import MemberShipForm from '../membership/MemberShipForm'

const Banner = () => {
    return (
        <>
            <section className='home-banner'>
                <Header />
                <div className="container  min-vh-75 d-flex align-items-center">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="heading ">Unlock opportunities, Elevate your network, and join the 
                                <span> Membership Program</span>
                            </p>
                            <p className="para mb-4">
                            Welcome to our exclusive Membership Program, where opportunities abound and connections flourish. Immerse yourself in a dynamic community of like-minded business enthusiasts and entrepreneurs dedicated to fostering success.
                            </p>
                            <button className='btn primary-btn' data-bs-toggle="modal" data-bs-target="#MembershipForm">Get Started</button>
                            <Link className='para text-s ps-3 link-hov' href={'/about'}>Learn More <i className="bi bi-arrow-right"></i></Link>
                            {/* <div className="d-flex flex-wrap pt-4 align-items-center">
                                <ul className='banner-rating px-0 m-0'>
                                    <li>
                                        <Link href={'#'}><Image src={'/assets/images/user/Ellipse 1.png'} width={100} height={100} alt='' /></Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}><Image src={'/assets/images/user/Ellipse 2.png'} width={100} height={100} alt='' /></Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}><Image src={'/assets/images/user/Ellipse 3.png'} width={100} height={100} alt='' /></Link>
                                    </li>
                                </ul>
                                <div className='ms-4'>
                                    <div className="d-flex  stars">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="para-m mb-0">
                                        Over 2K+ Active User's
                                    </p>
                                </div>
                            </div> */}
                        </div>
                        <div className="home-banner-bg col-lg-6">

                        </div>
                    </div>
                </div>
            </section>
            <MemberShipForm />
        </>
    )
}

export default Banner 