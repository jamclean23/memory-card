// Individual card to contain tree pics and names

// ###################################
// Imports
// ###################################

import './card.css';
import React, { useEffect, useState } from 'react';
import { useSwipeable, SwipeEventData } from 'react-swipeable';

function Card (props) {
    // Props:
    // props.treeImgs.conefruit
    // props.treeImgs.overview
    // props.treeImgs.needleleaf
    // props.treeImgs.name

    const handlers = useSwipeable({
        delta: 10,
        onSwipedRight: props.handleRightSwipe,
        onSwiping: props.handleSwiping,
        onTouchEndOrOnMouseUp: props.handleUp,
        trackMouse: true
    });

    return(
        <div 
            {...handlers} 
            onPointerDown={props.handlePointerDown} 
            onPointerUp={props.handlePointerUp}
            onPointerCancel={props.handlePointerUp}
            onPointerLeave={props.handlePointerUp}
            onPointerMove={props.handlePointerMove}
            className={'Card ' + props.treeImgs.catName}
        >
            <div className='imgsWrapper'>
                <div className='imgFrame overviewFrame' onClick={props.handleCardClick.bind(this, props.treeImgs.overview, props.treeImgs.catName, 'overviewImg')}>
                    <img onLoad={props.reportImageLoaded} draggable='false' className='overviewImg treeImg' src={props.treeImgs.overview}/>
                </div>
                <div className='imgFrame coneFruitFrame' onClick={props.handleCardClick.bind(this, props.treeImgs.conefruit, props.treeImgs.catName, 'coneFruitImg')}>
                    <img onLoad={props.reportImageLoaded} draggable='false' className='coneFruitImg treeImg' src={props.treeImgs.conefruit}/>
                </div>
                <div draggable='false' className='imgFrame needleLeafFrame' onClick={props.handleCardClick.bind(this, props.treeImgs.needleleaf, props.treeImgs.catName, 'needleLeafImg')}>
                    <img onLoad={props.reportImageLoaded} draggable='false' className='needleLeafImg treeImg' src={props.treeImgs.needleleaf}/>    
                </div>
            </div>
        </div>
    )
}

export {
    Card
}