import React from 'react';
import Title from '../components/ui/Title';
import ContactUs from '../components/layout/ContactUs';
import Card from '../components/ui/Card';

const internshipsData = {
  title: "Internships",
  text: "We offer internships to help you gain practical experience in your field of interest.",
  services: [
    {
      title: "Web Development Internship",
      text: "Get hands-on experience in web development by working on real projects with our team of experts.",
      svg: "/assets/webdev.jpg",
    },
    {
      title: "Artificial Intelligence Internship",
      text: "Work on AI projects and gain practical experience in machine learning, data analysis, and more.",
      svg: "/assets/ai.jpg",
    },
    {
      title: "WordPress Development Internship",
      text: "Learn WordPress development by working on real projects, from basic setup to advanced customizations.",
      svg: "/assets/wordpress.jpg",
    },
    {
      title: "App Development Internship",
      text: "Develop mobile apps for iOS and Android and gain hands-on experience in app development.",
      svg: "/assets/appdev.jpg",
    },
    {
      title: "Digital Marketing Internship",
      text: "Gain practical experience in digital marketing by working on real campaigns and projects.",
      svg: "/assets/digitalmarketing.jpg",
    },
  ],
};

const Internships: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <Title>{internshipsData.title}</Title>
      <p className="text-lg text-gray-600 mb-8">{internshipsData.text}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internshipsData.services.map((service, index) => (
          <Card 
            key={index}
            title={service.title}
            text={service.text}
            svg={service.svg}
          />
        ))}
      </div>
      <ContactUs title="Join Our Team!" context="Skills" />
    </div>
  );
}

export default Internships;
