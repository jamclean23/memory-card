import React, { useEffect, useState} from "react";
import './hamburgermenu.css';

function HamburgerMenu (props) {

    return (
        <div className="HamburgerMenu">
            <h2 className='menuHeader'>Menu</h2>
            {props.buttonContent}
        </div>
    );
}

export {
    HamburgerMenu
}