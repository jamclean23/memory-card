// Main app


// ====== IMPORTS ======

// React
import React from 'react';
import { Card } from './components/Card/Card.js'
import { AppHeader } from './components/AppHeader/AppHeader.js';
import './app.css'

// ====== FUNCTIONS ======

// Main app function 
function App () {
    return (
        <div className='App'>
            <AppHeader />
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