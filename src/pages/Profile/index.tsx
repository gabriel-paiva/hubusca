import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import RepositoryCard from '../../components/RepositoryCard';

interface IRepositoryData {
  name: string,
  html_url: string,
  language: string,
  created_at: string,
  updated_at: string,
  description: string,
}

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

  const [repositories, setRepositories] = useState<IRepositoryData[]>([]);

  useEffect(() => {
    api.get(`/users/${userData.login}/repos`)
      .then((response) => {
        const repositoryData = response.data;
        setRepositories(repositoryData);
      });
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
          {repositories.map((repository) => <RepositoryCard repository={repository} />)}
        </div>
      </div>
    </div>
  );
};

export default Profile;
