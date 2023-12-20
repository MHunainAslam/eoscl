'use client'
import { app_url } from '@/config'
import { imgurl } from '@/utils/Token'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Vendors = () => {
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        axios.get(`${app_url}/api/partners?status=active`, {
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
            <section className='vendors position-relative overflow-x-hidden py-5'>
                <Image src={'/assets/images/card/Ellipse 4.png'} className='vendors-bg' width={100} height={100} alt=''></Image>
                <div className="container mt-5">
                    <p className="heading text-center">
                        Partners
                    </p>
                    <p className="para text-center px-md-5">The success of our Business Club is strengthened by our esteemed partners, who play a pivotal role in shaping the community ecosystem. We are proud to align with industry leaders, innovators, and influencers who share our commitment to excellence. Most of these business club partners are part of other Event Ontario Initiatives, such as Cricket league, Entrepreneur program, etc.</p>
                    <div className="row mt-5 vendors-card">
                        {data?.data?.slice(0, 12).map((item, i) => (

                            <div className="col-lg-3 col-md-4 col-6 mt-3">
                                <div className="card h-100">
                                    <div className="card-body px-2 py-1">
                                        {item.image === null ?
                                            <Image src={'/assets/images/download.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                            :
                                            <Image loader={imgurl} src={item.image?.url} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='mt-5 text-center'>
                        <Link href={'/partners'} className='btn primary-btn '>View All</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Vendors