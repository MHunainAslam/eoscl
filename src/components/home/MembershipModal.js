'use client'

import React, { useEffect, useState } from 'react'
import PyamentModal from '../membership/PyamentModal';
import StripeModal from '../membership/StripeModal';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const MembershipModal = ({ PkgName, PkgPrice }) => {
    const [activeComponent, setActiveComponent] = useState('step1');
    const [completedSteps, setCompletedSteps] = useState([]);
    const [PaymentMethod, setPaymentMethod] = useState('')
    const [step1, setstep1] = useState(false)
    const [step2, setstep2] = useState(false)
    const [step3, setstep3] = useState(false)
    const [step4, setstep4] = useState(false)
    const [PayPal, setPayPal] = useState(false)

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
        if (!completedSteps.includes(componentName)) {
            setCompletedSteps([...completedSteps, componentName]);
        }
    };

    const MoveStep1 = () => {
        handleComponentChange('step1');
    };

    const MoveStep2 = () => {
        handleComponentChange('step2');
    };

    const MoveStep3 = () => {
        handleComponentChange('step3');
    };
    const MoveStep4 = () => {
        handleComponentChange('step4');
        setPaymentMethod('paypal')
    };
    const MoveStep5 = () => {
        handleComponentChange('step4');
        setPaymentMethod('stripe')
    };
    useEffect(() => {
        if (activeComponent === 'step1') {
            setstep1(false)
            setstep2(false)
            setstep3(false)
        }
        if (activeComponent === 'step2') {
            setstep1(true)
            setstep2(false)
            setstep3(false)
        }
        if (activeComponent === 'step3') {
            setstep2(true)
            setstep3(false)
        }
        if (activeComponent === 'step4') {
            setstep3(true)
        }
    }, [activeComponent])
    
    const formSubmit = () => {
        document.querySelector('.modal-close').click();
    };
    const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');
    return (
        <>

            <div class="modal fade" id="VendorModal" tabindex="-1" aria-labelledby="VendorModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                    <div class="modal-content m-modal ">
                        <div className="modal-header border-0">
                            <button type="button" class="btn-close modal-close" data-bs-dismiss="modal" aria-label="Close" onClick={MoveStep1}></button>
                        </div>
                        <div class="modal-body pb-4">
                            <form action="">
                                <div className="row">
                                    <p className="heading-m text-center text-p">
                                        Membership
                                    </p>
                                    {activeComponent === 'step1' && <>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Name:</label>
                                            <input type="text" className='form-control inp px-0' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Email:</label>
                                            <input type="text" className='form-control inp px-0' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Phone Number:</label>
                                            <input type="text" className='form-control inp px-0' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Message:</label>
                                            <textarea name="" className='form-control tarea px-0' id="" cols="30" rows="5"></textarea>
                                        </div>
                                        <div class="modal-footer mt-4 border-0 justify-content-end">
                                            <button type="button" class="btn primary-btn" onClick={MoveStep2}>Next</button>
                                        </div>
                                    </>
                                    }
                                    {activeComponent === 'step2' && <>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Package Name:</label>
                                            <input type="text" className='form-control inp px-0' value={PkgName} readOnly name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Package Price:</label>
                                            <input type="text" className='form-control inp px-0' value={PkgPrice} readOnly name="" id="" />
                                        </div>
                                        <div class="modal-footer mt-4 border-0 justify-content-end">
                                            <button type="button" class="btn primary-btn" onClick={MoveStep1} >Previous</button>
                                            <button type="button" class="btn primary-btn" onClick={MoveStep3}>Next</button>
                                        </div>
                                    </>
                                    }
                                    {activeComponent === 'step3' && <>
                                        <div className="col-md-6 mt-2">
                                            <button className='btn primary-btn w-100' onClick={MoveStep4}>Paypal</button>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <button className='btn primary-btn w-100' onClick={MoveStep5}>Stripe</button>
                                        </div>

                                        <div class="modal-footer mt-4 border-0 justify-content-end">
                                            <button type="button" class="btn primary-btn" onClick={MoveStep2} >Previous</button>
                                            {/* <button type="button" class="btn primary-btn" onClick={formSubmit}>Next</button> */}
                                        </div>
                                    </>
                                    }
                                    {activeComponent === 'step4' && <>
                                        {PaymentMethod === 'paypal' ?
                                            <PyamentModal />
                                            : 'stripe' ?
                                                <Elements stripe={stripePromise}>
                                                    <StripeModal />
                                                </Elements>
                                                : ''}
                                        <div class="modal-footer mt-4 border-0 justify-content-end">
                                            <button type="button" class="btn primary-btn" onClick={MoveStep3} >Previous</button>
                                            {/* <button type="button" class="btn primary-btn" onClick={formSubmit}>Next</button> */}
                                        </div>
                                    </>
                                    }
                                    <div className="d-flex justify-content-center">
                                        <div className={`steps ${step1 ? 'complete' : ''}`}></div>
                                        <div className={`steps ${step2 ? 'complete' : ''}`}></div>
                                        <div className={`steps ${step3 ? 'complete' : ''}`}></div>
                                        <div className={`steps ${step4 ? 'complete' : ''}`}></div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default MembershipModal