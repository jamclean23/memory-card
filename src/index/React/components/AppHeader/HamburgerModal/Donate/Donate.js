import './donate.css';
import React from 'react';

function Donate (props) {

    function handleDonateClick () {
        window.open('https://www.buymeacoffee.com/rooseveltcat');
    }

    return (
        <div className={'Donate'}>
            <article>
                <h3>Donate</h3>
                <h4>Like this app?</h4>
                <p>We would love to keep producing quality outdoors content!<br/>Follow the link to support this app as well as more to come.</p>
                <button className='donateLink' onClick={handleDonateClick}>Support us 😊</button>
            </article>
            <button className='exitDonate' onClick={props.handleSubMenuBack}>Back</button>
        </div>
    );
}

export {
    Donate
}