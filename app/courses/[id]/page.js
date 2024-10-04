
import getSingleCourse from '@/app/controllers/getSingleCourse';
import React from 'react'

export default async function ViewCourse({params:{id}}) {
    const course = await getSingleCourse(id);
    // const courseData=course.data
    console.log(course)
  return (
    <div className="detail-page">
              <h1>Course Detail Page</h1>

        <div className="course-details">
             <h2>{course.title}</h2>
            <p>{course.description}</p>  
            <p>{course.createdAt}</p>

            
        </div> 
           
    </div>
  )
}



