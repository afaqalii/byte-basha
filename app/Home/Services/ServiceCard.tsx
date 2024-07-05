import { ServiceCardProps } from "@/utils/types"
import Image from "next/image"

const ServiceCard = ({ title, text, svg }: ServiceCardProps) => {
    return (
        <div className='max-w-96 shadow-xl p-4 rounded'>
            <figure>
                <Image
                    src={svg}
                    width={200}
                    height={150}
                    alt={text}
                />
            </figure>
            <h1>{title}</h1>
            <p>{text}</p>
            <button className='btn-yellow'>learn more</button>
        </div>
    )
}

export default ServiceCard