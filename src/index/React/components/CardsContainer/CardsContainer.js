// Container for card components

import React, { useEffect, useState } from 'react';
import { getTrees } from '../../../treeImageHandling.js';
import { generateCardsArray } from './generateCards.js';

function CardsContainer (props) {
    const [treesImgs, setTreesImgs] = useState(getTrees());
    const [cards, setCards] = useState(generateCardsArray(treesImgs, handleCardClick));
    const [modal, setModal] = useState('');
 

    function handleCardClick (name) {
        setModal('hi');
    }

    return (
            <div className='cardsContainer'>
                <div className='scrollWrapper'>
                    {cards}
                    {modal}
                </div>
            </div>
    )
}

export {
    CardsContainer
}