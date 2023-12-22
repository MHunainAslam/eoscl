'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MembershipModal from '../home/MembershipModal'
import axios from 'axios'
import { app_url } from '@/config'
import toast from 'react-hot-toast'
import { imgurl } from '@/utils/Token'

const Allmembershipcards = () => {
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [PkgName, setPkgName] = useState('')
    const [Pkgid, setPkgid] = useState('')
    const [PkgPrice, setPkgPrice] = useState('')

    const BeginnerModal = (title, price, id) => {
        setPkgName(title)
        setPkgPrice(`${price}`)
        setPkgid(id)
    }
    useEffect(() => {
        axios.get(`${app_url}/api/memberships?status=active`, {
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
            <section className='membership pt-5 '>
                <div className="container text-center">

                    <div className="row ">
                        {data?.data?.map((item, i) => (
                            <div className="col-lg-4 col-md-6">
                                <div className="card m-card ">
                                    <div className="card-body pb-5 text-center">
                                        {item.image === null ?
                                            <Image src={'/assets/images/download.png'} className='m-card-img' alt="" width={500} height={500}></Image> :
                                            <Image loader={imgurl} src={item.image?.url} className='m-card-img' alt="" width={500} height={500}></Image>
                                        }
                                        <p className="heading-m w-fit-content mt-3 mx-auto">{item.title}
                                            <br /> <span className='heading-line'></span>
                                        </p>
                                        <p className="heading-sm text-p">${item.price}</p>
                                        <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit repudiandae maxime quaerat est id laudantium minus quibusdam architecto molestias culpa.!</p>
                                        <button className='btn primary-btn m-card-btn' data-bs-toggle="modal" data-bs-target="#VendorModal" onClick={() => BeginnerModal(item.title, item.price, item.id)}>Get Started</button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <MembershipModal PkgName={PkgName} Pkgid={Pkgid} PkgPrice={PkgPrice} />
        </>
    )
}

export default Allmembershipcards
