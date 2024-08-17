import { CategoryTabs, NavItem } from "./types";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaThreads, FaMedium } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { FaUserTie, FaShieldAlt, FaLightbulb, FaHandsHelping, FaSeedling } from 'react-icons/fa';
import { FaCode, FaShoppingCart, FaChalkboardTeacher, FaUserGraduate, FaBuilding } from 'react-icons/fa';

// images
import webdev from "@/public/assets/webdev.jpg"
import ai from "@/public/assets/ai.jpg"
import wp from "@/public/assets/wp.jpg"
import appdev from "@/public/assets/appdev.jpg"
import dm from "@/public/assets/dm.jpg"
import ecommerce from "@/public/assets/ecommerce.jpg"
import internship from "@/public/assets/internship.png"
import workspace from "@/public/assets/workspace.png"
import training from "@/public/assets/training.png"

export const servicesData = [
  {
    imageSrc: webdev,
    imageAlt: "Web Development",
    imageWidth: 1200,
    imageHeight: 1200,
    title: "Web Development",
    description: [
      `<p>Transform your digital presence with our comprehensive web development solutions. We offer end-to-end services tailored to meet your specific needs.</p>`,
      `<br/>`,
      `<p><strong>MERN Stack:</strong> Harness the power of MongoDB, Express.js, React.js, and Node.js to build high-performance, dynamic web applications. This stack is ideal for developing modern web applications that are fast, scalable, and maintainable.</p>`,
      `<p><strong>MEAN Stack:</strong> Utilize MongoDB, Express.js, Angular, and Node.js for creating scalable and efficient web applications. With Angular at the front end, you'll get dynamic, single-page applications that are responsive and user-friendly.</p>`,
      `<p><strong>Full Stack Development:</strong> Get complete solutions with both front-end and back-end technologies. Our full-stack development services ensure seamless integration of all components, resulting in robust and integrated web systems.</p>`,
      `<p><strong>Custom Website Design:</strong> Craft a unique online presence with our tailored website design services. We blend creativity with technology to deliver responsive, visually appealing websites that reflect your brand identity and engage your audience.</p>`,
    ],
  },
  {
    imageSrc: wp,
    imageAlt: "WordPress Development",
    imageWidth: 1200,
    imageHeight: 1200,
    title: "CMS/WordPress Website Development",
    description: [
      `<p>Our WordPress development services provide dynamic and responsive websites tailored to your specific requirements.</p>`,
      `<p>We specialize in <strong>custom themes</strong>, plugins, and website optimization to ensure your WordPress site stands out. Whether you're looking for a simple blog or a complex e-commerce platform, we have the expertise to bring your vision to life.</p>`,
    ],
    reverse: true,
  },
  {
    imageSrc: ecommerce,
    imageAlt: "E-commerce Solutions",
    imageWidth: 1200,
    imageHeight: 1200,
    title: "E-commerce Solution",
    description: [
      `<p>Expand your business online with our e-commerce solutions. We create secure, user-friendly online stores that are designed to enhance the customer experience and drive sales.</p>`,
      `<p><strong>SEO Services:</strong> Improve your website’s visibility and attract more visitors with our strategic SEO services. We use advanced techniques to boost your search engine rankings, making it easier for customers to find your products.</p>`,
      `<p><strong>Content Management Systems (CMS):</strong> Manage your site with ease using our intuitive CMS solutions. We provide platforms that allow you to effortlessly update and control your content, without needing technical expertise.</p>`,
      `<p><strong>Website Maintenance & Support:</strong> Keep your website in top shape with our ongoing maintenance and support services. We offer regular updates, security enhancements, and troubleshooting to ensure your site performs optimally.</p>`,
    ],
  },
  {
    imageSrc: ai,
    imageAlt: "Artificial Intelligence",
    imageWidth: 1200,
    imageHeight: 1200,
    title: "Artificial Intelligence",
    description: [
      `<p>Unlock the potential of artificial intelligence in your business. Our AI services include <strong>machine learning</strong>, <strong>natural language processing</strong>, and <strong>data analysis</strong> to help you make smarter decisions and automate processes.</p>`,
      `<p>From predictive analytics to AI-powered chatbots, we provide solutions that can enhance your business operations and customer engagement.</p>`,
    ],
    reverse: true,
  },
  {
    imageSrc: appdev,
    imageAlt: "App Development",
    imageWidth: 1200,
    imageHeight: 1200,
    title: "App Development",
    description: [
      `<p>Unlock the potential of your business with our cutting-edge app development services. We create high-performance, user-centric mobile applications for both iOS and Android platforms.</p>`,
      `<p>Our apps are designed to offer seamless functionality and engaging user experiences, tailored to your business needs.</p>`,
    ],
  },
  {
    imageSrc: dm,
    imageAlt: "Digital Marketing",
    imageWidth: 1200,
    imageHeight: 1200,
    title: "Digital Marketing",
    description: [
      `<p>Boost your online presence with our comprehensive digital marketing services. We offer <strong>SEO</strong>, <strong>social media marketing</strong>, content creation, and more to help you reach your target audience and achieve your business goals.</p>`,
      `<p>Our strategies are tailored to your specific needs, ensuring maximum impact and return on investment.</p>`,
    ],
    reverse: true,
  },
  {
    imageSrc: internship,
    imageAlt: "Internship",
    imageWidth: 1200,
    imageHeight: 1200,
    title: "Internship",
    description: [
      `<p><strong>Coming Soon!</strong/></p>`,
    ],
  },
  {
    imageSrc: workspace,
    imageAlt: "Workspaces",
    imageWidth: 1200,
    imageHeight: 1200,
    title: "Workspaces",
    description: [
      `<p><strong>Coming Soon!</strong/></p>`,
    ],
    reverse: true,
  },
  {
    imageSrc: training,
    imageAlt: "Training",
    imageWidth: 1200,
    imageHeight: 1200,
    title: "Training",
    description: [
      `<p><strong>Coming Soon!</strong/></p>`,
    ],
  },
];



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
    href: "/services"
  },
  {
    text: "App Development",
    href: "/services"
  },
  {
    text: "Artificial Intelligence",
    href: "/services"
  },
  {
    text: "Digital Marketing",
    href: "/services"
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
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/company/bytebasha/" },
  { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/people/ByteBasha/61561737872978/?mibextid=qi2Omg&rdid=smYAZlltncVYiZOo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FH9Xzpx3bDyad1mzC%2F%3Fmibextid%3Dqi2Omg" },
  { name: "Threads", icon: FaThreads, href: "https://www.threads.net/@bytebasha" },
  { name: "X", icon: BsTwitterX, href: "https://x.com/bytebasha" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/bytebasha" },
  { name: "Fiverr", icon: SiFiverr, href: "https://www.fiverr.com/bytebasha" },
  { name: "Upwork", icon: FaUpwork, href: "https://www.upwork.com/freelancers/~01240fae196e152a87?mp_source=share" },
  { name: "Medium", icon: FaMedium, href: "https://medium.com/@bytebasha" },
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
    href: "/services",
  },
  {
    title: 'Internships',
    text: 'Opportunities for aspiring tech professionals to gain hands-on experience and mentorship in a dynamic work environment.',
    icon: FaUserGraduate,
    href: "/services",
  },
  {
    title: 'Workspaces',
    text: 'Modern, collaborative workspaces that inspire creativity and productivity, available for our team and partners.',
    icon: FaBuilding,
    href: "/services",
  },
];