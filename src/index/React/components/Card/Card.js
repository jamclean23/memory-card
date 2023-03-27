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
            <div className='imgsWrapper'>
                <img className='overviewImg treeImg' src={props.treeImgs.overview}/>
                <img className='coneFruit treeImg' src={props.treeImgs.conefruit}/>
                <img className='needleLeaf treeImg' src={props.treeImgs.needleleaf}/>
            </div>
        </div>
    )
}

export {
    Card
}