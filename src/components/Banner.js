import React from 'react'
import Header from './layout/Header'

const Banner = ({ heading }) => {
    return (
        <>
            <section className='banner'>
                <Header />
                <div className="container ">
                    <div className="d-flex justify-content-center align-items-center min-vh-30">
                        <p className="heading">{heading}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner