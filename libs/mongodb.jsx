import React from 'react'
import mongoose from 'mongoose'
// step 6.
// this file is the one that is going to connect it to mongodb
//open a try catch and use mongoose which you installed earlier.
// use it with the connect function
//to access environmental variables we use process.env.what you called the url string.
export default async function mongoDBConnect() {
  try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connection successful")


  }catch(error){
  console.log(error)



  }







  return (
    <div>
      
    </div>
  )
}
