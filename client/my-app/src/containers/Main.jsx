import React from 'react';
import {Home,Header,Why,Map} from "../components"
import { roadmap} from '../assets';
import {Route,Routes} from "react-router-dom";

import { Footer } from '../components';

const Main = () => {
  return  (
    <main className='w-screen min-h-screen flex flex-col items-center bg-primary justify-start relative gap-10'>
    <Header />
    <div className='text-black w-full flex flex-col items-start justify-center mt-40 px-6 md:px-40 2xl:px-60 gap-10 pb-10'>
      <Home />
      <Why />
      <div id='service'>
      <h2 className="text-3xl font-bold mb-8 text-center"> Our Services</h2><br></br>
      <img className="w-full h-[100%]" src={roadmap} alt="Roadmap" />
    </div></div>
    <Map/>
    <Footer className="absolute bottom-0 w-full" />
   
            
          
    
  </main>
  )
}

export default Main;