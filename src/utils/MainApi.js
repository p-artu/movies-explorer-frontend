class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  async _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    const err = await res.json();
    return Promise.reject(err)
  }
  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
    .then(this._checkResponse)
  }
  saveMovie({
      country, director, duration, year, description, image, trailerLink, id, nameRU, nameEN
    })
  {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        country: country || 'null',
        director: director || 'null',
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailer: trailerLink ? (trailerLink.startsWith('https') ? trailerLink : 'https://www.youtube.com') : 'https://www.youtube.com',
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN: nameEN || 'null',
      })
    })
    .then(this._checkResponse)
  }
  editUserInfo(email, name) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({email, name})
    })
    .then(this._checkResponse)
  }
  getAllInfo() {
    return Promise.all([this.getUserInfo(), this.getSavedCards()]);
  }
  getSavedCards() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: 'GET',
    })
    .then(this._checkResponse)
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'GET',
    })
    .then(this._checkResponse)
  }
}

export const MainApi = new Api({
  baseUrl: 'https://api.p-artu.movies.nomoredomains.club',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});
