//this function can be called from any where because it is the one responsible for getting the raw object data
export default async function getCourses(){

    

    try {
        const response = await fetch("http://http://localhost:3000/api/courses",{cache:"no-store",});
        // const response = await fetch("http://localhost:3000/api/courses",{cache:"no-store",});
        const courses = await response.json();
        return courses.data;
    } catch (error) {
        console.log(error)
        
    }
}