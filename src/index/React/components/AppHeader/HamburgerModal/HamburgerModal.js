import './hamburgermodal.css';
import React, { useEffect, useState } from 'react';
import { HamburgerMenu } from './Menu/HamburgerMenu';
import { Attributions } from './Attributions/Attributions';
import { Donate } from './Donate/Donate';

function HamburgerModal (props) {

    const menuButtons = <>
                            <button className='attributionsBtn' onClick={function () {handleButtonClicks('attributions')}}>Attributions</button>
                            <button className='donateBtn' onClick={handleButtonClicks.bind(this, 'donate')}>Donate</button>
                            <button className='backBtn' onClick={props.handleMenuClick}>Back</button>
                        </>;

    const [buttonContent, setButtonContent] = useState(menuButtons);
    const [menuContent, setMenuContent] = useState(<HamburgerMenu buttonContent={buttonContent}/>);
    const [content, setContent] = useState('');
    
    function handleButtonClicks (btnClicked) {
        setMenuContent('');
        switch (btnClicked) {
            case 'attributions':
                setContent(<Attributions handleSubMenuBack={handleSubMenuBack}/>);
                break;
            case 'donate':
                setContent(<Donate handleSubMenuBack={handleSubMenuBack}/>);
                break;
            }
    }
            
    function handleSubMenuBack () {
        setContent('');
        setMenuContent(<HamburgerMenu buttonContent={buttonContent}/>);
    }


    return (<div className='HamburgerModal'>
        {menuContent}
        {content}
    </div>);
}

export {
    HamburgerModal
}