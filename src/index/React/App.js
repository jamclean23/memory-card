// Main app


// ====== IMPORTS ======

// React
import React, { useEffect, useState } from 'react';
import { AppHeader } from './components/AppHeader/AppHeader.js';
import { GameInfo } from './components/GameInfo/GameInfo.js';
import { CardsContainer } from './components/CardsContainer/CardsContainer.js';
import './app.css';



// ====== FUNCTIONS ======

// Main app function 
function App (props) {

    const [targetTree, setTargetTree] = useState();

    // Mounting actions
    useEffect(() => {
    }, []);

    return (
        <div className='App'>
            <AppHeader />
            <GameInfo targetTree={targetTree}/>
            <CardsContainer setTargetTree={setTargetTree}/>
        </div>
    );
}

// ====== EXPORTS ======

export {
    App
}