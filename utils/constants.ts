import { CategoryTabs, NavItem } from "./types";
import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaUserTie, FaShieldAlt, FaLightbulb, FaHandsHelping, FaSeedling } from 'react-icons/fa';
import { FaCode, FaShoppingCart, FaChalkboardTeacher, FaUserGraduate, FaBuilding } from 'react-icons/fa';
export const navItems: NavItem[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/info",
  },
  {
    text: "Services",
    href: "/services",
  },
  {
    text: "Our Team",
    href: "/team",
  },
  {
    text: "Training",
    href: "/training",
  },
  {
    text: "Internships",
    href: "/internships",
  },
  {
    text: "Workspaces",
    href: "/workspaces",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];
export const categoryTabs: CategoryTabs[] = [
  {
    text: "all",
    value: "all",
  },
  {
    text: "custom software solutions",
    value: "custom-software-solutions",
  },
  {
    text: "artificial intelligence",
    value: "artificial-intelligence"
  },
  {
    text: "WordPress development",
    value: "WordPress-development"
  },
  {
    text: "app development",
    value: "app-development"
  },
];
export const servicesTabsArray = [
  {
    title: "Software Services",
    text: "We offer a range of software services to meet your needs.",
    href: "/contact",
    services: [
      {
        title: "Web Development",
        text: "We provide comprehensive web development services, including front-end and back-end development, to create robust and scalable web applications.",
        svg: "/assets/webdev.jpg",
      },
      {
        title: "Artificial Intelligence",
        text: "Our AI services include machine learning, natural language processing, and data analysis to help you leverage the power of artificial intelligence in your business.",
        svg: "/assets/webdev.jpg",
      },
      {
        title: "WordPress Development",
        text: "We offer custom WordPress development services to create dynamic and responsive websites tailored to your specific requirements.",
        svg: "/assets/webdev.jpg",
      },
      {
        title: "App Development",
        text: "Our app development services cover both iOS and Android platforms, delivering high-quality mobile applications to enhance user engagement.",
        svg: "/assets/webdev.jpg",
      },
      {
        title: "Digital Marketing",
        text: "We provide digital marketing services to boost your online presence, including SEO, social media marketing, and content creation.",
        svg: "/assets/webdev.jpg",
      },
    ],
  },
  // {
  //   title: "Training/Courses Programs",
  //   text: "We offer a variety of training and courses to help you gain skills in the latest technologies.",
  //   href: "/training",
  //   services: [
  //     {
  //       title: "Web Development Training",
  //       text: "Learn the fundamentals of web development, including HTML, CSS, JavaScript, and popular frameworks like React and Angular.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //     {
  //       title: "Artificial Intelligence Training",
  //       text: "Get hands-on experience with AI technologies, including machine learning, neural networks, and data analysis techniques.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //     {
  //       title: "WordPress Development Training",
  //       text: "Master WordPress development, from basic setup to advanced customizations and plugin development.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //     {
  //       title: "App Development Training",
  //       text: "Learn how to develop mobile apps for iOS and Android using popular tools and frameworks.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //     {
  //       title: "Digital Marketing Training",
  //       text: "Gain expertise in digital marketing strategies, including SEO, social media marketing, and content creation.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //   ],
  // },
  // {
  //   title: "Internships",
  //   text: "We offer internships to help you gain practical experience in your field of interest.",
  //   href: "/internship",
  //   services: [
  //     {
  //       title: "Web Development Internship",
  //       text: "Get hands-on experience in web development by working on real projects with our team of experts.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //     {
  //       title: "Artificial Intelligence Internship",
  //       text: "Work on AI projects and gain practical experience in machine learning, data analysis, and more.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //     {
  //       title: "WordPress Development Internship",
  //       text: "Learn WordPress development by working on real projects, from basic setup to advanced customizations.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //     {
  //       title: "App Development Internship",
  //       text: "Develop mobile apps for iOS and Android and gain hands-on experience in app development.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //     {
  //       title: "Digital Marketing Internship",
  //       text: "Gain practical experience in digital marketing by working on real campaigns and projects.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //   ],
  // },
  // {
  //   title: "Workspaces",
  //   text: "Our workspaces are designed to provide a productive environment for you to work in.",
  //   href: "/workspaces",
  //   services: [
  //     {
  //       title: "Productive Environment",
  //       text: "Our workspaces are designed to enhance productivity with comfortable seating, ample lighting, and a quiet atmosphere.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //     {
  //       title: "High-Speed Wi-Fi",
  //       text: "Stay connected with our high-speed Wi-Fi, available throughout our workspaces to ensure you can work efficiently.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //     {
  //       title: "Free Coffee",
  //       text: "Enjoy complimentary coffee while you work, available in our workspaces to keep you energized throughout the day.",
  //       svg: "/assets/webdev.jpg",
  //     },
  //   ],
  // },
];

export const services = [
  {
    text: "Web Development",
    href: "/serivces"
  },
  {
    text: "App Development",
    href: "/serivces"
  },
  {
    text: "Artificial Intelligence",
    href: "/serivces"
  },
  {
    text: "Digital Marketing",
    href: "/serivces"
  },
  {
    text: "Internships",
    href: "/internships"
  },
  {
    text: "Workspaces",
    href: "/workspaces"
  },
];

export const legal = ["Privacy policy"];

export const socialMedia = [
  { name: "Twitter", icon: FaTwitter },
  { name: "Facebook", icon: FaFacebook },
  { name: "YouTube", icon: FaYoutube },
];


export const featuresArray = [
  {
    title: 'Expertise',
    text: 'Our team comprises highly skilled professionals with extensive experience in various tech domains.',
    icon: FaUserTie,
  },
  {
    title: 'Integrity',
    text: 'We adhere to the highest ethical standards in all our dealings, ensuring trust and reliability.',
    icon: FaShieldAlt,
  },
  {
    title: 'Innovation',
    text: 'We constantly explore new technologies and methodologies to provide our clients with state-of-the-art solutions.',
    icon: FaLightbulb,
  },
  {
    title: 'Customer Focus',
    text: 'We prioritize our clients\' needs and work closely with them to deliver solutions that exceed expectations.',
    icon: FaHandsHelping,
  },
];

export const servicesArray = [
  {
    title: 'Software Services',
    text: 'Custom software development, data science, and web development tailored to meet your business needs.',
    icon: FaCode,
    href: "/services",
  },
  {
    title: 'E-commerce Solutions',
    text: 'End-to-end e-commerce platforms that enhance your online presence and drive sales.',
    icon: FaShoppingCart,
    href: "/services",
  },
  {
    title: 'Tech Skill Training',
    text: 'Comprehensive training programs in the latest technologies, designed to equip individuals with the skills needed for success in the tech industry.',
    icon: FaChalkboardTeacher,
    href: "/training",
  },
  {
    title: 'Internships',
    text: 'Opportunities for aspiring tech professionals to gain hands-on experience and mentorship in a dynamic work environment.',
    icon: FaUserGraduate,
    href: "/internships",
  },
  {
    title: 'Workspaces',
    text: 'Modern, collaborative workspaces that inspire creativity and productivity, available for our team and partners.',
    icon: FaBuilding,
    href: "/workspaces",
  },
];