// Container for card components

import React, { useEffect, useState } from 'react';
import { getTrees } from '../../../treeImageHandling.js';
import { generateCardsArray } from './generateCards.js';
import { Modal } from './Modal/Modal.js';
import './cardscontainer.css';

function CardsContainer (props) {
    const [treesImgs, setTreesImgs] = useState(getTrees());
    const [cards, setCards] = useState(generateCardsArray(treesImgs, handleCardClick));
    const [ongoingCards, setOngoingCards] = useState(cards);
    const [cardsToDisplay, setCardsToDisplay] = useState([]);
    const [correctCard, setCorrectCard] = useState('');
    const [modal, setModal] = useState('');
    
    // On Mount
    useEffect(() => {
        newTurn();
    }, []);

    // On correctCard change
    useEffect(() => {
        if (correctCard) {
            console.log('\nCorrect Card:');
            console.log(correctCard.props.treeImgs.name);
        }
    }, [correctCard]);

    // on cardsToDisplayChange
    useEffect(() => {
        // console.log(cardsToDisplay);
    }, [cardsToDisplay]);

    function newTurn (lastCard) {
        let currentCards = ongoingCards;

        // If there was a correct card chosen the last round, remove it from the list
        if (lastCard) {
            currentCards = removeCardFromArray(lastCard, currentCards);
        }
        setOngoingCards(currentCards);

        // Determine new correct card and set message
        let correctCard = currentCards[getRandomIndex(currentCards)];
        props.setTargetTree(correctCard.props.treeImgs.name);
        setCorrectCard(correctCard);

        // Generate card choices
        let cardChoices = [correctCard];
        let choicesLeft = currentCards;
        choicesLeft = removeCardFromArray(correctCard, choicesLeft);

        // Wrong choices
        for (let i = 1; i < 3; i++) {
            let wrongChoiceIndex = getRandomIndex(choicesLeft);
            cardChoices.push(choicesLeft[wrongChoiceIndex]);
            choicesLeft = removeCardFromArray(choicesLeft[wrongChoiceIndex], choicesLeft);
        }

        cardChoices = shuffleArray(cardChoices);
        setCardsToDisplay(cardChoices);

        function shuffleArray (array) {
            let resultArray = [];

            let possibleIndexes = [];

            for (let i = 0; i < array.length; i++) {
                possibleIndexes.push(i);
            }

            array.forEach((element) => {
                let possibleIndexesRandomIndex = getRandomIndex(possibleIndexes);
                let randomIndex = possibleIndexes[possibleIndexesRandomIndex];
                resultArray[randomIndex] = element;
                possibleIndexes.splice(possibleIndexesRandomIndex, 1);
            });

            return resultArray;
        }

        function getRandomIndex (array) {
            let result =  Math.floor(Math.random() * (array.length));
            return result;
        }

        function removeCardFromArray (cardToBeRemoved, array) {
            let result = array.filter((currentCard) => {
                return !( currentCard === cardToBeRemoved);
            });

            return result;
        }
    }

    function handleCardClick (treeImg, catName, treeClass) {
        setModal(<Modal treeImg={treeImg} catName={catName} treeClass={treeClass} handleModalXClick={handleModalXClick}/>);
    }

    function handleModalXClick () {
        setModal('');
    }

    return (
            <div className='cardsContainer'>
                {cardsToDisplay[0]}
                {cardsToDisplay[1]}
                {cardsToDisplay[2]}
                {/* {cards} */}
                {modal}
            </div>
    )
}

export {
    CardsContainer
}