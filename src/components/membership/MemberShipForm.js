import React from 'react'

const MemberShipForm = () => {
    return (
        <>


            <div class="modal fade" id="MembershipForm" tabindex="-1" aria-labelledby="MembershipFormLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content m-modal">
                        <div class="modal-header border-0">
                     
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="">
                            <p className="heading-m text-center text-p">
                                Membership
                            </p>

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
                                <button type="button" class="btn primary-btn">Submit</button>
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