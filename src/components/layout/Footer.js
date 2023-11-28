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
                            <Image src={'/assets/images/logo/eoscl-logo-white.png'} className='footer-logo' alt="" width={500} height={500}></Image>
                            <p className="para-m mt-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
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
                                    <Link href={'/vendors'} className='link-hov text-black para'>Vendors</Link>
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
                                    <i class="bi bi-geo-alt-fill me-4"></i>
                                    <Link href={'#'} className='link-hov text-black para'>Lorem ipsum</Link>
                                </li>
                                <li className='list-unstyled my-3'>
                                    <i class="bi bi-envelope-fill me-4"></i>
                                    <Link href={'#'} className='link-hov text-black para'>Info@support.com</Link>
                                </li>
                                <li className='list-unstyled my-3'>
                                    <i class="bi bi-telephone-fill me-4"></i>
                                    <Link href={'#'} className='link-hov text-black para'>123 456 789</Link>
                                </li>

                            </ul>
                            <div className="footer-icon justify-content-lg-start justify-content-center">
                                <Link href={'#'}>
                                    <i class="bi bi-facebook"></i>
                                </Link>
                                <Link href={'#'}>
                                    <i class="bi bi-instagram"></i>
                                </Link>
                                <Link href={'#'}>
                                    <i class="bi bi-twitter"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mini-footer back-p py-2 text-center '>
                <p className="para mb-0 text-white">© 2023 Copyrights. EOSCL. All Rights Reserved</p>
            </section>
        </>
    )
}

export default Footer