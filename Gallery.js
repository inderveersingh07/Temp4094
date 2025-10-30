import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    title: 'Luxury Boat Detailing',
    span: 'col-span-2 row-span-2'
  },
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    title: 'Premium Car Detail',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800',
    title: 'RV Exterior Shine',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1552828922-4fc29eeade3f?w=800',
    title: 'Window Tinting',
    span: 'col-span-1 row-span-2'
  },
  {
    url: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800',
    title: 'Interior Detailing',
    span: 'col-span-2 row-span-1'
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the exceptional results we deliver for every client
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`${image.span} relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
