// Main app


// ====== IMPORTS ======

// React
import React, { useEffect } from 'react';
import { Card } from './components/Card/Card.js'
import { AppHeader } from './components/AppHeader/AppHeader.js';
import { GameInfo } from './components/GameInfo/GameInfo.js';
import './app.css';
import { getTrees } from '../treeImageHandling.js';
import { generateCardsArray } from './generateCards.js';

// Setup Global Vars
let treesImgs = getTrees();

// Generate List of Cards from treesImg object
let cards = generateCardsArray(treesImgs);


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
            <div className='cardsContainer'>
                <div className='scrollWrapper'>
                    {cards}
                </div>
            </div>
        </div>
    );
}

// ====== EXPORTS ======

export {
    App
}