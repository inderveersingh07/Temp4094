import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, Award, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full text-white font-medium shadow-lg">
              <Sparkles className="w-4 h-4" />
              Automotive & Marine Detail
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Make Your Vehicle
            <span className="block text-red-500">Look Brand New</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            Professional detailing for boats, cars, and RVs. Premium window tinting services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white shadow-2xl px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Quote
            </Button>
            <Button 
              size="lg"
              className="bg-white hover:bg-gray-100 text-black shadow-2xl px-8 py-6 text-lg font-semibold border-2 border-white"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-12"
          >
            {[
              { icon: Award, text: 'Expert Team' },
              { icon: Shield, text: 'Insured & Licensed' },
              { icon: Sparkles, text: 'Premium Products' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
