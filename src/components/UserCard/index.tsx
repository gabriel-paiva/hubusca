import React from 'react';
import './styles.css';

interface IUserData {
  login: string,
  avatarUrl: string,
  name: string,
  location: string
}

interface IProps {
  userData: IUserData
}

const UserCard: React.FC<IProps> = ({ userData }: IProps) => {
  console.log('Card de Usuário');

  return (
    <div className="usercard">
      <img src={`${userData.avatarUrl}.jpeg`} alt="Avatar" />
      <div className="data">
        <h1>{userData.name}</h1>
        <p><strong>Usuário:</strong></p>
        <p>
          @
          {userData.login}
        </p>
        <div className="cssline" />
        <p><strong>Localização:</strong></p>
        <p>{userData.location}</p>
        <div className="cssline" />
      </div>
    </div>
  );
};

export default UserCard;
