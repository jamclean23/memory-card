// Main app


// ====== IMPORTS ======

// React
import React, { useEffect, useState } from 'react';
import { AppHeader } from './components/AppHeader/AppHeader.js';
import { GameInfo } from './components/GameInfo/GameInfo.js';
import { CardsContainer } from './components/CardsContainer/CardsContainer.js';
import './app.css';
import uniqid from 'uniqid';


// ====== FUNCTIONS ======

// Main app function 
function App (props) {

    const [targetTree, setTargetTree] = useState();
    const [gameKey, setGameKey] = useState(uniqid());

    // Mounting actions
    useEffect(() => {
    }, []);

    function resetGame () {
        setGameKey(uniqid());
    }

    return (
        <div className='App'>
            <AppHeader />
            <GameInfo targetTree={targetTree}/>
            <CardsContainer key={gameKey} setTargetTree={setTargetTree} resetGame={resetGame}/>
        </div>
    );
}

// ====== EXPORTS ======

export {
    App
}