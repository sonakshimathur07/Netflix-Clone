import React from 'react';
import "./Header.css";

const Header = () => {
  return  (
 <div className="main">
    <div className="main-nav">
         <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg" alt="netflix logo"/>
       <div className="main-nav-btns">
           <button id="btn">English</button>
           <button id="btn1">Sign In</button>
       </div>
   </div>
   <div className="box">
   </div>
   <div className="hero">
       <span>Unlimited movies,Tv shows and more</span>
       <span>watch anywhere.Cancel anytime.</span>
       <span> Ready to watch? Enter your email to create or restart your membership.</span>
     <div>
         <input className="email" type="text" placeholder="Email address"/>
         <button className="getstartbtn">Get Started</button>

     </div>
   </div>
 </div>
  )
}

export default Header;