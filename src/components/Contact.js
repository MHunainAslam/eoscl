'use client'
import { app_url } from '@/config'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Message, setMessage] = useState('')
    const [Type, setType] = useState('contact')
    const [isLoading, setisLoading] = useState(false)
    const sendcontact = (e) => {
        e.preventDefault()
        if (Name === '' || Email === '' || Phone === '' || Message === '') {
            toast.error('All Fields Are Required')
        } else {
            setisLoading(true)
            axios.post(`${app_url}/api/membership-requests`, { name: Name, email: Email, phone_number: Phone, message: Message, type: Type }, {
                headers: {
                    'Content-Type': 'application/json', // Specify the content type if needed.
                }
            })
                .then(response => {
                    // Handle successful response here
                    toast.success(response?.data?.message)
                    setisLoading(false)
                    setName('')
                    setEmail('')
                    setPhone('')
                    setMessage('')
                })
                .catch(error => {
                    // Handle error here
                    console.error(error);
                    setisLoading(false)
                    toast.error(error?.response?.data?.message)
                });
        }
    }
    return (
        <section className='contact py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <p className="heading text-center text-white">Contact Us </p>
                                {/* <p className='para text-center text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, magnam impedit doloremque nisi placeat quis accusamus illum sint eaque obcaecati blanditiis aspernatur velit eos. Eveniet doloremque culpa doloribus deserunt assumenda!</p> */}
                            </div>
                            <div className="card-body ">
                                <div className="row py-1">
                                    <div className="col-lg-7 col-md-6">
                                        <form action="" onSubmit={sendcontact}>
                                            <label htmlFor="" className='para text-p mt-4'>Name</label>
                                            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='form-control inp mt-2' name="" id="" />
                                            <label htmlFor="" className='para text-p mt-4'>Email Address</label>
                                            <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className='form-control inp mt-2' name="" id="" />
                                            <label htmlFor="" className='para text-p mt-4'>Phone Number</label>
                                            <input type="text" onKeyPress={(e) => !/[+0-9]/.test(e.key) && e.preventDefault()} value={Phone} onChange={(e) => setPhone(e.target.value)} className='form-control inp mt-2' name="" id="" />
                                            <label htmlFor="" className='para text-p mt-4'>Message</label>
                                            <textarea rows={3} type="text" value={Message} onChange={(e) => setMessage(e.target.value)} className='form-control tarea mt-2' name="" id="" />

                                            <button type='submit' className='mt-4 btn primary-btn'>Submit {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                                        </form>
                                    </div>
                                    <div className="col-lg-5 col-md-6 mt-md-0 mt-4">
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