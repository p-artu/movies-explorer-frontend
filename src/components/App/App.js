import React from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import {MainApi} from '../../utils/MainApi.js';
import {MoviesApi} from '../../utils/MoviesApi.js';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import MenuPopup from '../MenuPopup/MenuPopup.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import * as auth from '../../auth.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import searchMovies from '../../utils/searchMovies';

function App() {
  const {pathname} = useLocation();
  const history = useHistory();
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({email: '', name: ''});
  const [savedCards, setSavedCards] = React.useState([]);
  const [foundSavedCards, setFoundSavedCards] = React.useState([]);
  const [savedKeyWord, setSavedKeyWord] = React.useState('');
  const [savedCardsId, setSavedCardsId] = React.useState([]);
  const [cards, setCards] = React.useState(localStorage.getItem('foundMovies') ? JSON.parse(localStorage.getItem('foundMovies')) : []);
  const [isSearchLoading, setIsSearchLoading] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isProfileUpdateError, setIsProfileUpdateError] = React.useState('');
  const [isLoginError, setIsLoginError] = React.useState('');
  const [isRegisterError, setIsRegisterError] = React.useState('');
  const [isUpdateSuccessful, setIsUpdateSuccessful] = React.useState(false);
  const [isShortFilmChecked, setIsShortFilmChecked] = React.useState(true);
  const [isShortSavedFilmChecked, setIsShortSavedFilmChecked] = React.useState(true);
  const [isOnlyCheckedSearch, setIsOnlyCheckedSearch] = React.useState(false);

  React.useEffect(() => {
    tokenCheck();
    MainApi.getAllInfo()
    .then(([user, movies]) => {
      setCurrentUser(user);
      setSavedCards(movies);
      setSavedCardsId(movies.map(i => i.movieId));
    })
    .catch(err => {
      console.error(err);
    });
  }, []);
  React.useEffect(() => {
    setIsNotFound(false);
  }, [loggedIn]);
  React.useEffect(() => {
    setIsUpdateSuccessful(false);
  }, [pathname]);
  React.useEffect(() => {
    if (savedKeyWord) {
      handleSearchSavedMovies(savedKeyWord);
    }
  }, [savedCards]);
  React.useEffect(() => {
    if (savedCards.length || foundSavedCards.length) {
      handleSearchSavedMovies(savedKeyWord);
    }
  }, [isShortSavedFilmChecked]);
  React.useEffect(() => {
    if (localStorage.getItem('foundMovies')) {
      handleSearchMoviesChecked();
    }
  }, [isShortFilmChecked]);

  function tokenCheck() {
    if (localStorage.getItem('token')){
      const token = localStorage.getItem('token');
      if (token){
        auth.getContent(token).then(res => {
          if (res){
            setLoggedIn(true);
          }
        });
      }
    }
  }

  function signOut() {
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    setCards([]);
    setCurrentUser({email: '', name: ''});
    setLoggedIn(false);
    history.push('/');
  }
  function openMenu() {
    setIsMenuPopupOpen(true);
  }
  function closeMenu() {
    setIsMenuPopupOpen(false);
  }
  function handleRegisterSubmit(email, password, name) {
    auth.register(email, password, name)
    .then(res => {
      handleLoginSubmit(email, password);
    })
    .catch(err => {
      console.error(`Ошибка: ${err.message}`);
      setIsRegisterError(err);
    });
  }
  function handleLoginSubmit(email, password) {
    auth.authorize(email, password)
    .then(res => {
      localStorage.setItem('token', res.token);
      setLoggedIn(true);
      history.push('/movies');
    })
    .catch(err => {
      console.error(`Ошибка: ${err.message}`);
      setIsLoginError(err);
    });
  }
  function handleUpdateUser(email, name) {
    MainApi.editUserInfo(email, name)
    .then(res => {
      setCurrentUser(res);
      setIsUpdateSuccessful(true);
    })
    .catch(err => {
      console.error(`Ошибка: ${err.message}`);
      setIsProfileUpdateError(err);
    });
  }
  async function handleSearchMovies(keyWord) {
    setIsSearchError(false);
    setIsSearchLoading(true);
    setIsNotFound(false);
    try {
      let movies = JSON.parse(localStorage.getItem('movies'));
      if (!movies) {
        const films = await MoviesApi.getMovies();
        localStorage.setItem('movies', JSON.stringify(films));
        movies = JSON.parse(localStorage.getItem('movies'));
      }
      const cards = searchMovies(movies, keyWord);
      localStorage.setItem('foundMovies', JSON.stringify(cards));
      handleSearchMoviesChecked();
    } catch(err) {
      console.error(err);
      setIsSearchError(true);
    } finally {
      setIsSearchLoading(false);
    }
  }
  function handleSearchMoviesChecked() {
    const isShort = isShortFilmChecked;
    const cards = JSON.parse(localStorage.getItem('foundMovies'));
    const shortCards = cards.filter(movie => (movie.duration > (isShort ? 0 : 40)));
    setCards(shortCards);
    setIsNotFound(!shortCards.length);
  }
  function handleSearchSavedMovies(keyWord) {
    setIsOnlyCheckedSearch(false);
    if (!keyWord) {
      setIsOnlyCheckedSearch(true);
    }
    setSavedKeyWord(keyWord);
    const cards = searchMovies(savedCards, keyWord, isShortSavedFilmChecked);
    setFoundSavedCards(cards);
  }
  function handleSaveMovie(card) {
    MainApi.saveMovie(card)
      .then(c => {
        setSavedCardsId([...savedCardsId, card.id]);
        setSavedCards([...savedCards, c]);
      })
      .catch(err => {
        console.error(err);
      });
  }
  function deleteMovie(card) {
    let movieId = savedCards.filter(f => f.movieId === card.id)[0];
    if (movieId) {
      movieId = movieId._id;
    }
    MainApi.deleteMovie(card.owner ? card._id : movieId)
      .then(c => {
        setSavedCards(savedCards.filter(film => film._id !== c._id));
        setSavedCardsId(savedCardsId.filter(id => id !== c.movieId));
      })
      .catch(err => {
        console.error(err);
      });
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header onOpen={openMenu} loggedIn={loggedIn} />
        <Switch>
          <ProtectedRoute
            exact
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            cards={cards}
            savedCardsId={savedCardsId}
            handleSubmit={handleSearchMovies}
            isLoading={isSearchLoading}
            isError={isSearchError}
            isNotFound={isNotFound}
            handleSaveMovie={handleSaveMovie}
            deleteMovie={deleteMovie}
            handleChange={setIsShortFilmChecked}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            cards={(savedKeyWord || isOnlyCheckedSearch) ? (foundSavedCards.length ? foundSavedCards : 'NotFound') : savedCards}
            deleteMovie={deleteMovie}
            handleSubmit={handleSearchSavedMovies}
            handleChange={setIsShortSavedFilmChecked}
          />
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            signOut={signOut}
            handleSubmit={handleUpdateUser}
            isError={isProfileUpdateError}
            setError={setIsProfileUpdateError}
            isSuccess={isUpdateSuccessful}
          />
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/signin">
            {!loggedIn ? (
              <Login handleSubmit={handleLoginSubmit} isError={isLoginError} setError={setIsLoginError} />
            ) : (
              <Redirect to="/movies" />
            )}
          </Route>
          <Route exact path="/signup">
            {!loggedIn ? (
              <Register handleSubmit={handleRegisterSubmit} isError={isRegisterError} setError={setIsRegisterError} />
            ) : (
              <Redirect to="/movies" />
            )}
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
        <MenuPopup isOpen={isMenuPopupOpen} onClose={closeMenu} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
