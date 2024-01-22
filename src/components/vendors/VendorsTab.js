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
import { useRouter, useSearchParams } from 'next/navigation';
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

                console.log(response.data.data.length, 'llo');
                setswiperlength(response.data.data)
                // if (response.data.data.length < 6) {
                //     console.log('first')
                // }
                setisLoading(false)
                setdata(response.data)
                setTimeout(() => {
                    if (param) {

                        document.querySelector(`.${param}`).click()
                    } else {
                        document.querySelector(`.activetab0`).click()

                    }
                }, 1000);
            })
            .catch(error => {
                // Handle error here
                console.error(error);
                // toast.error(error?.response?.data?.message+ 'lll')
                setisLoading(false)
            });
    }, [])
    const activetab = (e) => {
        console.log(swiperlength?.length < 5 ? swiperlength?.length : 5)
        axios.get(`${app_url}/api/partners?category_id=${e.target.value}`, {
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data, 'cat');
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
    const router = useRouter()
    const searchParams = useSearchParams()
    const param = searchParams.get('state')
    const [TabState, setTabState] = useState('')
    const [test, settest] = useState('')
    useEffect(() => {
        if (param === null) {
            setTabState('')
        } else {
            setTabState(param)
        }
    }, [param, TabState])




    // const [TabState, setTabState] = useState('food')
    // useEffect(() => {
    //     if (param === null) {
    //         setTabState('profiledetail')
    //     } else {
    //         setTabState(param)
    //     }
    // }, [param, TabState])
    return (
        <section>
            <div className="container mt-4">
                {/* <div className="row justify-content-center ">
                    <div className="col-lg-12 col-md-11 col-10">
                        <div className="position-relative align-items-center">
                            <i className="bi bi-arrow-left-circle-fill left-slider" onClick={prevSlide}></i>
                            <i className="bi bi-arrow-right-circle-fill right-slider" onClick={nextSlide}></i>
                            <ul className="nav vendors-tab nav-tabs border-0 justify-content-center " role="tablist">



                                <Swiper
                                    breakpoints={{
                                        1200: {
                                            slidesPerView: swiperlength?.length < 6 ? swiperlength?.length : 6,
                                            spaceBetween: 20
                                        },
                                        992: {
                                            slidesPerView: swiperlength?.length < 5 ? swiperlength?.length : 5,
                                            spaceBetween: 20
                                        },
                                        768: {
                                            slidesPerView: swiperlength?.length < 4 ? swiperlength?.length : 4,
                                            spaceBetween: 20
                                        },
                                        320: {
                                            slidesPerView: swiperlength?.length < 2 ? swiperlength?.length : 2,
                                            spaceBetween: 20
                                        },

                                    }}
                                    slidesPerView={swiperlength?.length < 6 ? swiperlength?.length : 6}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    {data?.data?.map((item, i) => (
                                        <SwiperSlide>
                                            <li class={`nav-item nav-link text-capitalize activetab${i} ${i === 0 ? 'active' : ''}`} data-bs-toggle="tab" value={item.id} onClick={(e) => { activetab(e), setLogo(item) }} data-bs-target={`#a${item.id}`} type="button" role="tab" aria-controls="NaanGuys" aria-selected="false" tabIndex="-1">
                                                {item.name}
                                            </li>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </ul>

                        </div>
                    </div>
                </div> */}
                <ul role="tablist" className="nav vendors-tab d-block nav-tabs border-0 justify-content-center ">
                    <div className="row ">
                        {data?.data?.map((item, i) => (
                            <div className="col-md-3 mt-3">
                                <li  class={`nav-item nav-link text-capitalize  activetab${i} ${TabState ? TabState === item.slug : i === 0 ? 'active' : ''} ${item.slug}`} data-bs-toggle="tab" value={item.id} onClick={(e) => { activetab(e), setLogo(item), router.replace('/businessclubpartners') }} data-bs-target={`#a${item.id}`} type="button" role="tab" aria-controls="NaanGuys" aria-selected="false" id={item.slug} tabIndex="-1">
                                    {item.name}
                                </li>
                            </div>
                        ))}
                    </div>
                </ul>
                <div className=" mt-5">
                    <div className="tab-content ">
                        {data?.data?.map((item, i) => (
                            <div class={`tab-pane fade ${TabState ? TabState === item.slug : i === 0 ? 'show active' : ''}`} id={`a${item.id}`} role="tabpanel" aria-labelledby={i}>
                                <CategpryTab tabdata={tabdata} logo={Logo} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendorsTab