import React from 'react';
import './styles.css';

const UserCard: React.FC = () => {
  console.log('Card de Usuário');

  return (
    <div className="usercard">
      <div className="imagem" />
      <div className="data">
        <h1>Gabriel Paiva</h1>
        <p><strong>Usuário:</strong></p>
        <p>@gabriel-paiva</p>
        <div className="cssline" />
        <p><strong>Localização:</strong></p>
        <p>Distrito Federal</p>
        <div className="cssline" />
      </div>
    </div>
  );
};

export default UserCard;
