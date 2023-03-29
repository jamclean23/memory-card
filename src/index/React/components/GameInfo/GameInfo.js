// Displays prompt and stats

// ############################
// IMPORTS
// ############################

import React, { useState } from 'react';
import './game-info.css';

// ############################
// REACT COMPONENTS
// ############################

function GameInfo (props) {

    return (
        <div className='GameInfo'>
            <div className='findTreeContainer'>
                <p>↓ Find this tree ↓</p>
                <p>Easter Red Cedar</p>
            </div>
        </div>
    );
}

export {
    GameInfo
}