'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, FreeMode } from 'swiper/modules';

// import { SwiperSlide } from 'swiper/react';
const Testimonial = () => {
    return (
        <section className='membership '>
            <div className="container">
                <p className="heading  text-center px-md-5">
                    What Users Says About
                    Our Service
                </p>
                <p className="para px-md-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptas! Hic reiciendis similique animi eius sit, nemo dicta culpa officiis dignissimos maxime est repudiandae voluptate odit beatae itaque iste tempore.
                </p>
                <div className="row">
                    <Swiper 
                        breakpoints={{
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },

                        }}
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="">
                                <div className="card testimonial-card">
                                    <div className="testimonial-card-q"></div>
                                    <div className="card-body">
                                        <div className="testimonial-card-img">
                                            <Image src={'/assets/images/user/Rectangle.png'} alt="" width={500} height={500}></Image>
                                        </div>
                                        <div className="d-flex justify-content-between heading-sm text-center mt-4">
                                            <i className="bi bi-quote text-p"></i>
                                            John Smith
                                            <i className="bi bi-quote bi-quote-2 text-p"></i>
                                        </div>
                                        <p className="para text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis accusamus </p>
                                        <div className="d-flex justify-content-center">
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="">
                                <div className="card testimonial-card">
                                    <div className="testimonial-card-q"></div>
                                    <div className="card-body">
                                        <div className="testimonial-card-img">
                                            <Image src={'/assets/images/user/Rectangle 2.png'} alt="" width={500} height={500}></Image>
                                        </div>
                                        <div className="d-flex justify-content-between heading-sm text-center mt-4">
                                            <i className="bi bi-quote text-p"></i>
                                            Eliza Beth
                                            <i className="bi bi-quote bi-quote-2 text-p"></i>
                                        </div>
                                        <p className="para text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis accusamus </p>
                                        <div className="d-flex justify-content-center">
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="">
                                <div className="card testimonial-card">
                                    <div className="testimonial-card-q"></div>
                                    <div className="card-body">
                                        <div className="testimonial-card-img">
                                            <Image src={'/assets/images/user/Rectangle 77.png'} alt="" width={500} height={500}></Image>
                                        </div>
                                        <div className="d-flex justify-content-between heading-sm text-center mt-4">
                                            <i className="bi bi-quote text-p"></i>
                                            John Smith
                                            <i className="bi bi-quote bi-quote-2 text-p"></i>
                                        </div>
                                        <p className="para text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis accusamus </p>
                                        <div className="d-flex justify-content-center">
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                            <i className="bi bi-star-fill text-p"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>



                    </Swiper>



                </div>
            </div>
        </section>
    )
}

export default Testimonial