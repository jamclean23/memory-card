// Module for generating list of cards
import React from 'react';
import { Card } from './Card/Card';
import uniqid from 'uniqid';

function generateCardsArray(treesImgs, handleCardClick, handleRightSwipe, handleSwiping, handleUp) {
    let cardsArray = [];
    for (const tree in treesImgs) {
        cardsArray.push(
            <Card key={uniqid()} treeName={tree} treeImgs={treesImgs[tree]} handleCardClick={handleCardClick}
                 handleRightSwipe={handleRightSwipe} handleSwiping={handleSwiping} handleUp={handleUp}/>);
    }

    return cardsArray;
}

export {
    generateCardsArray
}