import React from 'react';

const Cart = (props) => {
    const courseCart = props.courseCart;
    const total = courseCart.reduce( ( total , course ) => total + course.price,  0);
    return (
        <div>
            <h3>Course Summary</h3>
            <p>Enroll Course Iytm: {courseCart.length}</p>
    <p><small>course Price: {total}</small></p>

        </div>
    );
};

export default Cart;