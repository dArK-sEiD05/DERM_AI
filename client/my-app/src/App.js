import React from 'react';
import {Route,Routes} from "react-router-dom";
import {Main,Login } from "./containers";
import {useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';
import { app } from './config/firebase.config';
import { getAuth } from 'firebase/auth';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateUserJWTToken } from './api';
import { setUserDetails } from './context/actions/userActions';
import { fadeInOut } from './animations';
import { AboutUs, AuthPage, ChatsPage, MainLoader } from './components';
import { DbForm } from './components';
import {App1} from "./components";

const App=()=>{
    const navigate=useNavigate();
    const firebaseAuth = getAuth(app);
    const [isLoading,setIsLoading]=useState(false);
   
    const dispatch=useDispatch();
  
    useEffect(()=>{
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged(cred => {
        if (cred) {
          cred.getIdToken().then((token) => {
           console.log(token)
            validateUserJWTToken(token).then((data) => {
             
              dispatch(setUserDetails(data))
            });
           
          })
          
        };
        setInterval(()=>{
          setIsLoading(false);
        },2500);
    })
      },[]);
    console.log(isLoading)
    return (

    <div className="text-blue-500  flex items-center justify-center w-screen min-h-screen ">
        {isLoading && (
            <motion.div className="fixed z-50  h-full inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full"
            {...fadeInOut}><MainLoader/></motion.div>
        )}
            
            
        <Routes>
            
            <Route path="/*"  element={<Main/>} />
            <Route path="/DbForm"  element={<DbForm/>} />
            <Route path="/Login"  element={<Login/>} />
            <Route path="/AboutUs"  element={<AboutUs/>} />
           
        </Routes>
        
       
    </div>
    );
};
export default App;