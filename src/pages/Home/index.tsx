import React, { useState } from 'react';
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
  // const [userData, setUserData] = useState<{}>({});

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
        userData.avatarUrl = response.data.avatar_url;
        setResult(<UserCard userData={userData} />);
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
          <button id="link" type="button">Ver Histórico</button>
        </div>
      </form>
      {result}
    </div>
  );
};

export default Home;