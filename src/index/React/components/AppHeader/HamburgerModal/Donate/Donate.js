import './donate.css';
import React from 'react';

function Donate (props) {
    return (
        <div className={'Donate'}>
            <article>
                <h3>Donate</h3>
            </article>
            <button className='exitDonate' onClick={props.handleSubMenuBack}>Back</button>
        </div>
    );
}

export {
    Donate
}