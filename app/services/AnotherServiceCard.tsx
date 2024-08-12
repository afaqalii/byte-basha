import { ServiceCardProps } from "@/utils/types";
import Image from "next/image";

const AnotherServiceCard = ({ title, text, svg, isReversed }: ServiceCardProps & { isReversed: boolean }) => {
    return (
        <div className={`service-card flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} gap-4 shadow-xl p-6 rounded cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out`}>
            <div>
                <figure className="md:w-1/2 w-full flex items-center justify-center">
                    <Image
                        src={svg}
                        width={200}
                        height={150}
                        alt={text}
                        className="rounded"
                    />
                </figure>
                <h1 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h1>
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center">
                {/* <h1 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h1> */}
                <p className="text-lg text-gray-600">{text}</p>
            </div>
        </div>
    );
};

export default AnotherServiceCard;
