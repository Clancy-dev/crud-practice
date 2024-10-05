"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";

export default function DeleteBtn({id}) {
  const router = useRouter();
  const api_url=process.env.NEXT_PUBLIC_BASE_URL
 
  //function for deleting    
  async function handleDeleteCourse(){ 
    
    const confirmed = confirm("Are you sure you want to delete this course?");
    if(confirmed){
      await fetch(`${api_url}/api/courses?id=${id}`,{
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
