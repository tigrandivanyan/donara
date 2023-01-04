import React from 'react';
import './mouse.scss';

function Main() {

    return (
        <div className="main">
           <header>
                <h1>Here you can find some photos, textes and other cute stuff.</h1>
                <div className="scroll-down">
                    <div className="mouse"></div>
                    <p className="mouse-text">scroll</p>
                </div>
           </header>
        </div>
    );
}

export default Main;
