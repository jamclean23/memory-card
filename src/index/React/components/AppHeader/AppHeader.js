// Header for Tree ID game app
// ####################################
// IMPORTS
// ####################################

import React, { useState } from'react';
import './app-header.css';


// ####################################
// REACT COMPONENT
// ####################################

function AppHeader (props) {
    return(
        <div className='AppHeader'>
            <p>ID that tree!</p>
        </div>
    );
}


// #####################################
// EXPORTS
// #####################################

export {
    AppHeader
}