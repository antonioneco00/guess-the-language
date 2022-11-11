/// <reference path="../../public/index.d.ts"/>

import React from 'react'
import $ from 'jquery';

const Welcome = () => {
    function hideWelcome() {
        $('.welcome').fadeOut(300, () => {
            $('.quiz').fadeIn(300);
            $('.score').fadeIn(300);
        });
    }

    return (
        <div className='welcome'>
            <h2>How much do you know about foreign languages? Start the Quiz and test yourself!</h2>
            
            <button onClick={hideWelcome}>Start</button>
        </div>
    )
}

export default Welcome