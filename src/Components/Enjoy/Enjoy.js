import React from "react";
import "./Enjoy.css";

const Enjoy = () => {
   return (
    <div className="main-enjoy">
      <div className="main-enjoy-container">
        <div className="main-enjoy-container-left">
            <h1>Enjoy on your TV</h1>
            <h5>Watch on smart TVs, PlayStation,Xbox,Chromecast,AppleTV,Blu-ray players and more.</h5>
        </div>
        <div className="main-enjoy-container-right"> 
           <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV"/>
           <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop controls muted></video>
        </div>
       </div>

    </div>
   )
}

export default Enjoy;
