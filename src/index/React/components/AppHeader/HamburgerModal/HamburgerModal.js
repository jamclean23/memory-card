import './hamburgermodal.css';
import React, { useState } from 'react';
import { HamburgerMenu } from './Menu/HamburgerMenu';

function HamburgerModal (props) {

    const [content, setContent] = useState(<HamburgerMenu handleMenuClick={props.handleMenuClick}/>);

    return (<div className='HamburgerModal'>
        {content}
    </div>);
}

export {
    HamburgerModal
}