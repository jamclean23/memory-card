import './endcard.css';
import React from 'react';

function EndCard (props) {
    return (
        <div className='EndCard'>
            <h3>You Finished the Quiz!</h3>
            <p>You scored {props.rightAnswers} out of {props.length}</p>
            <button onClick={props.resetGame}>Restart</button>
        </div>
    );
}

export {
    EndCard
}