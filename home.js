import React from 'react';
import { Anchor, Car, Truck, Sun } from 'lucide-react';

import Hero from '../components/home/Hero';
import ServiceCard from '../components/services/ServiceCard';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Gallery from '../components/home/Gallery';
import Contact from '../components/home/Contact';
import ChatWidget from '../components/chat/ChatWidget';

const services = [
  {
    icon: Anchor,
    title: 'Boat Detailing',
    description: 'Complete marine detailing services to keep your boat looking pristine',
    features: [
      'Hull cleaning and waxing',
      'Deck scrubbing and sealing',
      'Interior cabin detailing',
      'Oxidation removal',
      'Gel coat restoration',
      'Teak wood treatment'
    ]
  },
  {
    icon: Car,
    title: 'Car Detailing',
    description: 'Professional automotive detailing for all vehicle types',
    features: [
      'Exterior wash and wax',
      'Paint correction and polishing',
      'Interior deep cleaning',
      'Leather conditioning',
      'Engine bay detailing',
      'Headlight restoration'
    ]
  },
  {
    icon: Truck,
    title: 'RV Detailing',
    description: 'Specialized detailing services for recreational vehicles',
    features: [
      'Exterior washing and waxing',
      'Roof cleaning and sealing',
      'Awning cleaning',
      'Interior detailing',
      'Slideout maintenance',
      'Black streak removal'
    ]
  },
  {
    icon: Sun,
    title: 'Window Tinting',
    description: 'Premium window tinting for privacy, UV protection, and style',
    features: [
      'Automotive tinting',
      'Boat window tinting',
      'RV tinting',
      'UV protection films',
      'Heat rejection tints',
      'Lifetime warranty available'
    ]
  }
];

export default function Home() {
  return (
    <div>
      <Hero />

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive detailing solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <div id="gallery">
        <Gallery />
      </div>

      <Contact />

      <ChatWidget />
    </div>
  );
}
