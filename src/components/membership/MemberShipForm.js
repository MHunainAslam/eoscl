'use client'
import { app_url } from '@/config'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const MemberShipForm = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [membership_crad, setmembership_crad] = useState('')
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [Message, setMessage] = useState('')
    const [Type, setType] = useState('membership')
    const sendmembershipreq = (e) => {
        e.preventDefault()
        if (Name === '' || Email === '' || Phone === '' || Message === '', membership_crad === '') {
            toast.error('All Fields Are Required')
        } else {
            setisLoading(true)
            axios.post(`${app_url}/api/membership-requests`, { name: Name, email: Email, phone_number: Phone, message: Message, type: Type, membership_id: Number(membership_crad) }, {
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
    useEffect(() => {
        axios.get(`${app_url}/api/memberships?status=active`, {
        })
            .then(response => {
                // Handle successful response here
              
                setisLoading(false)
                setdata(response.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [])
    return (
        <>


            <div className="modal fade" id="MembershipForm" tabIndex="-1" aria-labelledby="MembershipFormLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content m-modal">
                        <div className="modal-header border-0">

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" onSubmit={sendmembershipreq}>
                                <p className="heading-m text-center text-p">
                                    Membership Form
                                </p>

                                <div className="col-md-12 mt-2">
                                    <label htmlFor="" className='para mt-3 text-p'>Name:</label>
                                    <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='form-control inp px-0' name="" id="" />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label htmlFor="" className='para mt-3 text-p'>Email:</label>
                                    <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className='form-control inp px-0' name="" id="" />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label htmlFor="" className='para mt-3 text-p'>Select Card:</label>
                                    <select name="" className='form-select inp bg-transparent' id="" value={membership_crad} onChange={(e) => setmembership_crad(e.target.value)}>
                                        <option value=''>Select Card</option>
                                        {data?.data?.map((item, i) => (
                                            
                                                <option value={item.id} key={i}>{item.title}</option>
                                        
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label htmlFor="" className='para mt-3 text-p'>Phone Number:</label>
                                    <input type="text" onKeyPress={(e) => !/[+0-9]/.test(e.key) && e.preventDefault()} value={Phone} onChange={(e) => setPhone(e.target.value)} className='form-control inp px-0' name="" id="" />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label htmlFor="" className='para mt-3 text-p'>Message:</label>
                                    <textarea name="" value={Message} onChange={(e) => setMessage(e.target.value)} className='form-control tarea px-0' id="" cols="30" rows="5"></textarea>
                                </div>
                                <div className="modal-footer mt-4 border-0 justify-content-end">
                                    <button type="submit" disabled={isLoading} className="btn primary-btn">Submit {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}

export default MemberShipForm