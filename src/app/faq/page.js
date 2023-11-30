import Banner from '@/components/Banner'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner heading={"FAQ's"} />
            <section>
                <div className="container py-5 faqs">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed heading-sm" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            FAQ #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body"><p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestiae fugiat delectus perspiciatis, culpa, aliquam eius nesciunt necessitatibus exercitationem esse provident quas amet iste explicabo dolores dolorum quis quidem reiciendis?</p></div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed heading-sm" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            FAQ #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body"><p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestiae fugiat delectus perspiciatis, culpa, aliquam eius nesciunt necessitatibus exercitationem esse provident quas amet iste explicabo dolores dolorum quis quidem reiciendis?</p></div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed heading-sm" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            FAQ #3
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body"><p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestiae fugiat delectus perspiciatis, culpa, aliquam eius nesciunt necessitatibus exercitationem esse provident quas amet iste explicabo dolores dolorum quis quidem reiciendis?</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page