import React from 'react';
import {motion} from "framer-motion";
import { staggerFadeInOut,whileHov } from '../animations';

import { construct,speedo,reducecost,availability } from '../assets';
const Why= () => {
  return (
    <section id="why" className= "position:absolute; bg-gray-100 top-10 py-20">
      <motion className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Why DermCare.AI worth using?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div {...whileHov} className=" bg-blue-100 hover:bg-blue-200 duration-100 px-4 py-2 transition-all ease-in-out p-6 px-5 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img src={availability} alt="Availability" className="w-16 h-16 bg-black rounded-md px-3 py-3" />
            </div>
            <h6 className="text-lg font-semibold mb-2">Availability 24/7</h6>
            <p className="text-gray-600">AI dermatologists are available round the clock, providing convenient access to dermatological advice whenever patients need it.</p>
          </motion.div>
          <motion.div {...whileHov} className=" bg-blue-100 hover:bg-blue-200 duration-100 px-4 py-2 transition-all ease-in-out p-6 px-5 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img src={construct} alt="Accuracy & Consistency" className="w-16 h-16 bg-black rounded-md px-3 py-3" />
            </div>
            <h6 className="text-lg font-semibold mb-2">Accuracy & Consistency</h6>
            <p className="text-gray-600">AI dermatologists break down geographical barriers. Patients in remote or underserved areas can access dermatological care without the need for physical visits to specialized clinics.</p>
          </motion.div>
          <motion.div {...whileHov} className=" bg-blue-100 hover:bg-blue-200 duration-100 px-4 py-2 transition-all ease-in-out p-6 px-5 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img src={speedo} alt="Speed" className="w-16 h-16 bg-black rounded-md px-3 py-3" />
            </div>
            <h6 className="text-lg font-semibold mb-2">Speed</h6>
            <p className="text-gray-600">AI-based dermatology can deliver rapid results, which is crucial for early detection and timely treatment of skin conditions. Patients receive diagnoses and recommendations more swiftly compared to traditional methods.</p>
          </motion.div>
          <motion.div {...whileHov} className=" bg-blue-100 hover:bg-blue-200 duration-100 px-4 py-2 transition-all ease-in-out p-6 px-5 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img src={reducecost} alt="Reduced Healthcare Costs" className="w-16 h-16 bg-black rounded-md px-3 py-3" />
            </div>
            <h6 className="text-lg font-semibold mb-2">Reduced Healthcare Costs</h6>
            <p className="text-gray-600">By streamlining the diagnostic process and reducing the need for multiple in-person visits, AI dermatology can contribute to cost savings for both healthcare providers and patients.</p>
          </motion.div>
          
        </div>
      </motion>
      
    </section>
  );
};

export default Why;
