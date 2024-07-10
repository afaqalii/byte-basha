import React from 'react';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import ContactUs from '../components/layout/ContactUs';

const trainingData = {
  title: "Training",
  text: "We offer a variety of training programs to help you enhance your skills and advance your career.",
  services: [
    {
      title: "Software Development Training",
      text: "Learn the latest software development practices and tools from industry experts.",
      svg: "/assets/softwaredev.jpg",
    },
    {
      title: "Data Science Training",
      text: "Gain in-depth knowledge of data science, including data analysis, machine learning, and more.",
      svg: "/assets/datascience.jpg",
    },
    {
      title: "Cybersecurity Training",
      text: "Develop skills to protect systems and networks from cyber threats.",
      svg: "/assets/cybersecurity.jpg",
    },
    {
      title: "Project Management Training",
      text: "Learn how to effectively manage projects and lead teams to success.",
      svg: "/assets/projectmanagement.jpg",
    },
  ],
};

const Training: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <Title>{trainingData.title}</Title>
      <p className="text-lg text-gray-600 mb-8">{trainingData.text}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingData.services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            text={service.text}
            svg={service.svg}
          />
        ))}
      </div>
      <ContactUs title="Reach Out to Us!" context="Skills" />
    </div>
  );
}

export default Training;
