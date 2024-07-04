import React from 'react'
import Title from '../components/ui/Title'
import hero from "../../public/assets/about.jpg"
import Image from 'next/image'

const About = () => {
    return (
        <section className='container pb-20 pt-10'>
            <Title className="my-5 md:my-0">
                About Us
            </Title>
            <div className="flex items-center justify-between flex-col lg:flex-row">
                <figure className="lg:w-[45%]">
                    <Image
                        alt="Hero Section SVG"
                        src={hero}
                        width={1200}
                        height={1200}
                    />
                </figure>
                <div className="lg:w-[55%]">
                    <h1 className="title text-yellowLight">Byte Basha</h1>
                    <p className="py-6">
                        At ByteBasha, we pride ourselves on being leaders in the digital landscape, providing cutting-edge software services, comprehensive e-commerce solutions, and top-tier tech skill training. Our name, ByteBasha, combines the digital essence of "Byte" with "Basha," a title of respect, reflecting our commitment to excellence and authority in the tech industry
                    </p>
                    <button className="btn-yellow shadow-xl">Learn more</button>
                </div>
            </div>
        </section>
    )
}

export default About