import ContactUs from "./components/layout/ContactUs";
import About from "./Home/About";
import Hero from "./Home/Hero";
import OurProjects from "./Home/OurProjects";
import Services from "./Home/Services";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <About />
      <OurProjects />
      <Services />
      <ContactUs title="Contact Us!" context="brand" />
    </div>
  );
}
