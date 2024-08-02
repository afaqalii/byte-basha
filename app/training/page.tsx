'use client';
import React from 'react';
import Title from '../components/ui/Title';
import ContactUs from '../components/layout/ContactUs';
import GridCols from '../components/layout/GridCols';
import { useFirebaseData } from '../hooks/useFirebaseData';

const trainingData = {
  title: "Training",
  text: "We offer a variety of training programs to help you enhance your skills and advance your career.",
};

const Training: React.FC = () => {

  const { data, isLoading } = useFirebaseData('/training');


  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <Title>{trainingData.title}</Title>
      <p className="text-lg text-gray-600 mb-8">{trainingData.text}</p>
        {
          data &&
          <GridCols isLoading={isLoading} data={data} />
        }
      <ContactUs title="Reach Out to Us!" context="Skills" />
    </div>
  );
}

export default Training;
