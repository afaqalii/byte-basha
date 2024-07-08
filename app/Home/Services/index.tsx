'use client'
import Title from '@/app/components/ui/Title'
import { servicesArray } from '@/utils/constants'
import ServiceContainer from './ServiceContainer'
import { useRedirect } from '@/utils/helpers'

// services component in home page
const Services = () => {
    const redirect = useRedirect();
    return (
        <div className='container py-10 md:py-20'>
            <Title className="mt-20">
                Services We Offer
            </Title>
            <ServiceContainer title="What We Offer" services={servicesArray} />
            <button onClick={() => redirect('/services')} className='btn-yellow'>Learn more</button>
        </div>)
}

export default Services