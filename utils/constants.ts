import { CategoryTabs, NavItem, ServiceCardProps } from "./types";
import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaUserTie, FaShieldAlt, FaLightbulb, FaHandsHelping, FaSeedling } from 'react-icons/fa';
export const navItems: NavItem[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Services",
    href: "/services",
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
    text: "all"
  },
  {
    text: "custom software solutions"
  },
  {
    text: "artificial intelligence"
  },
  {
    text: "WordPress development"
  },
  {
    text: "app development"
  },
];
export const servicesTabsArray = [
  {
    title: "Software Services",
    text: "We offer a range of software services to meet your needs.",
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
  {
    title: "Training/Courses Programs",
    text: "We offer a variety of training and courses to help you gain skills in the latest technologies.",
    services: [
      {
        title: "Web Development Training",
        text: "Learn the fundamentals of web development, including HTML, CSS, JavaScript, and popular frameworks like React and Angular.",
        svg: "/assets/webdev.jpg",
      },
      {
        title: "Artificial Intelligence Training",
        text: "Get hands-on experience with AI technologies, including machine learning, neural networks, and data analysis techniques.",
        svg: "/assets/webdev.jpg",
      },
      {
        title: "WordPress Development Training",
        text: "Master WordPress development, from basic setup to advanced customizations and plugin development.",
        svg: "/assets/webdev.jpg",
      },
      {
        title: "App Development Training",
        text: "Learn how to develop mobile apps for iOS and Android using popular tools and frameworks.",
        svg: "/assets/webdev.jpg",
      },
      {
        title: "Digital Marketing Training",
        text: "Gain expertise in digital marketing strategies, including SEO, social media marketing, and content creation.",
        svg: "/assets/webdev.jpg",
      },
    ],
  },
  {
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
        svg: "/assets/webdev.jpg",
      },
      {
        title: "WordPress Development Internship",
        text: "Learn WordPress development by working on real projects, from basic setup to advanced customizations.",
        svg: "/assets/webdev.jpg",
      },
      {
        title: "App Development Internship",
        text: "Develop mobile apps for iOS and Android and gain hands-on experience in app development.",
        svg: "/assets/webdev.jpg",
      },
      {
        title: "Digital Marketing Internship",
        text: "Gain practical experience in digital marketing by working on real campaigns and projects.",
        svg: "/assets/webdev.jpg",
      },
    ],
  },
  {
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
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Face Detection App",
    url: "https://www.techiexpert.com/wp-content/uploads/2023/09/Coimbatore-City-Police-Embrace-AI-Powered-Facial-Recognition-for-Enhanced-Surveillance.jpg",
    text: "Welcome to the AI Face Detection App, a cutting-edge project built with Next.js. This application leverages advanced AI models for real-time face detection, providing high accuracy and performance.",
    category: "artificial intelligence",
    technologies: ["nextJS", "reactJS", "python", "sql", "nlp"]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    url: "https://cdn.dribbble.com/users/12230255/screenshots/20361322/media/d28b16088803e00b6d8f2a14859f8eb9.png",
    text: "Explore our e-commerce platform featuring seamless user experience and secure payment processing.",
    category: "custom software solutions",
    technologies: ["reactJS", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    url: "https://cdn.dribbble.com/users/1006532/screenshots/6492232/stayfit_behance_dribble_cover_2-min_4x.png",
    text: "Track your workouts, set goals, and compete with friends using our mobile fitness app.",
    category: "app development",
    technologies: ["React Native", "Firebase", "GraphQL", "Redux"]
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    url: "https://cdn.dribbble.com/users/1094383/screenshots/6722275/fiq.png",
    text: "Visualize complex data sets with interactive charts and graphs on our data visualization dashboard.",
    category: "custom software solutions",
    technologies: ["D3.js", "Python", "Flask", "PostgreSQL"]
  },
  {
    id: 5,
    title: "AI-Powered Chatbot",
    url: "https://cdn.dribbble.com/users/4689944/screenshots/17410584/concept_3__3_.png",
    text: "Engage customers and provide instant support with our AI-powered chatbot solution.",
    category: "artificial intelligence",
    technologies: ["Python", "TensorFlow", "Dialogflow", "Node.js"]
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    url: "https://miro.medium.com/v2/resize:fit:940/1*3Weez6G-PFcBwmdX5bbTOQ.png",
    text: "Ensure secure and transparent voting processes with our blockchain-based voting system.",
    category: "custom software solutions",
    technologies: ["Ethereum", "Solidity", "Web3.js", "React"]
  },
  {
    id: 7,
    title: "Virtual Reality Simulation",
    url: "https://miro.medium.com/v2/resize:fit:940/1*3Weez6G-PFcBwmdX5bbTOQ.png",
    text: "Experience immersive virtual reality simulations for training and education purposes.",
    category: "custom software solutions",
    technologies: ["Unity", "C#", "Oculus Rift", "HTC Vive"]
  },
  {
    id: 8,
    title: "IoT Smart Home System",
    url: "https://www.goodworklabs.com/wp-content/uploads/2017/08/smart-home.jpg",
    text: "Control your home devices remotely and automate routines with our IoT smart home system.",
    category: "custom software solutions",
    technologies: ["Raspberry Pi", "Node.js", "MQTT", "React"]
  },
  {
    id: 9,
    title: "WordPress Blog Development",
    url: "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg",
    text: "Create and manage your blog with ease using our WordPress development services.",
    category: "WordPress development",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript"]
  },
  {
    id: 11,
    title: "Finance Portfolio Tracker",
    url: "https://th.bing.com/th/id/OIP.uoWadNqLMHBwWI7nZzAheQAAAA?rs=1&pid=ImgDetMain",
    text: "Track your investments and manage your finance portfolio with our comprehensive tracking tool.",
    category: "custom software solutions",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 12,
    title: "Healthcare Management Solution",
    url: "https://assets.website-files.com/5e305a6cb7083222527a89cc/610be5d8f8414174313f37ad_Healthcare%20app.jpeg",
    text: "Streamline healthcare operations and enhance patient care with our integrated management solution.",
    category: "custom software solutions",
    technologies: ["Java", "Spring Boot", "MySQL", "Angular"]
  },
  {
    id: 14,
    title: "Travel Planning App",
    url: "https://img.launchberg.com/trip-planners/kiwicom/kiwicom-2080.jpg",
    text: "Plan your travel itineraries, discover destinations, and book accommodations with our travel planning app.",
    category: "app development",
    technologies: ["React Native", "Firebase", "Google Maps API", "Redux"]
  },
  {
    id: 15,
    title: "Online Course Platform",
    url: "https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg",
    text: "Create and sell online courses with our customizable online course platform.",
    category: "custom software solutions",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB"]
  },
];


export const services = ["Web Development", "App Development", "Artificial Intelligence", "Digital Marketing", "Internships", "Workspaces"];
export const company = ["About us", "Contact", "Workspaces", "Training", "Internships"];
export const legal = ["Terms of use", "Privacy policy", "Cookie policy"];

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
  // {
  //   title: 'Growth Opportunities',
  //   text: 'Our internships and workspaces provide invaluable opportunities for learning, collaboration, and professional development.',
  //   icon: FaSeedling,
  // },
];
