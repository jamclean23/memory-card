// Container for card components

import React, { useEffect, useState, useRef } from 'react';
import { SelectionResultSplash } from './SelectionResultSplash/SelectionResultSplash.js';
import { EndCard } from './EndCard/EndCard.js';
import { getTrees } from '../../../treeImageHandling.js';
import { generateCardsArray } from './generateCards.js';
import { Modal } from './Modal/Modal.js';
import './cardscontainer.css';
import { LoadingBar } from './LoadingBar/LoadingBar.js';

function CardsContainer (props) {
    const [treesImgs, setTreesImgs] = useState(getTrees());
    const [cards, setCards] = useState(generateCardsArray(treesImgs, handleCardClick, handleRightSwipe, handleSwiping, handleUp, reportImageLoaded));
    const [ongoingCards, setOngoingCards] = useState(cards);
    const [cardsToDisplay, setCardsToDisplay] = useState([]);
    const [correctCard, setCorrectCard] = useState('');
    const [modal, setModal] = useState('');
    const [selection, setSelection] = useState('');
    const [rightAnswers, setRightAnswers] = useState(0);
    const [complete, setComplete] = useState(false);
    const [content, setContent] = useState('');
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [loadingBar, setLoadingBar] = useState('');

    const isSwiping = useRef(false);

    const cardsContent = (<>
                        {cardsToDisplay[0]}
                        {cardsToDisplay[1]}
                        {cardsToDisplay[2]}
                        {modal}
                        </>);


    // == LISTENERS

    // Images loaded counter
    useEffect(() => {
        // All images loaded
        if (imagesLoaded === 9) {
            const cardsContainerDom = document.querySelector('.cardsContainer');
            cardsContainerDom.style.display = 'block';
            setLoadingBar('');
        } else {
            const cardsContainerDom = document.querySelector('.cardsContainer');
            cardsContainerDom.style.display = 'none';
            setLoadingBar(<LoadingBar/>);
        }
    }, [imagesLoaded]);

    // On Mount
    useEffect(() => {
        newTurn();
    }, []);

    // On settings total cards
    useEffect(() => {
        props.setTotalSlides(cards.length);
    }, [cards]);

    // On selection change
    useEffect(() => {
        if (selection) {
            if (isSelectionCorrect(correctCard.key, reactKeyFromElement(selection))) {
                setRightAnswers(() => {return rightAnswers + 1});
                setSelection('');
                props.setTargetTree('Correct!');
                selectionResultSplash('correct');
            } else {
                setSelection('');
                props.setTargetTree('Oops!');
                selectionResultSplash('incorrect');
            };
        }
    }, [selection]);

    // On complete change
    useEffect(() => {

        if (complete) {
            props.setTargetTree('Congrats!');
            props.setSlideNumber(cards.length);
            setImagesLoaded(9);
            setContent(<EndCard resetGame={props.resetGame} rightAnswers={rightAnswers} length={cards.length}/>);
        } else {
            setContent(cardsContent);
        }
    }, [complete, cardsToDisplay, modal]);


    // == FUNCTIONS

    // Increment images loaded counter 
    function reportImageLoaded () {
        setImagesLoaded(imagesLoaded => imagesLoaded + 1);
    }

    function isSelectionCorrect (correctKey, chosenKey) {
        if (correctKey === chosenKey){
            return true;
        } else {
            return false;
        }
    }

    function selectionResultSplash (result) {
        setContent(<SelectionResultSplash newTurn={newTurn} result={result} correctCard={correctCard} selection={cardFromReactKey(reactKeyFromElement(selection))}/>);
    }

    function newTurn () {

        // Reset loaded images counter
        setImagesLoaded(0);

        props.setSlideNumber(() => { return props.slideNumber + 1 });
        setContent(cardsContent);

        if (ongoingCards.length > 0) {

            // Determine new correct card and set message
            let currentCards = ongoingCards;
            let currentCorrectCard = currentCards[getRandomIndex(currentCards)];
            props.setTargetTree(currentCorrectCard.props.treeImgs.name);
            setCorrectCard(currentCorrectCard);

            // Remove correct card from current cards, and update to ongoingCards
            currentCards = removeCardFromArray(currentCorrectCard, currentCards);
            
            // If there are no more choices for a correct card, mark the game as completed
            if (!currentCards) {
                setComplete(true);
            }

            setOngoingCards(currentCards);

            // Generate card choices
            let cardChoices = [currentCorrectCard];
            let choicesLeft = removeCardFromArray(currentCorrectCard, cards);

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
        } else {
            setComplete(true);
        }
    }

    function handleCardClick (treeImg, catName, treeClass) {
        setModal(<Modal treeImg={treeImg} catName={catName} treeClass={treeClass} handleModalXClick={handleModalXClick}/>);
    }

    function handleModalXClick () {
        setModal('');
    }

    function handleRightSwipe () {
    }

    function handleSwiping (event) {
        const card = getCardFromTarget(event.event.target);

        // Get child image frames and disable pointer events
        if (card) {
            const imgFrames = card.querySelectorAll('.imgFrame');
            imgFrames.forEach((imgFrame) => {
                imgFrame.style.pointerEvents = 'none';
            });
        }

        if (!isSwiping.current) {
            isSwiping.current = true;
        }

        // Move card with swipe
        if (event.deltaX > 0) {
            card.style.left = event.deltaX + 'px';
        }

        if (event.deltaX > 100) {
            card.style.backgroundColor = 'green';
        } else {
            card.style.backgroundColor = 'beige';
        }
    }

    function handleUp (event) {

        const card = getCardFromTarget(event.event.target);
        
        // Get child image frames and enable pointer events
        if (card) {
            const imgFrames = card.querySelectorAll('.imgFrame');
            imgFrames.forEach((imgFrame) => {
                imgFrame.style.pointerEvents = 'all';
            });
        }

        // If card position is in the desired range, register a confirm
        let cardPosition = getComputedStyle(card).left.split('px')[0];
        if (cardPosition > 100) {
            // Check for correct selection
            setSelection(card);
        }

        // Reset Card position
        card.style.left = '0px';
        card.style.backgroundColor = 'beige';
    }

    function getCardFromTarget (target) {
        if (target.classList.contains('Card')) {
            return target;
        } else {
            return getCardFromTarget(target.parentElement);
        }
    }    

    function reactKeyFromElement (element) {
        const key = Object.keys(element).find( (key) => {
            return key.startsWith('__reactFiber');
        });

        return element[key].return.key;
    }   

    function cardFromReactKey (key) {
        let result = cards.find((card) => {
            return card.key === key;
        });

        return result || 'not found';
    }


    // ==RENDER 

    return (
            <>
            <div className='cardsContainer'>
                {content}
            </div>
            {loadingBar}
            </>
    )
}

export {
    CardsContainer
}