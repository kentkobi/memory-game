import React, { useState, useEffect } from "react";
import Card from './Card';
import './Game.css';

const Game = ({types}) => {
    const [locked, setLocked] = useState(false);
    const [deck, setDeck] = useState(generateDeck());
    const [firstCard, setFirstCard] = useState(null);
	const [secondCard, setSecondCard] = useState(null);

    /* creates a shuffled list of paired cards from the card types provided, cards are initially set as unflipped */
    function generateDeck() {
        let id = 0;
        let deck = types.reduce((acc, type) => {
            acc.push({
                id: id++,
                isFlipped: false, 
                type
            })
            acc.push({
                id: id++,
                isFlipped: false, 
                type
            })
            return acc
        }, []) 
    
        const shuffledCards = deck.sort(() => Math.random() - 0.5)
    
        return shuffledCards
    }

    /* flips target card */
    function flipCard(card) {
        
        if(locked === false){
            console.log(locked, "should flip");
            (firstCard) ? setSecondCard(card) : setFirstCard(card);

            const updatedDeck = [...deck]
            updatedDeck.find(x => x.id === card.id).isFlipped = true

            setDeck(updatedDeck)
        } else {
            console.log(locked, "shouldn't flip");
        }
    }

    /* unflips the two cards that have been attempted (previously flipped) */
    function unflipCards() {
        setTimeout(() => {
            const updatedDeck = deck.map(
                p => (p.id === firstCard.id || p.id === secondCard.id) ? {...p, isFlipped: false} : p
            );
 
            setDeck(updatedDeck)
            resetSelection()
        }, 1000);
    }

    /* checks if the game is complete and clears the game to be ready for the next match attempt */
    function onMatch() {
        
        if( deck.every(card => card.isFlipped === true) )
            console.log("game complete!")

        resetSelection()
    }

    /* clears card match attempt */
    function resetSelection() {
		setFirstCard(null);
        setSecondCard(null);
        setLocked(false);
        console.log(locked, "set game back to playable");
	}

    useEffect(() => {
        
        if (firstCard && secondCard){
            setLocked(true);
            console.log("first and second card...");
            (firstCard.type === secondCard.type) ? onMatch() : unflipCards(); // check if cards are a match, otherwise unflip them
        }
            
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [firstCard, secondCard, setLocked]);

	return (
        <div className="memory-game">
            {deck.map(card => 
                <Card key={card.id} onClick={() => flipCard(card)}  {...card}/>
            )}
        </div>
    )
}

export default Game;