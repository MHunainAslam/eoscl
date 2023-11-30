'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
    const router = useRouter()
    useEffect(() => {
        document.body.style.overflowY = "auto";
        document.body.style.padding = "0";
    }, [router])

    return (
        < >
            <nav class="navbar navbar-expand-lg custome-nav " aria-label="Offcanvas navbar large">
                <div class="container-xl container-fluid">
                    <Link class="navbar-brand " href="#">
                        <Image src="/assets/images/logo/eoscl-logo.png" width={500} height={500} alt="" class="header-logo" /></Link>
                    <button class="navbar-toggler offcanva-btn border-0" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <i class="bi bi-list fs-1 text-black"></i>
                    </button>
                    <div class="offcanvas offcanvas-end offcanva-nav" tabindex="-1" id="offcanvasNavbar2"
                        aria-labelledby="offcanvasNavbar2Label">
                        <div class="offcanvas-header justify-content-end">
                            <button type="button" class="btn-close " data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body d-lg-flex justify-content-between">
                            <ul class="navbar-nav justify-content-start flex-grow-1 pe-5 align-items-center justify-content-end custome-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" href="/">Home</Link>
                                </li>

                                <li class="nav-item" >
                                    <Link class="nav-link " href={"/about"}>About Us </Link>
                                </li>


                                {/* <li class="nav-item">
                                    <Link class="nav-link" href="/socialcare">Shop</Link>
                                </li> */}

                                <li class="nav-item">
                                    <Link class="nav-link" href="/vendors">Vendors</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" href="/contactus">Contact Us</Link>
                                </li>

                            </ul>
                            {/* <i class="bi bi-cart-fill"></i> */}
                            <div className='text-center pe-lg-0 pe-5'>
                                <i class="bi bi-person-fill"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header