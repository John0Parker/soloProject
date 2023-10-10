
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import AuthPage from './views/AuthPage'
import Home from './views/Home'
import './App.css'

function App() {
return(
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Home/>} />
    </Routes>
  </BrowserRouter>
)


{/*Got through all of the server-side stuff for 
    setting up login/reg. Couldn't figure out how to associate User objects 
    with an array of the card objects they created so they'd only see theirs.
    Had a breakdown. Bon Appetit. 

  // store info for logged-in user in State
  const [loggedUser, setLoggedUser] = useState(null);
  // store card array of all cards in State
  const [allCards,setAllCards] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage setLoggedUser={setLoggedUser} />} />
        <Route path="/spells" element={<Home setLoggedUser={setLoggedUser} loggedUser= {loggedUser}
          setAllCards={setAllCards} allCards= {allCards}/>} />
      </Routes>
  </BrowserRouter> */}
  
}

export default App;