import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const courseCart = props.courseCart;
    // const total = courseCart.reduce( ( total , course ) => total + Number(course.price) ,  0);
    // let total = 0;
    // for (let i = 0; i < courseCart.length; i++) {
    //     const course = courseCart[i];
    //     total = total + Number(course.price);
        
    // }
    const total = courseCart.reduce( (total, course )=> total + course.price ,0);
    const tax = total / 5;
    return (
        <div className="course-cart">
           
            <div className="course-sticky">
                <h3>Course Summary</h3>
                <p>Enroll Course Iytm: {courseCart.length}</p>
                <p>tax+ Vat:$ {tax.toFixed(2)}</p>
                <p  className="total-bottom"><small>course Price:$ {total.toFixed(2)}</small></p>
            </div>
           

        </div>
    );
};

export default Cart;