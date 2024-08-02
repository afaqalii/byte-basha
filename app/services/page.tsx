import { servicesTabsArray } from "@/utils/constants"
import Title from "../components/ui/Title"
import ContactUs from "../components/layout/ContactUs"
import ServicesCarousel from "./ServicesCarousel"

// /service route page
const Services = () => {
    return (
        <div className='container my-10'>
            <Title>Services We Offer</Title>
            <div>
                {servicesTabsArray.map((service) => (
                    <ServicesCarousel
                        key={service.text}
                        title={service.title}
                        services={service.services}
                        href={service.href}
                    />
                ))}
            </div>
            <ContactUs title="Get in Touch!" context="Brand" />
        </div>

    )
}

export default Services