import Image from 'next/image'
import React from 'react'

const ShopProductCard = () => {
    return (
        <>
            <div className="card c-card shop-card position-relative">
                <div className="card-body h-100">
                    <Image src={'/assets/images/product/Path 4.png'} className='object-fit-contain w-100 h-100' alt='' width={500} height={500}></Image>
                </div>
                <button className='shop-btn primary-btn btn'><i className="bi bi-cart-fill"></i></button>
            </div>
            <p className="heading-sm mb-0 mt-3 text-s">
                ELEGANT STONE BRACELET
            </p>
            <p className="heading-sm">
                $16.99
            </p>
        </>
    )
}

export default ShopProductCard