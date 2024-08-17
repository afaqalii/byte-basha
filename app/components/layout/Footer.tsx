'use client'
import { legal, navItems, services, socialMedia } from "@/utils/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <footer className="container footer p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          {services.map((service, index) => (
            <Link href={service.href} key={index} className="link link-hover">{service.text}</Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          {navItems.map((item, index) => (
            <Link href={item.href} key={index} className="link link-hover">{item.text}</Link>
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
                <a href={social.href} target="_blank" key={index}>
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
