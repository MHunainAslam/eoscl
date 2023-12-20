import { app_url } from '@/config';
import { imgurl } from '@/utils/Token';
import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import NaanGuys from './NaanGuys';
import Link from 'next/link';

const CategpryTab = ({ tabdata, logo }) => {
    // const matchedItem = logo?.find(item => item.id).id === Number(tabdata?.data?.[0]?.partner_id);
    // console.log(matchedItem)
    const [partnertabdata, setpartnertabdata] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [Logo, setLogo] = useState(null)
    console.log(tabdata, 'aaas');


    const activepartnertab = (e) => {
        // console.log(e.target.id);
        axios.get(`${app_url}/api/partner-details/${e}/parent?status=active`, {
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data, 'lklk', e);
                setisLoading(false)
                setpartnertabdata(response.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error, 'lo');
                toast.error(error?.response?.data?.error)
                setisLoading(false)
            });
    }
    return (
        <div>
            <div className=" ">
                {tabdata?.data?.length === 0 ?
                    <p className="heading-sm text-center">No Discount Available In This Category!</p>
                    :
                    <>
                        <ul className="nav row nav-tabs border-0  " role="tablist">
                            {tabdata?.data?.map((item, i) => (

                                <li href={'#'} class={`col-lg-4 col-md-6 col-12 mx-0 mt-3 nav-item nav-link text-capitalize border-0 activecattab${i} ${i === 0 ? 'active' : ''}`} onClick={(e) => { activepartnertab(item.id), setLogo(item) }} id={item.id} data-bs-toggle="tab" data-bs-target={`#b${item.id}`} type="button" role="tab" aria-controls="NaanGuyss" aria-selected="false" tabIndex="-1">
                                    <div className="card vendor-card h-100">
                                        <div className="card-header">
                                            {item.image === null ?
                                                <Image src={'/assets/images/download.png'} className='pt-2' width={1000} height={1000} alt=''></Image> :
                                                <Image loader={imgurl} src={item?.image?.url} className='pt-2' width={1000} height={1000} alt=''></Image>
                                            }
                                            <div className="discount p-3">
                                                <div className="heading-m text-white text-center">{item.discount_upto}</div>
                                                <div className="heading-m text-white text-center">% Off </div>

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="para">{item.description} </p>
                                        </div>
                                    </div>
                                </li>


                            ))}
                        </ul>

                    </>
                }
            </div>
            <div className="tab-content ">
                {partnertabdata?.data?.length === 0 ?
                    <p className="heading-sm text-center">No Discount Found!</p>
                    :
                    <>
                        {partnertabdata?.data?.map((item, i) => (
                            <div class={`tab-pane fade ${i === 0 ? 'show active' : ''}`} id={`b${item.id}`} role="tabpanel" aria-labelledby={i}>
                                <NaanGuys tabdata={partnertabdata} logo={Logo} />
                            </div>
                        ))}
                    </>}
            </div>
            {/* <li class={`nav-item nav-link text-capitalize activetab${i} ${i === 0 ? 'active' : ''}`} ></li> */}
            {/* <ul className="nav vendors-tab nav-tabs border-0 justify-content-center " role="tablist">
                <li class={`nav-item nav-link text-capitalize `} data-bs-toggle="tab" data-bs-target={`#b1`} type="button" role="tab" aria-controls="NaanGuys" aria-selected="false" tabIndex="-1">sss</li>
            </ul>
            <div className="tab-content ">
                <div class={`tab-pane fade`} id={`b1`} role="tabpanel" aria-labelledby='1'>

                    ff
                </div>

            </div> */}

        </div>
    )
}

export default CategpryTab
