import React from 'react';
import logo from "../../images/course.png"
import  "./Header.css"

const Header = () => {
    return (
        <div>
            <div className="headerPart">
                <img src={logo} alt=""/>
                <nav>
                    <a href="/home">HOME</a>
                    <a href="/contact">CONTACT</a>
                    <a href="/online-course">ONLINE COURSE</a>
                    <a href="/our-service">OUR SERVICE</a>
                    <a href="/privicy-and-policy">PRIVICY AND POLICY</a>
                </nav>
            </div>
        </div>
        
    );
};

export default Header;