import React from "react";
import './Footer.css';

function Footer () {
    return (
     <div className="main-footer">
        <div className="main-footer-first">
           <h6>Questions? Call 000-800-919-1694</h6>
        </div>
        
        <div className="main-footer-second">
            <a href="faq">FAQ</a>
            <a href="faq">Help Center</a>
            <a href="faq">Account</a>
            <a href="faq">Media center</a>
        </div>    
        <div className="main-footer-third">
            <a href="faq">Invester Relation</a>
            <a href="faq">Jobs</a>
            <a href="faq">Way to Watch</a>
            <a href="faq">Terms of Use</a>
        </div>
        <div className="main-footer-fourth">
            <a href="faq">Privacy</a>
            <a href="faq">Cookie Perference</a>
            <a href="faq">Corporate Information</a>
            <a href="faq">Contact Us</a>
        </div>  
        <div className="main-footer-fifth">
            <a href="faq">Speed Test</a>
            <a href="faq">Legal Notices</a>
            <a href="faq">Only On Netflix</a>
        </div> 
        <div className="main-footer-sixth">
            <button>English</button>
        </div>
        <div className="main-footer-seventh">
            <h6>Netflix India</h6>
        </div>
                
     </div>
    )
}

export default Footer;