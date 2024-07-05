import Title from '@/app/components/ui/Title'
import { servicesTabsArray } from '@/utils/constants'
import ServiceContainer from './ServiceContainer'
import "./services.css"

const Services = () => {
    return (
        <div className='container my-10'>
            <Title>Our Services</Title>
            <div>
                {servicesTabsArray.map((service) => (
                    <ServiceContainer
                        title={service.title}
                        text={service.text}
                        services={service.services}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services