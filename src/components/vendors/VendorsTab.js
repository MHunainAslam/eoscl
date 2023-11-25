'use client'
import React from 'react'
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
                                        <li class="nav-item nav-link " id="AdilLaw-tab" data-bs-toggle="tab" data-bs-target="#AdilLaw" type="button" role="tab" aria-controls="AdilLaw" aria-selected="false" tabindex="-1">
                                            Adil Law
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="AlamLaw-tab" data-bs-toggle="tab" data-bs-target="#AlamLaw" type="button" role="tab" aria-controls="AlamLaw" aria-selected="false" tabindex="-1">
                                            Alam Law
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="BigPicker-tab" data-bs-toggle="tab" data-bs-target="#BigPicker" type="button" role="tab" aria-controls="BigPicker" aria-selected="false" tabindex="-1">
                                            Big Pickering
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="Cellrox-tab" data-bs-toggle="tab" data-bs-target="#Cellrox" type="button" role="tab" aria-controls="Cellrox" aria-selected="false" tabindex="-1">
                                            Cellrox
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="Cirruslabs-tab" data-bs-toggle="tab" data-bs-target="#Cirruslabs" type="button" role="tab" aria-controls="Cirruslabs" aria-selected="false" tabindex="-1">
                                            Cirruslabs
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="Dragon-tab" data-bs-toggle="tab" data-bs-target="#Dragon" type="button" role="tab" aria-controls="Dragon" aria-selected="false" tabindex="-1">
                                            Dragon Taek Wondo
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="Goldy-tab" data-bs-toggle="tab" data-bs-target="#Goldy" type="button" role="tab" aria-controls="Goldy" aria-selected="false" tabindex="-1">
                                            Goldy
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="Isharp-tab" data-bs-toggle="tab" data-bs-target="#Isharp" type="button" role="tab" aria-controls="Isharp" aria-selected="false" tabindex="-1">
                                            Isharp
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="KalaLaw-tab" data-bs-toggle="tab" data-bs-target="#KalaLaw" type="button" role="tab" aria-controls="KalaLaw" aria-selected="false" tabindex="-1">
                                            Kala Law
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="ChamberofCommerce-tab" data-bs-toggle="tab" data-bs-target="#ChamberofCommerce" type="button" role="tab" aria-controls="ChamberofCommerce" aria-selected="false" tabindex="-1">
                                            Chamber of Commerce
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li class="nav-item nav-link " id="MuslimAssociation-tab" data-bs-toggle="tab" data-bs-target="#MuslimAssociation" type="button" role="tab" aria-controls="MuslimAssociation" aria-selected="false" tabindex="-1">
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
                        <div class="tab-pane fade " id="AdilLaw" role="tabpanel" aria-labelledby="AdilLaw-tab">
                            <AdilLaw />
                        </div>
                        <div class="tab-pane fade " id="AlamLaw" role="tabpanel" aria-labelledby="AlamLaw-tab">
                            <AlamLaw />
                        </div>
                        <div class="tab-pane fade " id="BigPicker" role="tabpanel" aria-labelledby="BigPicker-tab">
                            <BigPicker />
                        </div>
                        <div class="tab-pane fade " id="Cellrox" role="tabpanel" aria-labelledby="Cellrox-tab">
                            <Cellrox />
                        </div>
                        <div class="tab-pane fade " id="Cirruslabs" role="tabpanel" aria-labelledby="Cirruslabs-tab">
                            <Cirruslab />
                        </div>
                        <div class="tab-pane fade " id="Dragon" role="tabpanel" aria-labelledby="Dragon-tab">
                            <Dragon />
                        </div>
                        <div class="tab-pane fade " id="Goldy" role="tabpanel" aria-labelledby="Goldy-tab">
                            <Goldy />
                        </div>
                        <div class="tab-pane fade " id="Isharp" role="tabpanel" aria-labelledby="Isharp-tab">
                            <Isharp />
                        </div>
                        <div class="tab-pane fade " id="KalaLaw" role="tabpanel" aria-labelledby="KalaLaw-tab">
                            <KalaLaw />
                        </div>
                        <div class="tab-pane fade " id="ChamberofCommerce" role="tabpanel" aria-labelledby="ChamberofCommerce-tab">
                            <ChamberofCommerce />
                        </div>
                        <div class="tab-pane fade " id="MuslimAssociation" role="tabpanel" aria-labelledby="MuslimAssociation-tab">
                            <MuslimAssociation />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendorsTab