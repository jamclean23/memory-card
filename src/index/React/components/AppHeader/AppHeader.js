// Header for Tree ID game app
// ####################################
// IMPORTS
// ####################################

import React, { useState } from 'react';
import './app-header.css';
import hamburger from '../../../assets/icons/hamburger.png'


// ####################################
// REACT COMPONENT
// ####################################

function AppHeader (props) {

    function handleMenuClick () {
        console.log('I have been clicked upon');
    }

    return(
        <div className='AppHeader'>
            <h1 className='hero'>ID That Tree!!</h1>
            <img className='hamburger' src={hamburger} alt='menu' onClick={handleMenuClick}/>
        </div>
    );
}


// #####################################
// EXPORTS
// #####################################

export {
    AppHeader
}