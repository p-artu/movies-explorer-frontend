import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import ErrorPopup from '../ErrorPopup/ErrorPopup.js';
import MenuPopup from '../MenuPopup/MenuPopup.js';
import { cards, savecards } from '../../utils/constants.js';

function App() {
  const history = useHistory();
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);

  function signOut() {
    history.push('/signin');
  }
  function openMenu() {
    setIsMenuPopupOpen(true);
  }
  function closeMenu() {
    setIsMenuPopupOpen(false);
  }

  return (
    <div className="page">
      <Header onOpen={openMenu} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies cards={cards} />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies cards={savecards} />
        </Route>
        <Route exact path="/profile">
          <Profile signOut={signOut} />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
      </Switch>
      <Footer />
      <ErrorPopup />
      <MenuPopup isOpen={isMenuPopupOpen} onClose={closeMenu} />
    </div>
  );
}

export default App;
