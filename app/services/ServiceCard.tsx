import { ServiceCardProps } from "@/utils/types"
import Image from "next/image"

const ServiceCard = ({ title, text, svg }: ServiceCardProps) => {
    return (
        <div className='service-card min-w-full min-[480px]:min-w-96 flex flex-col gap-2 shadow-xl p-4 pb-10 rounded cursor-pointer'>
            <figure>
                <Image
                    src={svg}
                    width={200}
                    height={150}
                    alt={text}
                />
            </figure>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default ServiceCard