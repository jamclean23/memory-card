// Main app


// ====== IMPORTS ======

// React
import React from 'react';
import { Card } from './components/Card/Card.js'
import { AppHeader } from './components/AppHeader/AppHeader.js';
import { GameInfo } from './components/GameInfo/GameInfo.js';
import './app.css'

// ====== FUNCTIONS ======

// Main app function 
function App () {
    return (
        <div className='App'>
            <AppHeader />
            <GameInfo />
            <div className='cardsContainer'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

// ====== EXPORTS ======

export {
    App
}