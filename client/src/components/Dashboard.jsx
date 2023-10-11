import React from "react";
import {Link} from 'react-router-dom';

const Dashboard = ({allCards, setAllCards}) => {

    return(
        <>
            <div className="container">
                <h1 className='header'>Welcome, Planeswalker</h1>
                <div className="dashButton"><button ><Link to={'/spells/create'}>Create A New Card</Link></button></div>
                
                {/* Return a list of the cards created so far */}
                <ul className="dashboardBody">
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
            </div>
        </>
    )
}

export default Dashboard;