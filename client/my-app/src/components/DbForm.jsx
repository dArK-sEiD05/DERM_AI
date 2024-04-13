import React, { useState } from 'react';

import {Spinner} from "../components";
import { FaCloudUploadAlt, MdDelete } from '../assets/icons';
import {LinearProgress} from "../components";
import { storage } from '../config/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct } from '../api';
import { buttonClick } from '../animations';
import { motion } from 'framer-motion';  
import {getImagePrediction} from "../api/index.js";
import {Header} from "../components";
import { 
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

export const InputValueField = ({
  type,
  placeHolder,
  stateValue,
  stateFunc,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full flex items-center px-4 py-3 justify-center  bg-lightOverlay shadow-md outline-none rounded-md border border-gray-200 focus:border-red-400"
        value={stateValue}
        onChange={(e) => stateFunc(e.target.value)}
      />
    </>
  );
};

const DBNewItem = () => {

    
   const[isLoading,SetIsLoading]=useState(null);
   const[progress,setProgress]=useState(0);
  const [imageDownloadURL,setImageDownloadURL]=useState(null);
   const [image,setImage]=useState("");

    const dispatch=useDispatch();
    const deleteImageFromFirebase=()=>{
      SetIsLoading(true);
      const deleteRef=ref(storage,imageDownloadURL)
      deleteObject(deleteRef).then(()=>{
        setImageDownloadURL(null)
        SetIsLoading(false)
       
      })


    }
    const uploadImage=(e)=>{
      
      const imageFile=e.target.files[0];
     
      const storageRef=ref(storage,`images/${Date.now()}_${imageFile.name}`);
      
      
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
      'state_changed',
      (snapshot)=>{
        setProgress((snapshot.bytesTransferred/snapshot.totalBytes  )*100);
      },
      (error)=>{
       console.log(error)


      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageDownloadURL(downloadURL);
          SetIsLoading(false);
          setProgress(null);
         
          
          });
          

      }
      )

    }
    const submitNewData = async () => {
      try {
          const predictedImage = await getImagePrediction(imageDownloadURL);
          if (predictedImage) {
              console.log("yes")
          } else {
              console.log("no")
          }
          console.log( predictedImage);
          setImage(predictedImage);
          // Move this line inside the try block
      } catch (err) {
          console.error('Error fetching image prediction:', err);
          setImageDownloadURL(null); // Move this line inside the catch block
      }
  }
  
  return (
   <div>
    <Header/>
    <div className='flex items-center bg-red justify-center shadow-md px-5 px-5 backdrop-blur-md  border  flex-row pt-6 px-24 w-[100%]'>
       
    <div className='  border-md shadow-m backdrop-blur-md border justify-between  p-4 w-full flex flex-row  items-center gap-4'>
       
        <div className="w-full  shadow-md backdrop-blur-md flex justify-center items-center  flex-wrap gap-3">
       
      
        <div className='w-full bg-card backdrop-blur-md h-370 rounded-md border-2 border-dotted
         border-gray-300 cursor-pointer'>
          {isLoading?(
          <div className='w-full h-full flex flex-col justify-center items-center '>
           <Spinner/>
          <br></br>
          <br></br>
           <LinearProgress   variant="determinate" value={progress} />
           
          </div>):(
            <>
            { !(imageDownloadURL) ?(
              <>
              <label>
              <div className=" flex flex-col items-center justify-center h-full w-full cursor-pointer">
                <div className="flex flex-col justify-center items-center cursor-pointer">
                  <p className="font-bold text-4xl">
                    <FaCloudUploadAlt className="-rotate-0" />
                  </p>
                  <p className="text-lg text-textColor">
                    Click to upload an image
                  </p>
                </div>
              </div>
              <input
                type="file"
                name="upload-image"
                accept="image/*"
                onChange={uploadImage}
                className=" w-0 h-0"
              />
            </label>
              </>
            ):(
              <>
               <div className="relative w-full h-full overflow-hidden rounded-md">
                    <motion.img
                      whileHover={{ scale: 1.15 }}
                      src={imageDownloadURL}
                      className=" w-full h-full object-cover"
                    />

                    <motion.button
                      {...buttonClick}
                      type="button"
                      onClick={()=>deleteImageFromFirebase(imageDownloadURL)}
                      className="absolute top-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                     
                    >
                      <MdDelete className="-rotate-0" />
                    </motion.button>
                  </div>
              </>
            )}
            </>
          )}


        </div>
        
   <motion.button {...buttonClick} onClick={submitNewData} className='w-9/12 py-2 rounded-md bg-red-500 text-primary hover:bg-red-700 cursor-pointer'>
      Save
    </motion.button>
    

        
        <br></br>
        
       
        
        </div>
           
        </div>
        {image &&
  <div className=''>
    <p className='text-l px-2 py-2 text-black'>Predicted class: {image.prediction}</p>
    <p className='text-m px-2 py-2 text-black'>Curative Measures : {image.suggestions['Curative Measures']}</p>
    <p className='text-m px-2 py-2 text-black'>Medicative Suggestions : {image.suggestions['Medicative Suggestions']}</p>
    <p className='text-l=m px-2 py-2 text-black'>Preventive Measures : {image.suggestions['Preventive Measures']}</p>
  </div>
}
    
    
    </div>
    </div>
  )
};





export default DBNewItem;