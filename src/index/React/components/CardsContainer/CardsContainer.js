// Container for card components

import React, { useEffect, useState } from 'react';
import { getTrees } from '../../../treeImageHandling.js';
import { generateCardsArray } from './generateCards.js';

// Setup Global Vars
let treesImgs = getTrees();
// Generate List of Cards from treesImg object
let cards = generateCardsArray(treesImgs);

function CardsContainer (props) {
    const [treesImgs, setTreesImgs] = useState(getTrees());
    const [cards, setCards] = useState(generateCardsArray(treesImgs));

    useEffect(() => {

    });

    return (
            <div className='cardsContainer'>
                <div className='scrollWrapper'>
                    {cards}
                </div>
            </div>
    )
}

export {
    CardsContainer
}