import React from 'react'
import Title from '../components/ui/Title'
import FeaturesListing from '../components/layout/FeaturesListing'
import { featuresArray } from '@/utils/constants'

const WhyChooseUs = () => {
    return (
        <div>
            <Title isRootLetter={true}>
                Why Choose Us
            </Title>
            <FeaturesListing arrayOfFeatures={featuresArray} />
        </div>
    )
}

export default WhyChooseUs