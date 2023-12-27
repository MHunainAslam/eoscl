import Image from 'next/image'
import React from 'react'
import MemberShipForm from './membership/MemberShipForm'

const MembershipBanner = ({ reverse }) => {
    return (
        <section className='MembershipBanner mt-4'>
            <div className="container ">
                <div className={`row py-5 ${reverse ? 'flex-row-reverse' : ''}`}>
                    <div className="col-lg-5 col-md-6">
                        <p className="heading  text-white mb-1">
                            The Business Card and How It Works ?
                        </p>
                        <p className="para text-white">
                            A plastic card with networking perks is an intelligent investment, and It's a must-have for entrepreneurs and
                            consultants, with annual benefits and no extra cost for EOSCL sponsors. <br /> <br />Please keep it in your wallet for easy access to valuable resources. The program is for EOSCL Season 8 sponsors; for non-sponsors, there will be a yearly nominal fee to participate.
                            Members (whether businesses or players) must show their EOSCL card to the participating business when purchasing.<br /><br /> The company will offer a discount once the membership and/or card validity is verified. As part of their promotions/campaigns, businesses may also provide vouchers to members, which can be used like the
                            membership card to claim membership incentives.

                        </p>
                        {/* <button className='btn primary-btn' >Get Your Card</button> */}
                        <button className='btn primary-btn' data-bs-toggle="modal" data-bs-target="#MembershipForm">Get Your Card</button>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-md-0 mt-4">
                        <Image src={'/assets/images/card/Image 18.png'} className='w-100 object-fit-contain h-100' width={1000} height={1000} alt=''></Image>
                    </div>
                </div>
            </div>
            <MemberShipForm />
        </section>
    )
}

export default MembershipBanner