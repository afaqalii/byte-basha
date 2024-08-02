'use client'
import React from 'react';
import Title from '../components/ui/Title';
import ContactUs from '../components/layout/ContactUs';


const Internships: React.FC = () => {
    return (
        <div className="container mx-auto p-6 bg-white text-gray-800">
            <Title>Contact Us</Title>
            <ContactUs title="Contact Us for any queries you have" context="Brand" />
        </div>
    );
}

export default Internships;
