import React, {Component} from 'react';
import './Text.css';



class Text extends Component{
    render(){
    return (
        <div className="body">
            
            <div className="color">
                <p>Color</p>
            </div>
            <div className="Main">
            <div className="Nom">
                <h1>R</h1>
                <h1>A</h1>
                <h1>D</h1>
            </div>
            <div className="lowerText">
                <p>Can a wristwatch</p>
                <p>give you confidence?</p>
                <p>It certainly can.</p>
            </div>
            </div>

            <div className="secondMain">
                <div className="price">
                    <p>REFERENCE 1302</p>
                    <p>3,800 $</p>
                </div>
                <div className="btn-div">
                    <button>ADD TO BAG</button>
                </div>
            </div>

            
        </div>
    );
};};

export default Text;