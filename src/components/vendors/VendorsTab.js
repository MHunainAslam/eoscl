'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import NaanGuys from './VendorsTabData/NaanGuys';
const VendorsTab = () => {
    const nextSlide = () => {
        document.querySelector('.swiper-button-next').click()
    }
    const prevSlide = () => {
        document.querySelector('.swiper-button-prev').click()
    }


    return (
        <section>
            <div className="container my-5 py-5">
                <div className="row justify-content-center ">
                    <div className="col-lg-12 col-md-11 col-10">
                        <div className="position-relative align-items-center">
                            <i class="bi bi-arrow-left-circle-fill left-slider" onClick={prevSlide}></i>
                            <i class="bi bi-arrow-right-circle-fill right-slider" onClick={nextSlide}></i>
                            <ul class="nav vendors-tab nav-tabs border-0 justify-content-center " role="tablist">



                                <Swiper
                                    breakpoints={{
                                        1200: {
                                            slidesPerView: 6,
                                            spaceBetween: 20
                                        },
                                        992: {
                                            slidesPerView: 5,
                                            spaceBetween: 20
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 20
                                        },
                                        320: {
                                            slidesPerView: 3,
                                            spaceBetween: 20
                                        },

                                    }}
                                    slidesPerView={6}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[FreeMode, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <li class="nav-item nav-link active" id="NaanGuys-tab" data-bs-toggle="tab" data-bs-target="#NaanGuys" type="button" role="tab" aria-controls="NaanGuys" aria-selected="false" tabindex="-1">
                                            Naan Guys
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                            Adil Law
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                            Alam Law
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                            Big Pickering
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                            Cellrox
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                            Cirruslabs
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                            Dragon Taek Wondo
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                            Goldy
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                            Isharp
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                            Kala Law 
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                             Chamber of Commerce
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MyFriends-tab" data-bs-toggle="tab" data-bs-target="#MyFriends" type="button" role="tab" aria-controls="MyFriends" aria-selected="false" tabindex="-1">
                                            Muslim Association 
                                        </li>
                                    </SwiperSlide>

                                </Swiper>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className=" mt-5">
                    <div class="tab-content ">
                        <div class="tab-pane fade active show" id="NaanGuys" role="tabpanel" aria-labelledby="NaanGuys-tab">
                            <NaanGuys />
                        </div>
                        <div class="tab-pane fade " id="MyFriends" role="tabpanel" aria-labelledby="MyFriends-tab">
                            b
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendorsTab