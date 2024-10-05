"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";

export default function DeleteBtn({id}) {
  const router = useRouter();
 
  //function for deleting    
  async function handleDeleteCourse(){ 
    const api_url=process.env.NEXT_PUBLIC_BASE_URL
    const confirmed = confirm("Are you sure?");
    if(confirmed){
      await fetch(`${api_url}/courses?id=${id}`,{
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
