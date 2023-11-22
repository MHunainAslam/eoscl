import Image from 'next/image'
import React from 'react'

const MemberShip = () => {
    return (
        <>
            <section className='membership mt-5'>
                <div className="container text-center">
                    <p className='heading'>The Membership Card Option</p>
                    <p className='para-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
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
                                    <button className='btn primary-btn m-card-btn'>Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card m-card ">
                                <div className="card-body pb-5 text-center">
                                    <Image src={'/assets/images/card/Image 5.png'} className='m-card-img' alt="" width={500} height={500}></Image>
                                    <p className="heading-m w-fit-content mt-3 mx-auto">Beginner
                                        <br /> <span className='heading-line'></span>
                                    </p>
                                    <p className="heading-sm text-p">$200,000</p>
                                    <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit repudiandae maxime quaerat est id laudantium minus quibusdam architecto molestias culpa.!</p>
                                    <button className='btn primary-btn m-card-btn'>Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card m-card ">
                                <div className="card-body pb-5 text-center">
                                    <Image src={'/assets/images/card/Image 5.png'} className='m-card-img' alt="" width={500} height={500}></Image>
                                    <p className="heading-m w-fit-content mt-3 mx-auto">Beginner
                                        <br /> <span className='heading-line'></span>
                                    </p>
                                    <p className="heading-sm text-p">$200,000</p>
                                    <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit repudiandae maxime quaerat est id laudantium minus quibusdam architecto molestias culpa.!</p>
                                    <button className='btn primary-btn m-card-btn'>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MemberShip