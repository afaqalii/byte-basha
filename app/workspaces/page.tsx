import React from 'react';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import ContactUs from '../components/layout/ContactUs';

const workspacesData = {
  title: "Workspaces",
  text: "Our workspaces are designed to provide a productive environment for you to work in.",
  services: [
    {
      title: "Productive Environment",
      text: "Our workspaces are designed to enhance productivity with comfortable seating, ample lighting, and a quiet atmosphere.",
      svg: "/assets/webdev.jpg",
    },
    {
      title: "High-Speed Wi-Fi",
      text: "Stay connected with our high-speed Wi-Fi, available throughout our workspaces to ensure you can work efficiently.",
      svg: "/assets/webdev.jpg",
    },
    {
      title: "Free Coffee",
      text: "Enjoy complimentary coffee while you work, available in our workspaces to keep you energized throughout the day.",
      svg: "/assets/webdev.jpg",
    },
  ],
};

const Workspaces: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <Title>{workspacesData.title}</Title>
      <p className="text-lg text-gray-600 mb-8">{workspacesData.text}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workspacesData.services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            text={service.text}
            svg={service.svg}
          />
        ))}
      </div>
      <ContactUs />
    </div>
  );
}

export default Workspaces;
