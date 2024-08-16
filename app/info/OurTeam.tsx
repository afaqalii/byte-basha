import React from 'react';
import Title from '../components/ui/Title';
import ContactUs from '../components/layout/ContactUs';
import Image from 'next/image';
import saqlain from "@/public/assets/saqlain.jpg"
import afaq from "@/public/assets/afaq.jpg"
import appdeveloper from "@/public/assets/appdeveloper.jpg"
import trainer from "@/public/assets/trainer.jpg"
import dg from "@/public/assets/dg.jpg"

const teamMembers = [
    { name: "Saqlain Ahmad", position: "CEO", description: "Visionary leader", img: saqlain },
    { name: "Muhammad Afaq", position: "Web Developer", description: "Expert in MERN stack, Firebase, and performance optimization.", img: afaq },
    { name: "Hamza Javaid", position: "App Developer", description: "Specialized in mobile app development with a focus on user experience.", img: appdeveloper },
    { name: "Husnain Ahmed", position: "E-commerce Expert", description: "Experienced in creating and managing successful e-commerce platforms.", img: trainer },
    { name: "Muhammad Waqas", position: "Digital Marketer", description: "Skilled in driving online growth through targeted digital marketing strategies.", img: dg },
];


const OurTeam: React.FC = () => {
    return (
        <div className='container mx-auto py-12 px-4'>
            <Title className="text-4xl font-bold text-gray-800 mb-8">Meet Our Team</Title>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                {teamMembers.map((member, index) => (
                    <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out'>
                        <div className='p-6 text-center'>
                            <div className="bg-gray-200 rounded-full w-28 h-28 mx-auto mb-4">
                                <Image className='w-full h-full object-cover rounded-md' src={member.img} alt={member.description} />
                            </div>
                            <h2 className='text-xl font-semibold text-gray-800'>{member.name}</h2>
                            <h3 className='text-sm text-gray-500 mb-4'>{member.position}</h3>
                            <p className='text-gray-600'>{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurTeam;
