import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface IUserData {
  login: string,
  avatar_url: string,
  name: string,
  location: string,
  id: number,
  followers: number,
  public_repos: number
}

interface IProps {
  userData: IUserData
}

const HistoryCard: React.FC<IProps> = ({ userData }: IProps) => (
  <div className="historycard">
    <Link
      to={{
        pathname: '/profile',
        state: { userData },
      }}
    >
      <img src={userData.avatar_url} alt="Avatar" />
    </Link>
    <p>{userData.name}</p>
    <p>
      @
      {userData.login}
    </p>
    <p>{userData.location}</p>
  </div>
);

export default HistoryCard;
