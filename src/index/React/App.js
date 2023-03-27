// Main app


// ====== IMPORTS ======

// React
import React from 'react';
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

console.log(cards);

// ====== FUNCTIONS ======

// Main app function 
function App (props) {
    return (
        <div className='App'>
            <AppHeader />
            <GameInfo />
            <div className='cardsContainer'>
            {cards}
            </div>
        </div>
    );
}

// ====== EXPORTS ======

export {
    App
}