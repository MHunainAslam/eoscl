'use client'
import { app_url } from '@/config';
import { imgurl } from '@/utils/Token';
import axios from 'axios';
import Image from 'next/image'
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const NaanGuys = ({ tabdata }) => {

    const [partnertabdata, setpartnertabdata] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const { slug } = useParams()
    useEffect(() => {
        axios.get(`${app_url}/api/partner-details/${slug}/parent?status=active`, {
        })
            .then(response => {
                // Handle successful response here
                setisLoading(false)
                setpartnertabdata(response.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error, 'lo');
                toast.error(error?.response?.data?.error)
                setisLoading(false)
            });
    }, [])
    const searchParams = useSearchParams()

    const logo = JSON.parse(searchParams.get('state'))
    


    return (

        <>

            {/* {parsedState && <p>{parsedState}ddd</p>} */}
            
            <section className='py-4'>
                <div className="container">
                    <div className="row">
                        {partnertabdata?.data?.length === 0 ?
                            <p className="heading-sm text-center">No Discount Found!</p>
                            :
                            <>
                                {partnertabdata?.data?.map((item, i) => (
                                    <div className=" col-lg-4 col-md-6 mt-3 " key={i}>
                                        <div className="card vendor-card h-100">
                                            <div className="card-header">
                                                {logo === null ?
                                                    <img src={'/assets/images/download.png'} className='pt-2' width={1000} height={1000} alt=''></img> :
                                                    <Image loader={imgurl} src={logo?.url} className='pt-2' width={1000} height={1000} alt=''></Image>
                                                }
                                                <div className="discount p-3">
                                                    <div className="heading-m text-white text-center">{item.discount}</div>
                                                    <div className="heading-m text-white text-center">% Off</div>

                                                </div>

                                            </div>
                                            <div className="card-body">
                                                <p className="para">{item.description} </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default NaanGuys