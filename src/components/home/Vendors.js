import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Vendors = () => {
    return (
        <>
            <section className='vendors position-relative overflow-x-hidden py-5'>
                <Image src={'/assets/images/card/Ellipse 4.png'} className='vendors-bg' width={100} height={100} alt=''></Image>
                <div className="container mt-5">
                    <p className="heading text-center">
                        Partners
                    </p>
                    <p className="para text-center px-md-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea magni, fuga impedit rerum, ratione quae fugiat expedita beatae incidunt commodi praesentium. Sit tempora error neque unde aperiam quam cum consequatur!</p>
                    <div className="row mt-5 vendors-card">
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 12.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 14.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 16.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 18.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 20.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 23.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 24.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 26.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 28.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 31.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 32.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className="card h-100">
                                <div className="card-body px-2 py-1">
                                    <Image src={'/assets/images/vendors/Rectangle 34.png'} className='w-100 object-fit-contain' width={300} height={120} alt=''></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 text-center'>
                        <Link href={'/partners'} className='btn primary-btn '>View All</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Vendors