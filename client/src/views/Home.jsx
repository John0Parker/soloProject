import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import NewCardForm from '../components/NewCardForm';
import CardDetail from '../components/CardDetail';
import EditCardForm from '../components/EditCardForm';
import Dashboard from '../components/Dashboard';

const Home = (props) => {
    const [allCards, setAllCards] =useState([]);

    // Axios get request to FindAllCards() route in order to setAllCards
    useEffect(() => {
        axios.get('http://localhost:8000/api/cards')
            .then(res=> setAllCards(res.data))
            .catch(err => console.log(err));
    }, [])


    {/*Got through all of the server-side stuff for setting up login/reg. 
    Couldn't figure out how to associate User objects 
    with an array Card objects they created so they'd only see theirs.
    Had a nervous breakdown. Bon Appetit. 
    
    const [isLoggedIn, setIsLoggedIn] =useState(false);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/cards', {}, {withCredentials:true})
            .catch(err => {
                setLoggedUser(null);
            })
    }, [])
    
    const logoutHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then(res=> {
                Navigate("/")
            })
    }*/}

    return(
        <>
            <h1 className='header'>Welcome, Planeswalker</h1>
            <Routes>
                <Route path='/spells' element={ <Dashboard allCards={allCards} setAllCards={setAllCards} />} />
                <Route path='/spells/create' element={ <NewCardForm allCards={allCards} setAllCards={setAllCards} />} />
                <Route path='/spells/:id' element={ <CardDetail allCards={allCards} setAllCards={setAllCards} />} />
                <Route path='/spells/edit/:id' element={ <EditCardForm allCards={allCards} setAllCards={setAllCards} />} />
            </Routes>
        </>
    )
}

export default Home;