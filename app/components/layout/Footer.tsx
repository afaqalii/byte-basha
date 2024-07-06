import { company, legal, services, socialMedia } from "@/utils/constants";
import logo from "../../../public/assets/logo.jpg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <footer className="container footer p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          {services.map((service, index) => (
            <a key={index} className="link link-hover">{service}</a>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          {company.map((item, index) => (
            <a key={index} className="link link-hover">{item}</a>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          {legal.map((item, index) => (
            <a key={index} className="link link-hover">{item}</a>
          ))}
        </nav>
      </footer>
      <footer className="footer bg-black border-base-300 border-t px-5 py-4">
        <aside className="">
          {/* <Image src={logo} alt="Byte Basha Logo" height={24} width={24} /> */}
          <p>
            Byte Basha.
            <br />
            Integrity in TechInnovations
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {socialMedia.map((social, index) => {
              const Icon = social.icon;
              return (
                <a key={index}>
                  <Icon size={24} className="fill-current" />
                </a>
              );
            })}
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
