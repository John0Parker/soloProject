import React from "react";
import {Link} from 'react-router-dom';

const Dashboard = ({allCards, setAllCards}) => {

    return(
        <>
            <h1 className='header'>Welcome, Planeswalker</h1>
        {/* Return a list of the cards created so far */}
        <ul>
            {
            allCards.map(card => {
                return(
                    <li key={card._id}>
                        <Link to={`/spells/${card._id}`}>{card.cardName}</Link>
                    </li>
                    )
            })
            }
        </ul>
        </>
    )
}

export default Dashboard;