'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MembershipModal from './MembershipModal'
import Link from 'next/link'
import { app_url } from '@/config'
import axios from 'axios'
import { GetLocaldata, imgurl } from '@/utils/Token'
import toast from 'react-hot-toast'

const MemberShip = () => {
    const [PkgName, setPkgName] = useState('')
    const [PkgPrice, setPkgPrice] = useState('')
    const [Pkgid, setPkgid] = useState('')
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const BeginnerModal = (title, price, id) => {
        setPkgName(title)
        setPkgPrice(`${price}`)
        setPkgid(id)
    }

    GetLocaldata()
    useEffect(() => {
        axios.get(`${app_url}/api/memberships?status=active`, {
        })
            .then(response => {
                // Handle successful response here
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
            <section className='membership mt-4'>
                <div className="container text-center">
                    <p className='heading'>The Membership Card Option</p>
                    <p className='para-m px-md-5'>Join our Business Club Partner program by paying an annual fee and enjoy a steady stream of customers using your services.</p>
                    <div className="row justify-content-center " >
                        {data?.data?.slice(0, 3).map((item, i) => (
                            <div className="col-lg-4 col-md-6 " style={{ marginTop: '150px' }} key={i}>
                                <div className="card h-100 m-card-2 ">
                                    <div className="card-body  text-center">
                                        {item.image === null ?
                                            <img src={'/assets/images/download.png'} className='m-card-img' alt="" width={500} height={500}></img> :
                                            <Image loader={imgurl} src={item.image?.url} className='m-card-img' alt="" width={500} height={500}></Image>
                                        }
                                        <p className="heading-m w-fit-content mt-3 mx-auto">{item.title}
                                            <br /> <span className='heading-line'></span>
                                        </p>
                                        <p className="heading-sm text-p">${item.price}</p>
                                        <p className='para' >{item.duration == 30 || item.duration == 31 ? 'Monthly' : item.duration == 91 || item.duration == 92 ? 'Quarterly' : item.duration == 182 || item.duration == 183 ? 'Half Yearly' : item.duration == 365 || item.duration == 366 ? 'Yearly' : item.duration + ' Days'}</p>
                                        <p className='para' dangerouslySetInnerHTML={{ __html: item.description }}></p>

                                    </div>
                                    <div className="card-footer border-0 bg-transparent mb-3">
                                        <button className='btn primary-btn ' data-bs-toggle="modal" data-bs-target="#VendorModal" onClick={() => BeginnerModal(item.title, item.price, item.id)}>Get Started</button>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                    <Link href="/membershipcards" className='btn primary-btn mt-5'>Show All</Link>
                </div>
            </section>
            <MembershipModal PkgName={PkgName} Pkgid={Pkgid} PkgPrice={PkgPrice} />
        </>
    )
}

export default MemberShip