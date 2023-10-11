import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const EditCardForm = ({allCards, setAllCards}) => {
    const {id} = useParams();
    const navigate = useNavigate();
// Getters and setters
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

    // Axios call to get oneCardById
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

    // Event handler to update all aspects of the card when form is submitted
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
        // Axios call to update Card by Id
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
            <div className="container">
                <h1 className='header'>Edit {cardName}</h1>
                <div className="dashButton">
                    <button ><Link to={'/spells'}>Back to Library</Link></button>
                </div>
                    <form className='form' onSubmit={updatedCardHandler}>

        {/*Text field to change card name */}
                        <div>
                            <label>Card Name:</label>
                            <input type="text" value={cardName} size="30" onChange={ e => setCardName(e.target.value)} />
                        </div>

            {/* Dropdown select to change card type */}
                        <div>
                            <label>Card Type:</label>
                            <select value={cardType} onChange={e => setCardType(e.target.value)}>
                                <option value="Artifact" onSelect={e => setCardType(e.target.value)}>Artifact</option>
                                <option value="Creature" onSelect={e => setCardType(e.target.value)}>Creature</option>
                                <option value="Enchantment" onSelect={e => setCardType(e.target.value)}>Enchantment</option>
                                <option value="Instant" onSelect={e => setCardType(e.target.value)}>Instant</option>
                                <option value="Land" onSelect={e => setCardType(e.target.value)}>Land</option>
                                <option value="Planeswalker" onSelect={e => setCardType(e.target.value)}>Planeswalker</option>
                                <option value="Sorcery" onSelect={e => setCardType(e.target.value)}>Sorcery</option>
                            </select>
                        </div>

            {/* Text field to change cardCost (mana cost) */}
                        <div>
                            <label>Mana Cost:</label>
                            <input type="text" size="25" placeholder="(1-White 1-Blue 3-Generic)" value={cardCost} onChange={ e => setCardCost(e.target.value)}/>
                        </div>

            {/* Checkbox input to change Legendary status + conditional rendering to remove input if cardType==Planeswalker*/}
                        {cardType !=="Planeswalker" ?
                        <div>
                            <label>Legendary?</label>
                            <input type="checkbox" checked={isLegendary} value={isLegendary} onChange={e => setIsLegendary(e.target.checked)} />
                        </div>
                            :""}

            {/* Radio input to change cardRarity */}
                        <div>
                            <label>Rarity:</label>
                            <div>
                                <input type="radio" checked={cardRarity=="Common"} id="Common" name={cardRarity} value="Common" onChange={e => setCardRarity(e.target.value)}/>
                                <label>Common</label>

                                <input type="radio" checked={cardRarity=="Uncommon"} id="Uncommon" name={cardRarity} value="Uncommon" onChange={e => setCardRarity(e.target.value)}/>
                                <label>Uncommon</label>
                                
                                <input type="radio" checked={cardRarity=="Rare"}  id="Rare" name={cardRarity} value="Rare" onChange={e => setCardRarity(e.target.value)}/>
                                <label>Rare</label>
                                
                                <input type="radio" checked={cardRarity=="Mythic Rare"} id="Mythic Rare" name={cardRarity} value="Mythic Rare" onChange={e => setCardRarity(e.target.value)}/>
                                <label>Mythic Rare</label>
                            </div>
                        </div>

            {/* Text field input for changing card text */}
                        <div className="cardText">
                            <label>Card Text:</label>
                            <textarea  className="textArea" type="text" value={cardText} onChange={ e => setCardText(e.target.value)} />
                        </div>
                    
                    {/* Number input to change cardPower + conditional rendering for creature power */}
                    {cardType=="Creature" ? 
                        <div>
                            <label>Creature Power:</label>
                            <input type="number" defaultValue="0" value={cardPower} onChange={ e => setCardPower(e.target.value)} />
                        </div>
                    : ""}

                    {/*Number input to change cardToughness + conditional rendering for creature toughness */}
                    {cardType=="Creature" ? 
                        <div>
                            <label>Creature Toughness:</label>
                            <input type="number" defaultValue="0" value={cardToughness} onChange={ e => setCardToughness(e.target.value)} />
                        </div>
                    : ""}

                    {/* Number input to change cardLoyalty + conditional rendering for Planeswalker loyalty*/}
                    {cardType=="Planeswalker" ? 
                        <div>
                            <label>Planeswalker Loyalty:</label>
                            <input type="number" defaultValue="0" value={cardLoyalty} onChange={ e => setCardLoyalty(e.target.value)} />
                        </div>
                    : ""}
                    
                    {/* Text input to change expansion/set name */}
                    <div>
                        <label>Expansion/Set:</label>
                        <input type="text" value={cardExpansion} onChange={ e => setCardExpansion(e.target.value)}/>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default EditCardForm;