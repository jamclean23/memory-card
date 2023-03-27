// Module for generating list of cards
import React from 'react';
import { Card } from './components/Card/Card';
import uniqid from 'uniqid';

function generateCardsArray(treesImgs) {
    let cardsArray = [];

    for (const tree in treesImgs) {
        cardsArray.push(<Card key={uniqid()} treeName={tree} treeImgs={treesImgs[tree]}/>);
    }

    return cardsArray;
}

export {
    generateCardsArray
}