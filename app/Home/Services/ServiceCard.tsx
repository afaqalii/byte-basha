import { ServiceCardProps } from "@/utils/types"
import Image from "next/image"

const ServiceCard = ({ title, text, svg }: ServiceCardProps) => {
    return (
        <div className='min-w-96 max-w-96 min-h-72 flex flex-col gap-2 w-full shadow-xl p-4 rounded'>
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
            <button className='btn-yellow mt-4'>learn more</button>
        </div>
    )
}

export default ServiceCard