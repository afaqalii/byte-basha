'use client'
import Title from '@/app/components/ui/Title'
import { servicesArray } from '@/utils/constants'
import ServiceContainer from './ServiceContainer'
import { useRouter } from 'next/navigation'

// services component in home page
const Services = () => {
    const router = useRouter()
    return (
        <div className='container py-10 md:py-20'>
            <Title className="mt-20">
                Services We Offer
            </Title>
            <ServiceContainer title="What We Offer" services={servicesArray} />
            <button onClick={() => router.push('/services')} className='btn-yellow'>Learn more</button>
        </div>)
}

export default Services