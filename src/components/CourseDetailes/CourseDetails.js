import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CourseDetailes.css";

const CourseDetails = (props) => {
    console.log(props)
    const {course_name, course_discribtion,img,price} = props.course;

    return (
        <div className="courseContainer">
          <div className="course_frist_part">
                <img src={img} alt=""/>
          </div>
          <div className="course_secound_part">
                <h2>{course_name}</h2>
                <p>{course_discribtion}</p>
                <h2>$ {price}</h2>
                <button onClick={()=>props.handleEnrollNow(props.course)}><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
          </div>
            
        </div>
    );
};

export default CourseDetails;

