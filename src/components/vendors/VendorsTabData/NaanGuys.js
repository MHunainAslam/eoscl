import { imgurl } from '@/utils/Token';
import Image from 'next/image'
import React from 'react'

const NaanGuys = ({ tabdata, logo }) => {
    // const matchedItem = logo?.find(item => item.id).id === Number(tabdata?.data?.[0]?.partner_id);
    // console.log(matchedItem)
    console.log(logo, 'lololo');

    return (
        <> <div className="row">
            {tabdata?.data?.length === 0 ?
                <p className="heading-sm text-center">No Discount Found!</p>
                :
                <>
                    {tabdata?.data?.map((item, i) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 mt-3 ">
                            <div className="card vendor-card h-100">
                                {/* <div className="card-header">
                                    {logo.image === null ?
                                        <Image src={'/assets/images/download.png'} className='pt-2' width={1000} height={1000} alt=''></Image> :
                                        <Image loader={imgurl} src={logo?.image?.url} className='pt-2' width={1000} height={1000} alt=''></Image>
                                    }
                                    <div className="discount p-3">
                                        <div className="heading-m text-white text-center">{item.discount}</div>
                                        <div className="heading-m text-white text-center">% Off</div>

                                    </div>
                                </div> */}
                                <div className="card-body">
                                <div className="heading-m text-white back-p text-center">{item.discount} % Off</div>
                                    <p className="para my-3 text-center">{item.description} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            }
        </div></>
    )
}

export default NaanGuys