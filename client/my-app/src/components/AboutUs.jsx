import React from 'react';
import Header from './Header';
import { shyam } from '../assets';
import { sidhrath,madhu } from '../assets';
import {motion} from "framer-motion";
import { fadeInOut, slideIn } from '../animations';
import {whileHov} from "../animations";

const AboutUs = () => {
  return (
    <motion.div className='flex items-end justify-center mt-150 my-20 bg-white w-screen  h-screen'>
    <Header/>
    
    <div className= ' w-[75%] flex flex-col gap-[20px] '>

    <motion.div {...whileHov} className=' w-[99%] py-5 px-5 flex gap-20 rounded-md shadow-md border border-md  hover:border-textColor hover:w-full  '> 
    <img src={shyam} className='w-[10%] shadow-md rounded-full shadow-slate-400'/>
    <div className='flex flex-col justify-start items-start'>
    <p className="text-headingColor font-bold px-20">Shyam sundhar</p>
    <br></br>

    <p className="text-black px-20">B-Tech / AI&DS</p>
    <p className="text-black px-20">Sri venkateshwara college of Engineering</p>
    </div>
    <div className='w-[40%]  text-black border border-xl px-5 bg-orange-100 hover:bg-orange-200 py-5 rounded-md border-orange-700'>
      <p>Masters of programming, CSE students craft solutions that power our digital world and drive technological advancements.</p>
    </div>
    
    
    </motion.div>


    <motion.div {...whileHov} className='w-[99%] py-5 px-5 flex gap-20 rounded-md shadow-md border border-md hover:border-textColor  hover:w-full'> 
   
    <div className=' w-[40%]  text-black border border-xl px-5 bg-orange-100 hover:bg-orange-200 py-5 rounded-md border-orange-700'>
      <p>CSE students are tech innovators, shaping the digital landscape with their coding expertise and problem-solving skills.</p>
    </div>
    <div className='flex flex-col justify-start items-start'>
    <p className="text-headingColor font-bold px-20">Madhuvansh</p>
    
    <br></br>
    <p className="text-black px-20">B.E / CSE </p>
    <p className="text-black px-20">Sri venkateshwara college of Engineering</p>
    </div>
    
    <img src={madhu} className='w-[10%] flex-end shadow-md  rounded-full shadow-slate-400'/>
    
    </motion.div>
    
    <motion.div {...whileHov} className=' w-[99%] py-5 px-5 flex gap-20 rounded-md shadow-md border border-md  hover:border-textColor hover:w-full  '> 
    <img src={sidhrath} className='w-[10%] shadow-md rounded-full shadow-slate-400'/>
    <div className='flex flex-col justify-start items-start'>
    <p className="text-headingColor font-bold px-20">Sidharth</p>
    <br></br>

    <p className="text-black px-20">B-Tech / AI&DS</p>
    <p className="text-black px-20">Sri venkateshwara college of Engineering</p>
    </div>
    <div className='w-[40%]  text-black border border-xl px-5 bg-orange-100 hover:bg-orange-200 py-5 rounded-md border-orange-700'>
      <p>In the realm of 0s and 1s, CSE students are virtuosos orchestrating the symphony of code, redefining possibilities in computing.</p>
    </div>
    
    
    </motion.div>
    <motion.div {...whileHov}    className=' w-[99%] py-10 px-10 flex gap-20 rounded-md shadow-md border border-md hover:border-textColor hover:w-full '> 
    <motion.div {...whileHov} className='w-[40%] text-black border border-xl px-5 bg-orange-100 hover:bg-orange-200 py-5 rounded-md border-orange-700'>
      <p>CSE students: the wizards behind the screen, blending creativity and logic to revolutionize software development.

</p>
    </motion.div>
    <div className='flex flex-col justify-start items-start px-20'>
    <p className="text-headingColor font-bold ">Surya</p>
    <br></br>

    <p className="text-black ">B-Tech / AI&DS</p>
    <p className="text-black ">Sri venkateshwara college of Engineering</p>
    </div>
   
    
    <img src={shyam} className='w-[10%]  rounded-full shadow-slate-400'/>
    </motion.div>

 
    </div>
    </motion.div>
  )
}

export default AboutUs;