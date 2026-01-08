import React from 'react';
import { Service } from '../types';
import * as Icons from 'lucide-react';

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-tech-600 uppercase mb-2">Expert Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Professional Repair Services</h3>
          <p className="text-gray-500">
            We use top-tier components and advanced diagnostics to get your device working perfectly again. 
            Walk-ins welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            // Dynamically render icon
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

            return (
              <div 
                key={service.id} 
                className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-tech-100 hover:shadow-xl hover:shadow-tech-100/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-tech-600 transition-colors duration-300">
                  <IconComponent className="text-tech-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h4 className="text-xl font-bold text-dark-900 mb-3">{service.title}</h4>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 group-hover:border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Est. Price</span>
                  <span className="font-bold text-tech-600">{service.priceRange}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;