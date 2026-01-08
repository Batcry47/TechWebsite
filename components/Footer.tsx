import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">TechFix<span className="text-tech-500">Pro</span></h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your one-stop destination for expert device repair and premium tech accessories. We bring devices back to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-tech-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-tech-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-tech-600 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-tech-500 transition">Home</a></li>
              <li><a href="#services" className="hover:text-tech-500 transition">Repair Services</a></li>
              <li><a href="#products" className="hover:text-tech-500 transition">Shop Products</a></li>
              <li><a href="#" className="hover:text-tech-500 transition">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-tech-500 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Screen Replacement</li>
              <li>Battery Upgrade</li>
              <li>Water Damage Repair</li>
              <li>Data Recovery</li>
              <li>Micro-soldering</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-tech-500 mt-1" size={20} />
                <span>123 Tech Avenue, Suite 100<br/>Downtown, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-tech-500" size={20} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-tech-500" size={20} />
                <span>support@techfixpro.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-tech-500" size={20} />
                <span>Mon-Sat: 10AM - 7PM<br/>Sun: Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TechFix Pro. All rights reserved. Prices subject to change.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;