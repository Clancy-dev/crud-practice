export default async function getSingleCourse(id){
    const api_url =process.env.NEXT_PUBLIC_BASE_URL
    console.log(api_url)

    try {
        const response = await fetch(`${api_url}/api/courses/${id}`,{cache:"no-store"});
        const course = await response.json();
        return course.data; 
    } catch (error) {
        console.log(error)
          
    }
}