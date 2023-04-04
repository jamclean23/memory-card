// Header for Tree ID game app
// ####################################
// IMPORTS
// ####################################

import React, { useState } from 'react';
import './app-header.css';
import { HamburgerModal } from './HamburgerModal/HamburgerModal';
import hamburger from '../../../assets/icons/hamburger.png'


// ####################################
// REACT COMPONENT
// ####################################

function AppHeader (props) {

    const [modal, setModal] = useState('');

    const hamburgerModal = <HamburgerModal handleMenuClick={handleMenuClick}/>;

    function handleMenuClick (modal) {
        let hamburgerBtn = document.querySelector('.hamburger');

        // Show modal
        if (!modal) {
            setModal(hamburgerModal);
            hamburgerBtn.style.backgroundColor = 'beige';
        } else {
            setModal('');
            hamburgerBtn.style.backgroundColor = '';
        }
    }

    handleMenuClick = handleMenuClick.bind(this, modal);

    return(
        <div className='AppHeader'>
            <h1 className='hero'>ID That Tree!!</h1>
            <img className='hamburger' src={hamburger} alt='menu' onClick={handleMenuClick}/>
            {modal}
        </div>
    );
}


// #####################################
// EXPORTS
// #####################################

export {
    AppHeader
}