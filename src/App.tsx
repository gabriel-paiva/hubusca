import React, { useState } from 'react';
import './App.css';
// Services:
import api from './services/api';
// Components:
import Logo from './assets/hubusca-logo.png';
import UserCard from './components/UserCard';

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  const addSearchingClass = () => {
    const form = document.getElementById('searchform');
    if (!form?.classList.contains('searching')) {
      form?.classList.add('searching');
    }
  };

  const makeSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    addSearchingClass();

    api.get(`/users/${username}`).then((response) => console.log(response));
  };

  return (
    <div className="App">
      <form id="searchform">
        <img src={Logo} alt="Hubusca Logo" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Digite o nome do usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="buttons">
          <button
            id="search"
            type="submit"
            onClick={(e) => makeSearch(e)}
          >
            Pesquisar
          </button>
          <button id="link" type="button">Ver Histórico</button>
        </div>
      </form>
      <UserCard />
    </div>
  );
};

export default App;
