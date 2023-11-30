import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <>
            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-5 my-auto about-img">
                            <Image src={'/assets/images/user/Group 1412.png'} alt="" width={500} height={500}></Image>
                        </div>
                        <div className="col-md-7 my-auto">
                            <p className="heading">About Us </p>
                            <p className="para">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus deleniti nisi eligendi, omnis et eveniet eum! Distinctio, laborum. Eos ipsa nesciunt ipsam nobis alias sed odio iusto vitae officia, nemo laudantium, animi provident nihil optio ex enim dicta hic? Sequi beatae ut assumenda, dicta animi autem quos in quam ullam, minus obcaecati esse ratione eligendi numquam illo sint perspiciatis unde earum maiores vel eius dolorum dolore id? Similique, quidem accusantium. Dolorem culpa neque vitae corrupti quam tempora, corporis, eaque omnis consectetur nam quibusdam consequuntur impedit. Sint, pariatur quidem? Nesciunt minus reprehenderit hic, fuga molestiae perspiciatis voluptatem sint aliquid deleniti illum aliquam dolorem laboriosam ut nobis delectus, eius voluptatibus. <br /><br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quibusdam recusandae, reiciendis ullam dolores pariatur atque cumque placeat fuga voluptates fugit facere natus quasi distinctio eos libero! Praesentium, quasi temporibus!
                            </p>
                            <Link href="/about" className='btn primary-btn mt-3'>Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About