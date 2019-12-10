import React from 'react';
import './Background.css';
import Watch from './WatchOne';
import Text from './Text';


function Background(){
    return(
        
        <section id="container">
        <Text/>
        <div className="sec-one">
        </div>
        <div className="sec-two">
        <nav id="nav-sec">
                    <a  href="#">WATCHES</a>
                    <a href="#">WATCH-MAKING</a>
                    <a href="#">SERVICE</a>
                <div className="contact-sec">
                    <a href="#">Blog</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </div>
            </nav>

        </div>
        <div className="sec-three">
            <Watch/>
        </div>
        <div className="sec-four">
            
        </div>
        </section>
        
    )
} 

export default Background;
