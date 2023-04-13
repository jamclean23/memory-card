// Main app


// ====== IMPORTS ======

// React
import React, { Suspense, useEffect, useState } from 'react';
import { AppHeader } from './components/AppHeader/AppHeader.js';
import { GameInfo } from './components/GameInfo/GameInfo.js';
const CardsContainer = React.lazy(() => import('./components/CardsContainer/CardsContainer.js').then(module => ({ default: module.CardsContainer })));
import './app.css';
import uniqid from 'uniqid';
import { LoadingBar } from './components/CardsContainer/LoadingBar/LoadingBar.js';


// ====== FUNCTIONS ======

// Main app function 
function App (props) {

    const [targetTree, setTargetTree] = useState();
    const [slideNumber, setSlideNumber] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);
    const [gameKey, setGameKey] = useState(uniqid());

    // Mounting actions
    useEffect(() => {
    }, []);

    function resetGame () {
        setSlideNumber(0);
        setGameKey(uniqid());
    }

    return (
        <div className='App'>
            <AppHeader />
            <GameInfo totalSlides={totalSlides} slideNumber={slideNumber} targetTree={targetTree}/>
            <Suspense fallback={<LoadingBar />}>
                <CardsContainer setTotalSlides={setTotalSlides} setSlideNumber={setSlideNumber} slideNumber={slideNumber} key={gameKey} setTargetTree={setTargetTree} resetGame={resetGame}/>
            </Suspense>

        </div>
    );
}

// ====== EXPORTS ======

export {
    App
}