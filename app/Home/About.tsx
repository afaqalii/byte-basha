'use client'
import Title from '../components/ui/Title'
import hero from "../../public/assets/about.jpg"
import FlexContainer from '../components/layout/FlexContainer'

const About = () => {
    const handleButtonClick = () => {
        console.log("about us triggered")
    }
    return (
        <section className='container pb-20 pt-10'>
            <Title className="my-5 md:my-0">
                About Us
            </Title>
            <FlexContainer
                imageSrc={hero}
                imageAlt="Hero Section SVG"
                imageWidth={1200}
                imageHeight={1200}
                title="Byte Basha"
                description="At ByteBasha, we pride ourselves on being leaders in the digital landscape, providing cutting-edge software services, comprehensive e-commerce solutions, and top-tier tech skill training. Our name, ByteBasha, combines the digital essence of Byte with Basha, a title of respect, reflecting our commitment to excellence and authority in the tech industry."
                buttonText="Learn more"
                onButtonClick={handleButtonClick}
            />
        </section>
    )
}

export default About