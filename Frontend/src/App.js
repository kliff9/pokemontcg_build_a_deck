import './index.css';
import './bootstrap/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faHome,  faShareAltSquare, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import CardsScreen from './Screens/CardsScreen';
import CardSlider from './componets/CardSlider';
import DeckScreen from './Screens/DeckScreen';
import LogInScreen from './Screens/LogInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import EditDeck from './Screens/EditDeck';


function App() {
  return (
    <React.Fragment>

        <header >
        <ul className="ul">
            <li className="li">
                <Link to="/">
                    <div className="icon">
                    <FontAwesomeIcon className="fa" icon= {faHome} aria-hidden="true" ></FontAwesomeIcon>
                    <FontAwesomeIcon className="fa" icon= {faHome} aria-hidden="true" ></FontAwesomeIcon>
                    </div>
                    <div className="name"><span data-text="Home">Home</span></div>
                </Link>
            </li>
            <li className="li">
                <Link to="/slider">
                    <div className="icon">
                    <FontAwesomeIcon className="fa" icon= {faShareAltSquare} aria-hidden="true" ></FontAwesomeIcon>
                    <FontAwesomeIcon className="fa" icon= {faShareAltSquare} aria-hidden="true" ></FontAwesomeIcon>
                    </div>
                    <div className="name"><span data-text="Social">Social</span></div>
                </Link>
            </li>

            <li className="li">
            <Link to="/mydecks">
                    <div className="icon">
                    <FontAwesomeIcon className="fa" icon= {faBookOpen} aria-hidden="true" ></FontAwesomeIcon>
                    <FontAwesomeIcon className="fa" icon= {faBookOpen} aria-hidden="true" ></FontAwesomeIcon>
                    </div>
                    <div className="name"><span data-text="My Decks">My Decks</span></div>
                </Link>
            </li>
            <li className="li">
            <Link to="/login">
                    <div className="icon">
                    <FontAwesomeIcon className="fa" icon= {faSignInAlt} aria-hidden="true" ></FontAwesomeIcon>
                    <FontAwesomeIcon className="fa" icon= {faSignInAlt} aria-hidden="true" ></FontAwesomeIcon>
                    </div>
                    <div className="name"><span data-text="Login">Login</span></div>
                </Link>
            </li>
        </ul>
  </header>
  <main>

  <Routes>

  <Route path="/" element={<HomeScreen />} exact></Route>
  <Route path="/cards" element={<CardsScreen />} ></Route>
  <Route path="/slider" element={<CardSlider />} ></Route>
  <Route path="/mydecks" element={<DeckScreen />} ></Route>
  <Route path="/login" element={<LogInScreen />} ></Route>
  <Route path="/Signup" element={<SignUpScreen />} ></Route>
  <Route path="/mydecks/:id" element={<EditDeck />} ></Route>

  
  </Routes>

  </main>


      </React.Fragment>

  );
}

export default App;
