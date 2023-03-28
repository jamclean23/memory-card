// Individual card to contain tree pics and names

// ###################################
// Imports
// ###################################

import './card.css';
import React, { useEffect, useState } from 'react';

function Card (props) {
    // Props:
    // props.treeImgs.conefruit
    // props.treeImgs.overview
    // props.treeImgs.needleleaf
    // props.treeImgs.name

    return(
        <div className={'Card ' + props.treeImgs.catName}>
            <div className='imgsWrapper'>
                <div className='imgFrame overviewFrame'>
                    <img className='overviewImg treeImg' src={props.treeImgs.overview}/>
                </div>
                <div className='imgFrame coneFruitFrame'>
                    <img className='coneFruitImg treeImg' src={props.treeImgs.conefruit}/>
                </div>
                <div className='imgFrame needleLeafFrame'>
                    <img className='needleLeafImg treeImg' src={props.treeImgs.needleleaf}/>    
                </div>
            </div>
        </div>
    )
}

export {
    Card
}