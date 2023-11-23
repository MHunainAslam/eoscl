import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoyalCustomer = () => {
    return (
        <>
            <section>
                <div className="container py-3 my-5">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="heading">
                                Become Our Loyal
                                Customer, Reach
                                Our Team Right Now
                            </p>
                            <p className="para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio explicabo omnis maiores maxime quam veritatis, minima odio. Ullam adipisci, sunt fuga quia ducimus est odio. Temporibus facere repudiandae ducimus? Quam minus dolorum odio cumque aperiam! Consectetur impedit repellendus labore, earum quasi consequatur expedita voluptatibus inventore ex cupiditate quibusdam eum. Sint sed dolore sit odio 
                            </p>
                            <Link href={'/contactus'} className='btn primary-btn'>Contact Us</Link>
                        </div>
                        <div className="col-md-6 my-auto">
                            <Image src={'/assets/images/card/Rectangle 84.png'} className='w-100 object-fit-cover h-auto' width={1000} height={1000} alt=''></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoyalCustomer