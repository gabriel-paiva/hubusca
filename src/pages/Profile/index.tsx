import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import RepositoryCard from '../../components/RepositoryCard';

interface IUserData {
  login: string,
  avatarUrl: string,
  name: string,
  location: string,
  id: number,
  followers: number,
  publicRepos: number
}

interface ILocationState {
    userData: IUserData;
}

const Profile: React.FC = () => {
  const location = useLocation<ILocationState>();
  const state = location.state as ILocationState;
  const { userData } = state;

  useEffect(() => {
    api.get(`/users/${userData.login}/repos`)
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="App">
      <div className="profile">
        <div className="userstats">
          <img src={userData.avatarUrl} alt="Avatar" />
          <p><strong>Nome:</strong></p>
          <p>{userData.name}</p>
          <p><strong>Usuário:</strong></p>
          <p>{`@${userData.login}`}</p>
          <p><strong>Localização:</strong></p>
          <p>{userData.location}</p>
          <p><strong>ID:</strong></p>
          <p>{userData.id}</p>
          <p><strong>Seguidores:</strong></p>
          <p>{userData.followers}</p>
          <p><strong>Repositórios Públicos:</strong></p>
          <p>{userData.publicRepos}</p>
        </div>
        <div className="cssline" />
        <div className="repositories">
          <h1>{`Repositórios de ${userData.name}`}</h1>
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
