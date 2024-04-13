import React from 'react'
import {delivery} from "../assets"
import { heroBg } from '../assets';
import {motion} from "framer-motion";
import { buttonClick, staggerFadeInOut } from '../animations';




const Home = () => {
    
  return (
    <motion.div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4' >
        
        <div className='ml-0 flex flex-col items-start justify-start gap-3'>
            <div className='px-4 py-1 flex items-center justify-center gap-2 bg-blue-200 rounded-full'>
                <p className='text-lg font-semibold px-4 py-4 text-blue-500' >
                   Welcome To DermAI
                </p>
                
            </div>

            <p className="w-full text-[35px] text-headingColor  font-sans font-extrabold ">
          Your personalized <br></br>
          <span className="text-blue-600">Skin Care Bot</span>
        </p>
        <p className='text-textColor text-lg'>
        The Skin Care Bot leverages advanced technology and artificial intelligence to assist in the early detection and prediction of skin cancer. By analyzing images of moles, 
        lesions, or other skin abnormalities provided by users, the Skin Care Bot uses computer vision algorithms to identify potential signs of skin cancer.

        </p>
        <motion.button {...buttonClick} className='px-3 py-2 
        bg-gradient-to-bl  from-blue-400 to-blue-800  rounded-xl text-black
        text-base font-semibold'>Let's start
        </motion.button>
        </div>
        <div className="py-2 flex-1 flex items-center justify-end relative">
        <img
          className="absolute top-0 right-0 md:-right-12  w-full h-420 md:w-auto md:h-650"
          src={heroBg}
          alt=""
        />
        
        
        
       
        </div>
        


    </motion.div>
  )
}

export default Home;