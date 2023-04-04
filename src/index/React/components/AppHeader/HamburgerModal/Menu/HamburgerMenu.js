import React, { useState} from "react";
import './hamburgermenu.css';

function HamburgerMenu (props) {
    return (
        <div className="HamburgerMenu">
            <h2 className='menuHeader'>Menu</h2>
            <button className='attributionsBtn'>Attributions</button>
            <button className='donateBtn'>Donate</button>
            <button className='backBtn' onClick={props.handleMenuClick}>Back</button>
        </div>
    );
}

export {
    HamburgerMenu
}