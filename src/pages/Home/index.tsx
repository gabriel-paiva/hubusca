import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
// Services:
import api from '../../services/api';
// Components:
import Logo from '../../assets/hubusca-logo.png';
import UserCard from '../../components/UserCard';
import ErrorCard from '../../components/ErrorCard';

const Home: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [result, setResult] = useState(<div />);

  const addSearchingClass = () => {
    const form = document.getElementById('searchform');
    if (!form?.classList.contains('searching')) {
      form?.classList.add('searching');
    }
  };

  const makeSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    addSearchingClass();

    api.get(`/users/${username}`)
      .then((response) => {
        const userData = response.data;
        setResult(<UserCard userData={userData} />);

        const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
        searchHistory.push({ userData });
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      })
      .catch(() => setResult(<ErrorCard />));
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
          <Link to="/history"><button id="link" type="button">Ver Histórico</button></Link>
        </div>
      </form>
      {result}
    </div>
  );
};

export default Home;
