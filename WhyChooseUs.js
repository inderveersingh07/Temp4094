import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Award, Users, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description: 'Years of experience delivering exceptional results with attention to every detail'
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Certified technicians trained in the latest detailing techniques and products'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Efficient service without compromising quality, respecting your time'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'We stand behind our work with satisfaction guarantee on all services'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the highest quality detailing services with exceptional customer care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mb-4 shadow-lg">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
