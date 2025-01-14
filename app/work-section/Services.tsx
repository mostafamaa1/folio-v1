// components/ServiceCard.tsx

import React from 'react';
import {Service} from './projectDetails';
import { motion } from 'framer-motion';
import AnimatedBody from '../animations/AnimatedBody';
import AnimatedTitle from '../animations/AnimatedTitle';


interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      className="service-card bg-transparent border-gray-300 border-2 p-8 rounded-lg shadow-md sm:p-6"
      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-4xl text-center mb-4">{service.icon}</div>
      <h1
        className="text-xl text-center text-[#363130] font-bold mb-2" 
        >{service.title}</h1>
      {/* <h3 className="text-xl text-center font-bold mb-2">{service.title}</h3> */}
      <p
              className='text-gray-600 text-center'
            >{service.description}</p>
      {/* <p className="text-gray-600 text-center">{service.description}</p> */}
    </motion.div>
  );
};

export default ServiceCard;
