import { revalidatePath } from "next/cache";

//this function can be called from any where because it is the one responsible for getting the raw object data
export default async function getCourses(){
    const api_url=process.env.NEXT_PUBLIC_BASE_URL
    console.log(api_url)
    
    try {
        const response = await fetch(`${api_url}/api/courses`,{cache:"no-store",});
        // const response = await fetch("http://localhost:3000/api/courses",{cache:"no-store",});
        const courses = await response.json();
        // revalidatePath("/")
        
        return courses.data;
    } catch (error) {
        console.log(error)
        
    }
}