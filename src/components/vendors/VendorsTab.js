'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import NaanGuys from './VendorsTabData/NaanGuys';
import AdilLaw from './VendorsTabData/AdilLaw';
import AlamLaw from './VendorsTabData/AlamLaw';
import BigPicker from './VendorsTabData/BigPicker';
import Cellrox from './VendorsTabData/Cellrox';
import Cirruslab from './VendorsTabData/Cirruslab';
import ChamberofCommerce from './ChamberofCommerce';
import Dragon from './Dragon';
import Goldy from './Goldy';
import Isharp from './Isharp';
import KalaLaw from './KalaLaw';
import MuslimAssociation from './MuslimAssociation';
import axios from 'axios';
import { app_url } from '@/config';
import toast from 'react-hot-toast';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CategpryTab from './VendorsTabData/CategpryTab';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
const VendorsTab = () => {
    const nextSlide = () => {
        document.querySelector('.swiper-button-next').click()
    }
    const prevSlide = () => {
        document.querySelector('.swiper-button-prev').click()
    }

    const [data, setdata] = useState()
    const [tabdata, settabdata] = useState([])
    const [partnertabdata, setpartnertabdata] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [Logo, setLogo] = useState(null)
    const [swiperlength, setswiperlength] = useState()

    useEffect(() => {
        axios.get(`${app_url}/api/categories`, {
        })
            .then(response => {
                // Handle successful response here

                setswiperlength(response.data.data)

                setisLoading(false)
                setdata(response.data)
                // setTimeout(() => {
                //     if (param) {

                //         document.querySelector(`.${param}`).click()
                //     } else {
                //         document.querySelector(`.activetab0`).click()

                //     }
                // }, 1000);
            })
            .catch(error => {
                // Handle error here
                console.error(error);
                // toast.error(error?.response?.data?.message+ 'lll')
                setisLoading(false)
            });
    }, [])

    const router = useRouter()
    const searchParams = useSearchParams()
    const param = searchParams.get('grouptab')
    const Idparam = searchParams.get('id')
    const [TabState, setTabState] = useState('')
    const [test, settest] = useState('')
    useEffect(() => {
        if (param === null) {
            setTabState(data?.data?.[0]?.id)
         
        } else {
            setTabState(param)
          
        }
    }, [param, TabState])
    const pathname = usePathname()
    const segments = pathname.split('/');
    const lastSegment = segments[segments.length - 1];


    const activetab = (e) => {
        setisLoading(true)
        axios.get(`${app_url}/api/partners?category_id=${param ? param : data?.data[0]?.id}`, {
        })
            .then(response => {
                // Handle successful response here
                setisLoading(false)
                settabdata(response.data)
                // ac()

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.error)
                setisLoading(false)
            });
    }
    useEffect(() => {
        activetab()
    }, [param, router, data])

    return (
        <section>
            <div className="container mt-4">

                <div className="row ">
                    {data?.data?.map((item, i) => (
                        <div className="col-md-3 mt-3" key={i}>
                            <Link className={`w-100 d-inline-block px-2 py-1 text-decoration-none bussinessclubtab   ${param == item.id ? 'active' : param == null ? `${i === 0 ? 'active' : ''}` : ''}`} href={`?grouptab=${item.id}`}>{item.name}</Link>

                        </div>
                    ))}
                </div>

                <div className=" mt-5">
                    <div className="tab-content ">
                        {data?.data?.map((item, i) => (
                            <div className={`tab-pane fade ${param === item.id ? 'active show' : ''} ${i === 0 ? 'active show' : ''}`} id={`a${item.id}`} role="tabpanel" aria-labelledby={i} key={i}>
                                {isLoading ?
                                    <div className="d-flex justify-content-center">
                                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                    </div>
                                    :
                                    <CategpryTab tabdata={tabdata} logo={Logo} />
                                }
                            </div>
                        ))}

                    </div>
                </div>
                {/* <ul role="tablist" className="nav vendors-tab d-block nav-tabs border-0 justify-content-center ">
                    <div className="row ">
                        {data?.data?.map((item, i) => (
                            <div className="col-md-3 mt-3" key={i}>
                                <li className={`nav-item nav-link text-capitalize bussinessclubtab p-0  ${i === 0 ? 'active'  : ''} ${param === item.id ? 'active'  : ''} ${item.slug}`} data-bs-toggle="tab" value={item.id} data-bs-target={`#a${item.id}`} type="button" role="tab" aria-controls="NaanGuys" aria-selected="false" id={item.slug} tabIndex="-1">
                                    {param + item.id}
                                    <Link className='w-100 d-inline-block px-2 py-1 text-decoration-none' href={`?grouptab=${item.id}`}>{item.name}</Link>

                                </li>
                            </div>
                        ))}
                    </div>
                </ul>
                <div className=" mt-5">
                    <div className="tab-content ">
                        {data?.data?.map((item, i) => (
                            <div className={`tab-pane fade ${param === item.id ? 'active show' : ''} ${i === 0 ? 'active show'  : ''}`}  id={`a${item.id}`} role="tabpanel" aria-labelledby={i} key={i}>
                                <CategpryTab tabdata={tabdata} logo={Logo} />
                            </div>
                        ))}

                    </div>
                </div> */}
            </div>
        </section >
    )
}

export default VendorsTab