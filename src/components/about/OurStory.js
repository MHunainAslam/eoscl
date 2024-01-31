import Image from 'next/image'
import React from 'react'

const OurStory = () => {
    return (
        <section>
            <div className="container pt-4">
                <p className='para d-inline-block'>

                    <img src={'/assets/images/banner/banner.png'} alt="" style={{height: '300px !important'}} className='mb-3 w-50 object-fit-contain float-start' width={400} height={400}></img>
                    <br /><br />
                    {/* <span className='heading '>Our Story</span> <br /><br /> */}
                    Welcome to the Event Ontario business club program! This program is a fantastic opportunity for entrepreneurs and professionals to take advantage of discounts and incentives offered by EOSCL sponsors. As a business member, you can benefit from these special offers and connect with other EOSCL players. We are proud to offer this program and support the success of our members. <br /><br />
                    Event Ontario brings the benefits of closer connections to groups and individuals by bringing event sponsors together and providing quarterly meet-ups, creating valuable networking opportunities.

                </p>
            </div>
        </section>
    )
}

export default OurStory