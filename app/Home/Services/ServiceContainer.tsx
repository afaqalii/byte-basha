import { ServicesContainerProps } from "@/utils/types"
import Link from "next/link";

const ServiceContainer = ({ title, services }: ServicesContainerProps) => {
    return (
        <div className="max-w-7xl mx-auto pb-12 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <Link href={service.href} key={index} className="bg-white shadow-xl rounded-lg p-6 border-yellowLight border-2">
                        <div className="flex items-center mb-4">
                            <div className="text-4xl text-orange-500">{<service.icon />}</div>
                            <h2 className="text-xl font-semibold ml-4">{service.title}</h2>
                        </div>
                        <p className="text-gray-700">{service.text}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServiceContainer