import React, { useState } from 'react';
import courseData from "../../../data/data.json";
import Cart from '../../Cart/Cart';
import CourseDetails from '../../CourseDetailes/CourseDetails';
import "./CourseShop.css";

const CourseShop = () => {
    // console.log(courseData)
    // const frist4 = courseData.slice(0, 4);
    const [courses, setCourses] = useState(courseData);
    const [courseCart, setCourseCart] = useState([]);
    const handleEnrollNow=(course)=>{
        console.log("clicked you", course)
        const newCourseCart = [...courseCart, course];
        setCourseCart(newCourseCart)
      
    }
    return (
        <div className="Courseshop-container">
            <div className="course-container">
           
                <div>
                    {
                    courses.map( course=> <CourseDetails 
                        handleEnrollNow ={handleEnrollNow}
                        course={course}></CourseDetails> )
                    }
                </div>
            </div>
            <div className="course-cart-container">
                <Cart courseCart ={courseCart}></Cart>
            </div>
           
        </div>
    );
};

export default CourseShop;