import Image from 'next/image'
import React from 'react'

const MembershipBanner = () => {
    return (
        <section className='MembershipBanner mt-5'>
            <div className="container py-5 ">
                <div className="row py-5">
                    <div className="col-lg-5 col-md-6">
                        <p className="heading  text-white mb-1">
                            Unlock A World Of
                            Benefits With Your
                            Membership Card
                        </p>
                        <p className="para text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat architecto cumque maiores esse expedita aperiam corrupti
                        </p>
                        <button className='btn primary-btn'>Get Your Card</button>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-md-0 mt-4">
                        <Image src={'/assets/images/card/Image 18.png'} className='w-100 object-fit-contain h-100' width={1000} height={1000} alt=''></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MembershipBanner