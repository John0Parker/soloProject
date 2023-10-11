import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const CardDetail = (props) => {
    const [card, setCard] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/cards/${id}`)
            .then( res => {
                console.log(res.data);
                setCard(res.data);
            })
            .catch( err => console.log(err));
    }, [])

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
        </div>
        </>
    )
}

export default CardDetail;