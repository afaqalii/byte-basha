import { FeatureListingProps } from '@/utils/types'
import React from 'react'

const FeaturesListing = ({ arrayOfFeatures }: FeatureListingProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-3">
            {arrayOfFeatures.map((feature, index) => (
                <div
                    key={index}
                    className="border shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105  border-black hover:shadow-lg bg-yellowLight text-black group"
                >
                    <div className="flex justify-center items-center mb-4  text-black">
                        <feature.icon size={40} />
                    </div>
                    <h1 className="text-xl font-semibold text-center mb-2 text-black">{feature.title}</h1>
                    <p className="text-center text-black">{feature.text}</p>
                </div>
            ))}
        </div>
    )
}

export default FeaturesListing