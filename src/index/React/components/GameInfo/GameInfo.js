// Displays prompt and stats

// ############################
// IMPORTS
// ############################

import React, { useEffect, useState } from 'react';
import './game-info.css';

// ############################
// REACT COMPONENTS
// ############################

function GameInfo (props) {

    const [message, setMessage] = useState();

    useEffect(() => {

        if (props.targetTree === 'Oops!') {
            setMessage(props.targetTree);
            document.querySelector('.findTreeContainer').classList.add('incorrect');
        } else if (props.targetTree === 'Correct!') {
            setMessage(props.targetTree);
            document.querySelector('.findTreeContainer').classList.add('correct');
        } else if (props.targetTree === 'Congrats!') {
            setMessage(props.targetTree);
            document.querySelector('.findTreeContainer').classList = 'findTreeContainer';
        } else {
            let tree;
            if (props.targetTree) {
                tree = props.targetTree;
            } else {
                tree = '';
            }
            setMessage('Swipe right on this tree: ' + tree + ' →');
            document.querySelector('.findTreeContainer').classList = 'findTreeContainer';
        }
    }, [props.targetTree]);


    return (
        <div className='GameInfo'>
            <p className='slidesCounter'>{props.slideNumber}/{props.totalSlides}</p>
            <div className='findTreeContainer'>
                <p className='GameInfoMessage'>{message}</p>
            </div>
        </div>
    );
}

export {
    GameInfo
}