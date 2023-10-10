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
        <h1 className='header'>{card.cardName}</h1>
        <p>Mana Cost: {card.cardCost}</p>
        <p>Spell Type: {card.cardType}</p>
        <p>{card.isLegendary? "Legendary" : "Non-Legendary"}</p>
        <p>Rarity: {card.cardRarity}</p>
        <p>Card Text: {card.cardText}</p>
        <p>{card.cardType=="Creature" ? 
            `Power:${card.cardPower}` : ""}
        </p>
        <p>{card.cardType=="Creature" ? 
            `Toughness: ${card.cardToughness}` : ""}
        </p>
        <p>{card.cardType=="Planeswalker" ? 
            `Planeswalker Loyalty: ${card.cardLoyalty}` : ""}
        </p>
        <p>Expansion/Set: {card.cardExpansion}</p>
        <Link to={`/spells/edit/${card._id}`}>Edit this Card</Link>
        </>
    )
}

export default CardDetail;