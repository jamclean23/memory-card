// Container for card components

import React, { useEffect, useState } from 'react';
import { getTrees } from '../../../treeImageHandling.js';
import { generateCardsArray } from './generateCards.js';
import { Modal } from './Modal/Modal.js';
import './cardscontainer.css';

function CardsContainer (props) {
    const [treesImgs, setTreesImgs] = useState(getTrees());
    const [cards, setCards] = useState(generateCardsArray(treesImgs, handleCardClick));
    const [modal, setModal] = useState('');
 

    function handleCardClick (name) {
        setModal(<Modal handleModalXClick={handleModalXClick}/>);
    }

    function handleModalXClick () {
        setModal('');
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