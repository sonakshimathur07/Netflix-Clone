import React, { useState } from 'react';
import './FAQ.css';

function Faq() {
    const [display, setDisplay] = useState(null);

    // ye WALA Function lagega //
    const toggleAccordion = (index) => {
        setDisplay(display === index ? null : index);
    };

    return (
        <div className="main-faq">
            <div className="main-faq-container">
                <h1>Frequently Asked Questions</h1>
                <div className="main-faq-box">
                    <div className="main-faq-box-items">
                        <button className="title" onClick={() => toggleAccordion(1)}>
                            <span>What is Netflix?</span>
                            <i className="icon"></i>
                        </button>
                        <p className={display === 1 ? 'text active' : 'text'}>
                            Netflix is a streaming service that offers a wdisplaye variety of award-winning TV shows,
                            movies, anime, documentaries and more – on thousands of internet-connected devices.
                            You can watch as much as you want, whenever you want, without a single ad –
                            all for one low monthly price. There's always something new to discover, and new TV shows
                            and movies are added every week!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;