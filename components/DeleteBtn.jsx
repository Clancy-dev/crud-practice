"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";

export default function DeleteBtn({id}) {
  const router = useRouter();
  //function for deleting    
  async function handleDeleteCourse(){ 
    const confirmed = confirm("Are you sure?");
    if(confirmed){
      await fetch(`https://clancy-mongodb-crud.netlify.app/courses?id=${id}`,{
        method:"DELETE"   
      });
      router.refresh()
    }
      
  }
  return (
    <button onClick={handleDeleteCourse}>
      <MdOutlineDelete size={32} />
    </button>
  );
}
