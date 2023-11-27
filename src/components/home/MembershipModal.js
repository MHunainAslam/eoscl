import React from 'react'

const MembershipModal = () => {
    return (
        <>

            <div class="modal fade" id="VendorModal" tabindex="-1" aria-labelledby="VendorModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content m-modal py-5">
                      
                        <div class="modal-body ">
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6 mt-2">
                                        <label htmlFor="" className='para'>Name:</label>
                                        <input type="text" className='form-control inp' name="" id="" />
                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <label htmlFor="" className='para'>Email:</label>
                                        <input type="text" className='form-control inp' name="" id="" />
                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <label htmlFor="" className='para'>Phone Number:</label>
                                        <input type="text" className='form-control inp' name="" id="" />
                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <label htmlFor="" className='para'>Package Name:</label>
                                        <input type="text" className='form-control inp' name="" id="" />
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <label htmlFor="" className='para'>Message:</label>
                                        <textarea name="" className='form-control tarea' id="" cols="30" rows="5"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer border-0 justify-content-center">
                            <button type="button" class="btn primary-btn-border" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn primary-btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MembershipModal