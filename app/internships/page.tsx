'use client'
import React from 'react';
import Title from '../components/ui/Title';
import ContactUs from '../components/layout/ContactUs';
import { useFirebaseData } from '../hooks/useFirebaseData';
import GridCols from '../components/layout/GridCols';

const internshipsData = {
  title: "Internships",
  text: "We offer internships to help you gain practical experience in your field of interest.",
};

const Internships: React.FC = () => {
  const { data, isLoading } = useFirebaseData('/internship');
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <Title>{internshipsData.title}</Title>
      <p className="text-lg text-gray-600 mb-8">{internshipsData.text}</p>
        {
          data &&
          <GridCols isLoading={isLoading} data={data} />
        }
      <ContactUs title="Join Our Team!" context="Skills" />
    </div>
  );
}

export default Internships;
