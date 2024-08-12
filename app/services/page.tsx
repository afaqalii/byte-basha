import { servicesTabsArray } from "@/utils/constants"
import Title from "../components/ui/Title"
import ContactUs from "../components/layout/ContactUs"
import ServicesCarousel from "./ServicesCarousel"
import AnotherServiceCard from "./AnotherServiceCard"
import FlexContainer from "../components/layout/FlexContainer"

// images
import webdev from "@/public/assets/webdev.jpg"
import ai from "@/public/assets/ai.jpg"
import wp from "@/public/assets/wp.jpg"
import appdev from "@/public/assets/appdev.jpg"
import dm from "@/public/assets/dm.jpg"
import ecommerce from "@/public/assets/ecommerce.jpg"

// /service route page
const Services = () => {
    return (
        <div className='container my-10'>
            <Title className="mb-10">Services We Offer</Title>
            <FlexContainer
                imageSrc={webdev}
                imageAlt="Hero Section SVG"
                imageWidth={1200}
                imageHeight={1200}
                titleColor="text-black"
                title="Web Development"
                description="We provide comprehensive web development services, including front-end and back-end development, to create robust and scalable web applications."
            />
            <FlexContainer
                imageSrc={ecommerce}
                imageAlt="Hero Section SVG"
                imageWidth={1200}
                imageHeight={1200}
                titleColor="text-black"
                title="E-commerce Website"
                description="At Byte Basha, we specialize in delivering comprehensive e-commerce solutions tailored to your business needs. Whether you're looking to launch a Shopify store or create a custom WordPress e-commerce site, our expert team is here to help you build, manage, and grow your online presence with ease and efficiency."
                reverse={true}
            />
            <FlexContainer
                imageSrc={ai}
                imageAlt="Hero Section SVG"
                imageWidth={1200}
                imageHeight={1200}
                titleColor="text-black"
                title="Artificial Intelligence"
                description="Our AI services include machine learning, natural language processing, and data analysis to help you leverage the power of artificial intelligence in your business."
            />
            <FlexContainer
                imageSrc={wp}
                imageAlt="Hero Section SVG"
                imageWidth={1200}
                imageHeight={1200}
                titleColor="text-black"
                title="WordPress Development"
                description="We offer custom WordPress development services to create dynamic and responsive websites tailored to your specific requirements."
                reverse={true}
            />
            <FlexContainer
                imageSrc={appdev}
                imageAlt="Hero Section SVG"
                imageWidth={1200}
                imageHeight={1200}
                title="App Development"
                titleColor="text-black"
                description="Our app development services cover both iOS and Android platforms, delivering high-quality mobile applications to enhance user engagement."
            />
            <FlexContainer
                imageSrc={dm}
                imageAlt="Hero Section SVG"
                imageWidth={1200}
                imageHeight={1200}
                title="Digital Marketing"
                titleColor="text-black"
                description="We provide digital marketing services to boost your online presence, including SEO, social media marketing, and content creation."
                reverse={true}
            />
            {/* <div className="my-10">
                {
                    servicesTabsArray[0].services.map((service, index) => (
                        <AnotherServiceCard
                            isReversed={index % 2 !== 0}
                            key={index}
                            title={service.title}
                            text={service.text}
                            svg={service.svg}
                        />
                    ))
                }
                {servicesTabsArray.map((service) => (
                    <ServicesCarousel
                        key={service.text}
                        title={service.title}
                        services={service.services}
                        href={service.href}
                    />
                ))}
            </div> */}
            <ContactUs title="Get in Touch!" context="Brand" />
        </div>

    )
}

export default Services