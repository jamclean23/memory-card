// Main app


// ====== IMPORTS ======

// React
import React, { useEffect } from 'react';
import { AppHeader } from './components/AppHeader/AppHeader.js';
import { GameInfo } from './components/GameInfo/GameInfo.js';
import { CardsContainer } from './components/CardsContainer/CardsContainer.js';
import './app.css';



// ====== FUNCTIONS ======

// Main app function 
function App (props) {

    // Mounting actions
    useEffect(() => {
        console.log('App Mounted');
    });

    return (
        <div className='App'>
            <AppHeader />
            <GameInfo />
            <CardsContainer />
        </div>
    );
}

// ====== EXPORTS ======

export {
    App
}