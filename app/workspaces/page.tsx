'use client'
import React from 'react';
import Title from '../components/ui/Title';
import ContactUs from '../components/layout/ContactUs';
import { useFirebaseData } from '../hooks/useFirebaseData';
import GridCols from '../components/layout/GridCols';

const workspacesData = {
  title: "Workspaces",
  text: "Our workspaces are designed to provide a productive environment for you to work in.",
};

const Workspaces: React.FC = () => {

  const { data, isLoading } = useFirebaseData('/workspace');

  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <Title>{workspacesData.title}</Title>
      <p className="text-lg text-gray-600 mb-8">{workspacesData.text}</p>
        {
          data &&
          <GridCols isLoading={isLoading} data={data} />
        }
      <ContactUs title="Come join us!" context="workspaces" />
    </div>
  );
}

export default Workspaces;
