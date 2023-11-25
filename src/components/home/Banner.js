import React from 'react'
import Header from '../layout/Header'
import Link from 'next/link'
import Image from 'next/image'

const Banner = () => {
    return (
        <section className='home-banner'>
            <Header />
            <div className="container  min-vh-75 d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="heading">Discover A Limitless
                            Possibilities With
                            <span> Your Membership</span>
                        </p>
                        <p className="para mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur fuga laborum cumque unde quo distinctio dolorum aspernatur, architecto rerum dignissimos pariatur id placeat labore sint, nam aperiam possimus a corrupti.
                        </p>
                        <button className='btn primary-btn'>Get Started</button>
                        <Link className='para text-s ps-3 link-hov' href={''}>Learn More <i class="bi bi-arrow-right"></i></Link>
                        <div className="d-flex flex-wrap pt-4 align-items-center">
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
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <p className="para-m mb-0">
                                    Over 2K+ Active User's
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="home-banner-bg col-lg-6">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner 