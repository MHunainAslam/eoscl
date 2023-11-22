import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <section className='contact mt-5 py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <p className="heading text-center text-white">Contact Us </p>
                                <p className='para text-center text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, magnam impedit doloremque nisi placeat quis accusamus illum sint eaque obcaecati blanditiis aspernatur velit eos. Eveniet doloremque culpa doloribus deserunt assumenda!</p>
                            </div>
                            <div className="card-body py-5">
                                <div className="row py-3">
                                    <div className="col-lg-7 col-md-6">
                                        <form action="">
                                            <label htmlFor="" className='para text-p mt-5'>Name</label>
                                            <input type="text" className='form-control inp mt-2' name="" id="" />
                                            <label htmlFor="" className='para text-p mt-5'>Email Address</label>
                                            <input type="text" className='form-control inp mt-2' name="" id="" />
                                            <label htmlFor="" className='para text-p mt-5'>Phone Number</label>
                                            <input type="text" className='form-control inp mt-2' name="" id="" />
                                            <label htmlFor="" className='para text-p mt-5'>Message</label>
                                            <textarea rows={4} type="text" className='form-control tarea mt-2' name="" id="" />

                                            <button className='mt-4 btn primary-btn'>Submit</button>
                                        </form>
                                    </div>
                                    <div className="col-lg-5 col-md-6 mt-md-0 mt-5">
                                        <Image src={'/assets/images/card/Group 1412.png'} className='w-100 h-100 object-fit-contain' alt="" width={500} height={500}></Image>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact