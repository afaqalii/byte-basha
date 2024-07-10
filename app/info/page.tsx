import FlexContainer from '../components/layout/FlexContainer'
import hero from "../../public/assets/hero.jpg";
import mission from "../../public/assets/mission.jpg";
import vision from "../../public/assets/vision.svg";
import ContactUs from '../components/layout/ContactUs';
import WhyChooseUs from './WhyChooseUs';

const Info = () => {
  return (
    <div className='container'>
      <FlexContainer
        imageSrc={hero}
        imageAlt="Hero Section SVG"
        imageWidth={1200}
        imageHeight={1200}
        title="Byte Basha"
        description="At ByteBasha, we pride ourselves on being leaders in the digital landscape, providing cutting-edge software services, comprehensive e-commerce solutions, and top-tier tech skill training. Our name, ByteBasha, combines the digital essence of Byte with Basha, a title of respect, reflecting our commitment to excellence and authority in the tech industry."
      />
      <FlexContainer
        imageSrc={mission}
        imageAlt="Hero Section SVG"
        imageWidth={1200}
        imageHeight={1200}
        title="Our Mission"
        description="To deliver innovative, reliable, and ethical technology solutions that empower businesses and individuals to thrive in a rapidly evolving digital world."
        reverse={true}
      />
      <FlexContainer
        imageSrc={vision}
        imageAlt="Hero Section SVG"
        imageWidth={1200}
        imageHeight={1200}
        title="Our Vision"
        description="To be a globally recognized tech company known for our integrity, innovation, and exceptional service, fostering a culture of continuous learning and growth."
      />
      <WhyChooseUs />
      <ContactUs title="Contact Us!" context="Brand" />
    </div>
  )
}

export default Info