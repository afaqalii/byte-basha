import { ServiceContainerProps } from "@/utils/types"
import ServiceCard from "./ServiceCard"

const ServiceContainer = ({ title, text, services }: ServiceContainerProps) => {
    return (
        <div className="border-2 border-yellowLight p-2">
            <h1>{title}</h1>
            <p>{text}</p>
            <div className="flex overflow-x-auto">
                {services.map((service) => (
                    <ServiceCard
                        title={service.title}
                        text={service.text}
                        svg={service.svg}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServiceContainer