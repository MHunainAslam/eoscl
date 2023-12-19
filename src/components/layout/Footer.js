import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <section className='footer mt-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4  mt-3 text-lg-start text-center ">
                            <Image src={'/assets/images/logo/logo.png'} className='footer-logo' alt="" width={500} height={500}></Image>
                            <p className="para-m mt-3 text-black">Welcome to our exclusive Membership Program, where opportunities abound and connections flourish. Immerse yourself in a dynamic community of like-minded business enthusiasts and entrepreneurs dedicated to fostering success.</p>
                        </div>
                        <div className="col-lg col-md-6 mt-3 text-lg-start text-center" col-md-6>
                            <p className="heading-sm">
                                Quick Links
                            </p>
                            <ul className='p-0'>
                                <li className='list-unstyled my-3'>
                                    <Link href={'/'} className='link-hov text-black para'>Home</Link>
                                </li>
                                <li className='list-unstyled my-3'>
                                    <Link href={'/about'} className='link-hov text-black para'>About Us</Link>
                                </li>
                                {/* <li className='list-unstyled my-3'>
                                    <Link href={'#'} className='link-hov text-black para'>Shop</Link>
                                </li> */}
                                <li className='list-unstyled my-3'>
                                    <Link href={'/partners'} className='link-hov text-black para'>Partners</Link>
                                </li>
                                <li className='list-unstyled my-3'>
                                    <Link href={'/contactus'} className='link-hov text-black para'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg col-md-6 mt-3 text-lg-start text-center">
                            <p className="heading-sm">
                                Useful Links
                            </p>
                            <ul className='p-0'>
                                <li className='list-unstyled my-3'>
                                    <Link href={'/privacypolicy'} className='link-hov text-black para'>Privacy Policy</Link>
                                </li>
                                <li className='list-unstyled my-3'>
                                    <Link href={'/termsandcondition'} className='link-hov text-black para'>Terms & Conditions</Link>
                                </li>
                                <li className='list-unstyled my-3'>
                                    <Link href={'/faq'} className='link-hov text-black para'>Faqs</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg col-md-6 mt-3 text-lg-start text-center">
                            <p className="heading-sm">
                                Contact Us
                            </p>
                            <ul className='p-0'>
                                <li className='list-unstyled my-3'>
                                    <i className="bi bi-geo-alt-fill me-4 text-black"></i>
                                    <Link href={'#'} className='link-hov text-black para'>Lorem ipsum</Link>
                                </li>
                                <li className='list-unstyled my-3'>
                                    <i className="bi bi-envelope-fill me-4 text-black"></i>
                                    <Link href={'#'} className='link-hov text-black para'>Info@support.com</Link>
                                </li>
                                <li className='list-unstyled my-3'>
                                    <i className="bi bi-telephone-fill me-4 text-black"></i>
                                    <Link href={'#'} className='link-hov text-black para'>123 456 789</Link>
                                </li>

                            </ul>
                            <div className="footer-icon justify-content-lg-start justify-content-center">
                                <Link href={'#'} target='_blank'>
                                    <i className="bi bi-facebook"></i>
                                </Link>
                                <Link href={'#'} target='_blank'>
                                    <i className="bi bi-instagram"></i>
                                </Link>
                                <Link href={'#'} target='_blank'>
                                    <i className="bi bi-twitter"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mini-footer back-p py-2 text-center '>
                <p className="para mb-0 text-white">© {new Date().getFullYear()}  Copyrights. EOSCL. All Rights Reserved</p>
            </section>
        </>
    )
}

export default Footer