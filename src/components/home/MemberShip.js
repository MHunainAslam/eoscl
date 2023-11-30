'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import MembershipModal from './MembershipModal'

const MemberShip = () => {
    const [PkgName, setPkgName] = useState('')
    const [PkgPrice, setPkgPrice] = useState('')

    const BeginnerModal = () => {
        setPkgName('Beginner')
        setPkgPrice('$200,000')
    }
    return (
        <>
            <section className='membership mt-5'>
                <div className="container text-center">
                    <p className='heading'>The Membership Card Option</p>
                    <p className='para-m px-md-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="row ">
                        <div className="col-lg-4 col-md-6">
                            <div className="card m-card ">
                                <div className="card-body pb-5 text-center">
                                    <Image src={'/assets/images/card/Image 5.png'} className='m-card-img' alt="" width={500} height={500}></Image>
                                    <p className="heading-m w-fit-content mt-3 mx-auto">Beginner
                                        <br /> <span className='heading-line'></span>
                                    </p>
                                    <p className="heading-sm text-p">$200,000</p>
                                    <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit repudiandae maxime quaerat est id laudantium minus quibusdam architecto molestias culpa.!</p>
                                    <button className='btn primary-btn m-card-btn' data-bs-toggle="modal" data-bs-target="#VendorModal" onClick={BeginnerModal}>Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card m-card ">
                                <div className="card-body pb-5 text-center">
                                    <Image src={'/assets/images/card/Image 5.png'} className='m-card-img' alt="" width={500} height={500}></Image>
                                    <p className="heading-m w-fit-content mt-3 mx-auto">Premier
                                        <br /> <span className='heading-line'></span>
                                    </p>
                                    <p className="heading-sm text-p">$200,000</p>
                                    <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit repudiandae maxime quaerat est id laudantium minus quibusdam architecto molestias culpa.!</p>
                                    <button className='btn primary-btn m-card-btn' data-bs-toggle="modal" data-bs-target="#VendorModal">Get Started</button>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card m-card ">
                                <div className="card-body pb-5 text-center">
                                    <Image src={'/assets/images/card/Image 5.png'} className='m-card-img' alt="" width={500} height={500}></Image>
                                    <p className="heading-m w-fit-content mt-3 mx-auto">Elite
                                        <br /> <span className='heading-line'></span>
                                    </p>
                                    <p className="heading-sm text-p">$200,000</p>
                                    <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit repudiandae maxime quaerat est id laudantium minus quibusdam architecto molestias culpa.!</p>
                                    <button className='btn primary-btn m-card-btn' data-bs-toggle="modal" data-bs-target="#VendorModal">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MembershipModal PkgName={PkgName} PkgPrice={PkgPrice} />
        </>
    )
}

export default MemberShip