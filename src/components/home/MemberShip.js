'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MembershipModal from './MembershipModal'
import Link from 'next/link'
import { app_url } from '@/config'
import axios from 'axios'
import { GetLocaldata } from '@/utils/Token'
import toast from 'react-hot-toast'

const MemberShip = () => {
    const [PkgName, setPkgName] = useState('')
    const [PkgPrice, setPkgPrice] = useState('')
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const BeginnerModal = () => {
        setPkgName('Beginner')
        setPkgPrice('$200,000')
    }
    const PremierModal = () => {
        setPkgName('Premier')
        setPkgPrice('$200,000')
    }
    const EliteModal = () => {
        setPkgName('Elite')
        setPkgPrice('$200,000')
    }
    GetLocaldata()
    useEffect(() => {
        axios.get(`${app_url}/api/memberships`, {
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setisLoading(false)
                setdata(response.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [])
    return (
        <>
            <section className='membership mt-5'>
                <div className="container text-center">
                    <p className='heading'>The Membership Card Option</p>
                    <p className='para-m px-md-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="row mb-5">
                        {data?.data?.slice(0, 3).map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="card h-100 m-card ">
                                    <div className="card-body pb-5 text-center">
                                        <Image src={'/assets/images/card/Image 5.png'} className='m-card-img' alt="" width={500} height={500}></Image>
                                        <p className="heading-m w-fit-content mt-3 mx-auto">{item.title}
                                            <br /> <span className='heading-line'></span>
                                        </p>
                                        <p className="heading-sm text-p">${item.price}</p>
                                        <p className='para' dangerouslySetInnerHTML={{ __html: item.description }}></p>

                                    </div>
                                    <div className="card-footer">
                                        <button className='btn primary-btn m-card-btn' data-bs-toggle="modal" data-bs-target="#VendorModal" onClick={BeginnerModal}>Get Started</button>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                    <Link href="/membershipcards" className='btn primary-btn mt-5'>Show All</Link>
                </div>
            </section>
            <MembershipModal PkgName={PkgName} PkgPrice={PkgPrice} />
        </>
    )
}

export default MemberShip