import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const CardDetail = ({allCards,setAllCards}) => {
    const [card, setCard] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    // set up axios call to get card details for the card._id in parameters
    useEffect(() => {
        axios.get(`http://localhost:8000/api/cards/${id}`)
            .then( res => {
                console.log(res.data);
                setCard(res.data);
            })
            .catch( err => console.log(err));
    }, [])

    const deleteCardHandler = e => {
        const idToDelete = e.target.id;
        axios.delete(`http://localhost:8000/api/cards/${idToDelete}`)
        .then (res => {
            const filteredCards = allCards.filter( 
                card => card._id !== idToDelete);
            setAllCards(filteredCards);
            navigate(`/spells`);
        })
    }


    {/*// All card/spell types will display 
        cardName, cardType, cardCost, isLegendary, cardText, and cardExpansion.
        Only Creatures will display cardPower and cardToughness. 
        Only Planeswalkers will display cardLoyalty*/}
    return(
        <>
        <div className="container">
            <h1 className='header'>{card.cardName}</h1>
            <div className="detailNav">
                <button><Link to={'/spells'}>Return to Library</Link></button>
                <button><Link to={`/spells/edit/${card._id}`}>Edit this Spell</Link></button>
            </div>
            <div className="detailBody">
            <p>Mana Cost: {card.cardCost}</p>
            <p>Spell Type: {card.cardType}</p>
            {card.cardType !=="Planeswalker" ?  
            <p>{card.isLegendary? "Legendary" : "Non-Legendary"}</p>
            :""}
            <p>Rarity: {card.cardRarity}</p>
            <p>Card Text: {card.cardText}</p>
            {card.cardType=="Creature" ? 
                <p>{`Power:${card.cardPower}`}</p>
                : ""}
            {card.cardType=="Creature" ? 
                <p>{`Toughness: ${card.cardToughness}`}</p>
                : ""}
            
            {card.cardType=="Planeswalker" ? 
                <p> {`Planeswalker Loyalty: ${card.cardLoyalty}`}</p> 
                : ""}
            
            <p>Expansion/Set: {card.cardExpansion}</p>
            </div>
            <div className="deleteButton">
                <button onClick={deleteCardHandler} id={card._id}>Delete this Spell</button>
            </div>
        </div>
        </>
    )
}

export default CardDetail;