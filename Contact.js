import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [isPressed, setIsPressed] = useState(false);

  const handleContactClick = () => {
    window.open('https://www.jotform.com/form/251765765555167', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to give your vehicle the care it deserves? Contact us now!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 shadow-2xl border-0 h-full bg-gray-900">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400">Serving the local area and surrounding regions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">Get a response within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-800 rounded-xl">
                <h4 className="font-semibold text-white mb-2">Business Hours</h4>
                <div className="space-y-1 text-gray-400">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Card className="p-8 shadow-2xl border-0 w-full text-center bg-gray-900">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 shadow-2xl">
                  <ExternalLink className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Book?</h3>
                <p className="text-gray-400">
                  Fill out our quick quote form and we'll get back to you with a personalized estimate
                </p>
              </div>

              <motion.div
                whileTap={{ scale: 0.98 }}
                onTapStart={() => setIsPressed(true)}
                onTap={() => setTimeout(() => setIsPressed(false), 300)}
              >
                <Button 
                  size="lg"
                  onClick={handleContactClick}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-lg shadow-2xl relative overflow-hidden"
                >
                  {isPressed && (
                    <motion.div
                      className="absolute inset-0 bg-white opacity-30 rounded-full"
                      initial={{ scale: 0, x: '-50%', y: '-50%' }}
                      animate={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      style={{ left: '50%', top: '50%' }}
                    />
                  )}
                  Get Your Free Quote
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              <p className="text-sm text-gray-500 mt-4">
                You'll be redirected to our secure contact form
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
