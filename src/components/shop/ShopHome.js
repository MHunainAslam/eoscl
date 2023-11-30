import React from 'react'
import ShopProductCard from './ShopProductCard'
import Image from 'next/image'

const ShopHome = () => {
    return (
        <>
            <section className='my-5 bg-light'>
                <div className="container">
                    <p className="heading text-center">
                        Our Shop
                    </p>
                    <p className="para text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi, soluta, architecto quo quaerat esse corporis quam blanditiis pariatur nulla tempora? Hic labore assumenda fugiat cumque ratione. Laudantium, nesciunt odio!</p>
                    <div className="row my-5">
                        <div className="col-lg-4 col-md-6 mt-3">
                            <div className="card c-card shop-card position-relative">
                                <div className="card-body h-100">
                                    <Image src={'/assets/images/product/Path 4.png'} className='object-fit-contain w-100 h-100' alt='' width={500} height={500}></Image>
                                </div>
                                <button className='shop-btn primary-btn btn'><i class="bi bi-cart-fill"></i></button>
                            </div>
                            <p className="heading-sm mb-0 mt-3 text-s">
                                ELEGANT STONE BRACELET
                            </p>
                            <p className="heading-sm">
                                $16.99
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopHome