import { app_url } from '@/config';
import { imgurl } from '@/utils/Token';
import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import NaanGuys from './NaanGuys';
import Link from 'next/link';

const CategpryTab = ({ tabdata, logo }) => {
   console.log(tabdata);

    return (
        <div>
            <div className=" ">
                {tabdata?.data?.length === 0 ?
                    <p className="heading-sm text-center">No Discount Available In This Category!</p>
                    :
                    <>
                        <ul className="nav row nav-tabs border-0  " role="tablist">
                            {tabdata?.data?.map((item, i) => (

                                // <Link href={`/partner/${item.id}`} className={`col-lg-4 col-md-6 col-12 mx-0 mt-3 nav-item nav-link text-capitalize border-0 activecattab${i} ${i === 0 ? 'active' : ''}`} onClick={(e) => { activepartnertab(item.id), setLogo(item) }} id={item.id} data-bs-toggle="tab" data-bs-target={`#b${item.id}`} type="button" role="tab" aria-controls="NaanGuyss" aria-selected="false" tabIndex="-1">
                                <Link href={{ pathname: `/businessclubpartners/${item.id}`, query: { state: JSON.stringify(item.image) , cat: JSON.stringify(item?.categories?.name) } }} key={i} className={`col-lg-4 col-md-6 col-12 mx-0 mt-3 nav-item nav-link text-capitalize border-0`} >

                                    <div className="card vendor-card h-100">
                                        <div className="card-header justify-content-center">
                                            {item.image === null ?
                                                <img src={'/assets/images/download.png'} className='pt-2' width={1000} height={1000} alt=''></img> :
                                                <Image loader={imgurl} src={item?.image?.url} className='pt-2' width={1000} height={1000} alt=''></Image>
                                            }
                                            {/* <div className="discount p-3">
                                                <div className="heading-m text-white text-center">{item.discount_upto}</div>
                                                <div className="heading-m text-white text-center">% Off </div>

                                            </div> */}
                                        </div>
                                        <div className="card-body text-center">
                                            <p className="heading-sm text-p">{item.company_name} </p>
                                            <p className="para">{item.description} </p>
                                        </div>
                                    </div>
                                </Link>


                            ))}
                        </ul>

                    </>
                }
            </div>

        </div>
    )
}

export default CategpryTab
