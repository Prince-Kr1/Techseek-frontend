import logo from '../assets/logo.png';
import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';
import { footerLinks } from "@/Data/Data"

import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-chess-50 text-chess-400 border-none border rounded-t-3xl py-10 px-5 font-['poppins']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-1 text-xl font-semibold text-berry-900 mb-4">
            <img src={logo} alt="logo" className="w-6 h-6" />
            <span>techseek</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-berry-800 text-lg">
            <IconBrandInstagram className="cursor-pointer hover:scale-110 transition" />
            <IconBrandX className="cursor-pointer hover:scale-110 transition" />
            <IconBrandFacebook className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section) => (
          <div 
            key={section.title}
            className="ml-30"
          >
            <h4 className="text-berry-900 font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="transition duration-300 hover:text-berry-950">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
