import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, description, features, delay = 0 }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white">
        <div className="h-1 bg-red-600" />
        
        <CardHeader className="pb-4">
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4 shadow-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
          <CardDescription className="text-base text-gray-600 mt-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.1 * index }}
                className="flex items-start"
              >
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            whileTap={{ scale: 0.98 }}
            onTapStart={() => setIsPressed(true)}
            onTap={() => setTimeout(() => setIsPressed(false), 300)}
          >
            <Button 
              className="w-full mt-4 bg-red-600 hover:bg-red-700 hover:shadow-lg transition-all duration-300 text-white font-medium py-6 relative overflow-hidden"
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
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
