import React from "react";
import Link from "next/link";
import getCourses from "@/app/controllers/getCourses";
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import DeleteBtn from "./DeleteBtn";
export default async function CoursesList() {
  //bring in our controller
  const courses = await getCourses();
   console.log(courses)

  return (
    <div className="courses-list">
      {/* map through this below */}

      {/* <div className="course">
        <div className="course-details">
          <h2 className="course-title">HTML and Css Course</h2>
          <p className="description">This is the fundamental course</p>
        </div>
        <div className="course-actions">
          <DeleteBtn />
          <Link className="edit" href="/edit-course/123" title="Edit">
            {/* <HiPencilAlt size={32} /> */}
          {/* </Link> */}
           {/* <Link href="/courses/12" title="View "> */}
            {/* <AiOutlineEye size={32} /> */}
          {/* </Link> */}
         {/* </div> */}
      {/* </div> */} 


      {
        courses?.map((course)=>{
          return(
              <div className="course" key={course.id}>
        <div className="course-details">
          <h2 className="course-title">{course.title}</h2>
          <p className="description">{course.description}</p>
        </div>
        <div className="course-actions">
          <DeleteBtn id={course._id}/>
          <Link className="edit" href={`/edit-course/${course._id}`} title="Edit">
           <HiPencilAlt size={32} /> 
           </Link> 
            <Link href={`/courses/${course._id}`} title="View "> 
             <AiOutlineEye size={32} /> 
          </Link> 
          </div> 
       </div> 



          )


        })

      }


     



     
    </div>
  );
}










// {
//   courses?.map((course)=>{
//     return(
//      <div className="course"  key={course.id}> 
//   <div className="course-details">
//     <h2 className="course-title">{course.title}</h2>
//     <p className="description">{course.description}</p>
//   </div>
//   <div className="course-actions">
//     <DeleteBtn />
//     <Link className="edit" href={`/edit-course/${course.id}`} title="Edit"> 
//       <HiPencilAlt size={32} />
//     </Link>
//     <Link href="/courses/12" title="View ">
//       <AiOutlineEye size={32} />
//     </Link>
//   </div>
// </div>
//     )
//   })



// }