import React from 'react';
import "./Watcheverywhere.css";

function Watcheverywhere () {

    return (
 <div className="main-watch">
    <div className="main-watch-container">
        <div className="main-watch-container-left">
            <h1>Watch Everywhere</h1>
            <h5>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV. </h5>
        </div>
        <div className="main-watch-container-right">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="TV"/>
            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoPlay loop controls muted ></video>
        </div>
    </div>
 </div>
    );
} ;

export default Watcheverywhere;