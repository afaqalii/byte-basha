import { servicesData } from "@/utils/constants"
import Title from "../components/ui/Title"
import ContactUs from "../components/layout/ContactUs"
import FlexContainer from "../components/layout/FlexContainer"



// /service route page
const Services = () => {
    return (
        <div className='container my-10'>
            <Title className="mb-10">Services We Offer</Title>
            {servicesData.map((service, index) => (
                <FlexContainer
                    id={service.id}
                    key={index}
                    imageSrc={service.imageSrc}
                    imageAlt={service.imageAlt}
                    imageWidth={service.imageWidth}
                    imageHeight={service.imageHeight}
                    title={service.title}
                    description={service.description}
                    reverse={service.reverse}
                />
            ))}
            <ContactUs title="Get in Touch!" context="Brand" />
        </div>
    );
}

export default Services