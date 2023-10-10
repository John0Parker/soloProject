import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const EditCardForm = ({allCards, setAllCards}) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [cardName, setCardName] = useState("")
    const [cardType, setCardType] = useState("")
    const [cardCost, setCardCost] = useState("")
    const [isLegendary, setIsLegendary] = useState(false)
    const [cardText, setCardText] = useState("")
    const [cardRarity, setCardRarity] = useState("")
    const [cardExpansion, setCardExpansion] = useState("")
    const [cardPower, setCardPower] = useState(0)
    const [cardToughness, setCardToughness] = useState(0)
    const [cardLoyalty, setCardLoyalty] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cards/${id}`)
            .then(res => {
                setCardName(res.data.cardName);
                setCardType(res.data.cardType);
                setCardCost(res.data.cardCost);
                setIsLegendary(res.data.isLegendary);
                setCardText(res.data.cardText);
                setCardRarity(res.data.cardRarity);
                setCardExpansion(res.data.cardExpansion);
                setCardPower(res.data.cardPower);
                setCardToughness(res.data.cardToughness);
                setCardLoyalty(res.data.cardLoyalty);
            })
            .catch(err => console.log(err))
    }, [])

    const updatedCardHandler = e => {
        e.preventDefault();
        const updatedCard ={
            cardName,
            cardType,
            cardCost,
            isLegendary,
            cardText,
            cardRarity,
            cardExpansion,
            cardPower,
            cardToughness,
            cardLoyalty
        }
        axios.put(`http://localhost:8000/api/cards/${id}`, updatedCard)
            .then(res => {
                const updatedCards = allCards.map( card =>
                    card._id === id ? res.data : card)
                console.log(res);
                setAllCards(updatedCards);
                navigate(`/spells/${id}`)
            })
            .catch(err => console.log(err))
        }
    return(
        <>
        <h1 className='header'>Edit {cardName}</h1>
        <form onSubmit={updatedCardHandler}>
            <div>
                <label>Card Name:</label>
                <input type="text" value={cardName} onChange={ e => setCardName(e.target.value)} />
            </div>

            {/* Make dropdown for card type selection */}
            <div>
                <label>Card Type:</label>
                <input type="text" value={cardType} onChange={e => setCardType(e.target.value)} />
            </div>
            <div>
                <label>Mana Cost:</label>
                <input type="text" value={cardCost} onChange={ e => setCardCost(e.target.value)}/>
            </div>

            <div>
                <label>Legendary?</label>
                <input type="checkbox" checked={isLegendary} value={isLegendary} onChange={e => setIsLegendary(e.target.checked)} />
            </div>

{/* Need to review radio input usage */}
            <div>
                <label>Rarity:</label>
                <input type="radio" />
                    <option value="Common">Common</option>
                    <option value="Uncommon">Uncommon</option>
                    <option value="Rare">Rare</option>
                    <option value="Mythic Rare">Mythic Rare</option>
            </div>

            <div>
                <label>Card Text:</label>
                <input type="text" value={cardText} onChange={ e => setCardText(e.target.value)} />
            </div>
            
            {/* conditional rendering for creature power */}
            {cardType=="Creature" ? 
                <div>
                    <label>Creature Power:</label>
                    <input type="number" value={cardPower} onChange={ e => setCardPower(e.target.value)} />
                </div>
            : ""}

            {/* conditional rendering for creature toughness */}
            {cardType=="Creature" ? 
                <div>
                    <label>Creature Toughness:</label>
                    <input type="number" value={cardToughness} onChange={ e => setCardToughness(e.target.value)} />
                </div>
            : ""}

            {/* conditional rendering for Planeswalker loyalty*/}
            {cardType=="Planeswalker" ? 
                <div>
                    <label>Planeswalker Loyalty:</label>
                    <input type="number" value={cardLoyalty} onChange={ e => setCardLoyalty(e.target.value)} />
                </div>
            : ""}
            
            <div>
                <label>Expansion/Set:</label>
                <input type="text" value={cardExpansion} onChange={ e => setCardExpansion(e.target.value)}/>
            </div>

            <button>Submit</button>
        </form>
        </>
    )
}

export default EditCardForm;