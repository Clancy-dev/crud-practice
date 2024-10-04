import mongoDBConnect from "@/libs/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server"

export async function GET(request){
    //step 1
    //Beginning of Step 1
    //(a)
    // const courses = [
    //     {
    //         id:1,
    //         title:"HTML Css coarse",
    //         description:"This is a fundamental Course"
    //     },
    //     {
    //         id:2,
    //         title:"Python Coarse",
    //         description:"This is a backend course"
    //     }

    // ]
    //To be able to see them we have to return them as a response as below

    // (b)
    // return NextResponse.json(courses);

    //NextResponse will import the Next/Server as above.
    //localhost:3000/api/courses (You will see our courses in the browser or postman)
    //End of Step 1

    //Step 2 In some cases we want to usher in 2 things incase our data fails to show up we should show something as below. But above if the data fails to show up the app may just close.So here we are going to prepare for the worst by using the try catch method to capture that error incase it happens.

    try {
        // const courses = [
        //     {
        //         id:1,
        //         title:"HTML Css coarse",
        //         description:"This is a fundamental Course"
        //     },
        //     {
        //         id:2,
        //         title:"Python Coarse",
        //         description:"This is a backend course"
        //     }
    
        // ]


        //Part of step 9
        // we use the get still as before to get the data from the database

        //a) Connect to the DataBase
        await mongoDBConnect()
        //b) Get the data
        const courses = await Course.find()
        //End of step 9

        return NextResponse.json(
            {
                message:"Ok",
                data:courses,
            }
            //in postman it will show that the data is successfully shown.


        );
        
    } catch (error) {
        return NextResponse.json(
            {
                //Argument 1
            message: "Failed to fetch courses",
            error
            
        },{
               //Argument 2
            status:500
        });
     
    }
    
}

//step 3
// In real life we don't create the courses the we are doing above for example const courses = [...and so on], The courses have to come from a database ie mongodb.

//step 4
//Install mongoose in our project ie npm i mongoose and sign in into mongodb. login into mongodb and create a new project, don't create any deployment. 
//create a database instead(build a database/cluster)
//choose the free one.

//step 5
//copy the password and put it in the folder called .env.local ie MONGODB_URL=mongodb+srv://clancyro1789:PWoJHAJVlJQLnk2d@cluster0.cmqqb.mongodb.net/next-crud-app

//step 6
//outside create a folder called libs. Inside libs create a file called mongodb.jsx

//step 7
//Create a model
//This the one responsible for helping us create the crud operations.
//To be able to create a model you should be able to also know a schema. A Schema defines the structure of the model. Forexample let me say you want to create for courses. A course has a title which is a string, slug which is also a string and many more.
//go outside and create a folder called models. Inside this folder create a file called course.js


//step 8
//We now do the crud operations as below
//Create a Course(CREATE)
//create a route for it.
export async function POST(request){
    try{
        //get the data from this very request which afterwards t we want to send it to the database.
        //data being obtained
        //the data is the title and the description which people are trying to send from the form.
        const {title,description} = await request.json();
        //afterwards create a new coarse.
        const newCourse = {
            title,
            description
        }
        // then connect to the database
        await mongoDBConnect() //import mongoDBConnect above
        // use the model to create the coarse.
        await Course.create(newCourse); //import Course above
        //alternatively if you didn't want to create the new coarse you could simply   await Coarse.create({title,description});
        return NextResponse.json(
            {
                message: "Course created successfully",          
                data: newCourse,
            },{status:201}
        )

    }catch (error){
        return NextResponse.json(
            {
                //Argument 1
            message: "Failed to create a course",
            error
            
        },{
               //Argument 2
            status:500
        }
           
        )

    }
}

//Note:
//After this step 8 we can use postman to simulate what we are talking about.
//Duplicate the other title you had already in postman using the 3 dots and rename it as Create a Coarse.
//use the same link though change from get to post
//Go to body on postman. By default there is no body but we are sending data.
//Change from none to raw and from text to JSON format.
//raw
//json
// {
//     "title":"Html, CSS and Javascript courses",
//     "description":"This is a fundamental course that we teach at Desishub"
// }
// we are trying to attach the body to the request because this is where the data is being received.

//After check Mongodb 
//Database
//Browse Collections
//You will see all our results and they even created for us the id already.



//Step 9
//Instead of us putting the data manually in the try method like this below.
// const courses = [
//             {
//                 id:1,
//                 title:"HTML Css coarse",
//                 description:"This is a fundamental Course"
//             },
//             {
//                 id:2,
//                 title:"Python Coarse",
//                 description:"This is a backend course"
//             }
    
//         ]
//The data has to come from the  database like the way i have made some improvements above.


//Step 10
//Go back to the postman of our original get.
//The new request before you made a copy


//Step 11
//Getting a single course (location :api then courses then [id] then route.js)

//DELETE A COURSE
export async function DELETE(request){
    try {
        //Get the id of the coarse we want to delete
        const id = request.nextUrl.searchParams.get("id");
        //console.log(id);

        //After connect to the db
        await mongoDBConnect();

        //use the the model to delete
        await Course.findByIdAndDelete(id)

        //return the response
        return NextResponse.json({
            message:"Coarse Deleted successfully",
        },
        {status:200}
    )
        
    } catch (error) {
        return NextResponse.json(
            {
                //Argument 1
            message: "Failed to Delete a course",
            error
            
        },{
               //Argument 2
            status:500
        }
           
        )
    }
}
