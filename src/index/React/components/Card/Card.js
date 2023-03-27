// Individual card to contain tree pics and names

// ###################################
// Imports
// ###################################

import './card.css';
import React, { useState } from 'react';

function Card (props) {
    return(
        <div className='Card'>
            <p>(testing only) {props.treeName}</p>
            <img className='overviewImg' src={props.treeImgs.overview}/>
        </div>
    )
}

export {
    Card
}