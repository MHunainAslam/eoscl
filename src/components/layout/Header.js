'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    useEffect(() => {
        document.body.style.overflowY = "auto";
        document.body.style.padding = "0";
    }, [router])


    return (
        < >
            <nav className="navbar navbar-expand-lg custome-nav " aria-label="Offcanvas navbar large">
                <div className="container-xl container-fluid">
                    <Link className="navbar-brand " href="/">
                        <Image src="/assets/images/logo/logo.png" width={500} height={500} alt="" className="header-logo" /></Link>
                    <button className="navbar-toggler offcanva-btn border-0" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <i className="bi bi-list fs-1 text-black"></i>
                    </button>
                    <div className="offcanvas offcanvas-end offcanva-nav" tabIndex="-1" id="offcanvasNavbar2"
                        aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header justify-content-end">
                            <button type="button" className="btn-close " data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-lg-flex justify-content-between">
                            <ul className="navbar-nav justify-content-start flex-grow-1 pe-5 align-items-center justify-content-end custome-nav">
                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === '/' ? 'active-nav' : ''} `} aria-current="page" href="/">Home</Link>
                                </li>

                                <li className="nav-item" >
                                    <Link className={`nav-link ${pathname === '/about' ? 'active-nav' : ''} `} href={"/about"}>About Us </Link>
                                </li>


                                {/* <li className="nav-item">
                                    <Link className="nav-link" href="/socialcare">Shop</Link>
                                </li> */}

                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === '/membershipcards'  ? 'active-nav' : ''} `} href="/membershipcards">Membership Cards</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === '/partners'  ? 'active-nav' : ''} `} href="/partners">Partners</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === '/contactus'  ? 'active-nav' : ''} `} href="/contactus">Contact Us</Link>
                                </li>

                            </ul>
                            {/* <i className="bi bi-cart-fill"></i> */}
                            {/* <div className='text-center pe-lg-0 pe-5'>
                                <i className="bi bi-person-fill"></i>
                            </div> */}

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header