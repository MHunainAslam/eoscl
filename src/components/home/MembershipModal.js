'use client'

import React, { useState } from 'react'

const MembershipModal = () => {
    const [activeComponent, setActiveComponent] = useState('step1');
    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };
    const MoveStep1 = () => {
        handleComponentChange('step1')
    }
    const MoveStep2 = () => {
        handleComponentChange('step2')
    }
    const MoveStep3 = () => {
        handleComponentChange('step3')
    }
    const formSubmit = () => {
        document.querySelector('.modal-close').click()
    }
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
                                            <label htmlFor="" className='para'>Name:</label>
                                            <input type="text" className='form-control inp' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para'>Email:</label>
                                            <input type="text" className='form-control inp' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para'>Phone Number:</label>
                                            <input type="text" className='form-control inp' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para'>Message:</label>
                                            <textarea name="" className='form-control tarea' id="" cols="30" rows="5"></textarea>
                                        </div>
                                        <div class="modal-footer mt-4 border-0 justify-content-center">
                                            <button type="button" class="btn primary-btn" onClick={MoveStep2}>Save changes</button>
                                        </div>
                                    </>
                                    }
                                    {activeComponent === 'step2' && <>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para'>Package Name:</label>
                                            <input type="text" className='form-control inp' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para'>Package Price:</label>
                                            <input type="text" className='form-control inp' name="" id="" />
                                        </div>
                                        <div class="modal-footer mt-4 border-0 justify-content-center">
                                            <button type="button" class="btn primary-btn-border" onClick={MoveStep1} >Previous</button>
                                            <button type="button" class="btn primary-btn" onClick={MoveStep3}>Save changes</button>
                                        </div>
                                    </>
                                    }
                                    {activeComponent === 'step3' && <>
                                        <div className="col-md-6 mt-2">
                                            <button className='btn primary-btn w-100'>Paypal</button>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <button className='btn primary-btn w-100'>Stripe</button>
                                        </div>

                                        <div class="modal-footer mt-4 border-0 justify-content-center">
                                            <button type="button" class="btn primary-btn-border" onClick={MoveStep1} >Previous</button>
                                            <button type="button" class="btn primary-btn" onClick={formSubmit}>Save changes</button>
                                        </div>
                                    </>
                                    }
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