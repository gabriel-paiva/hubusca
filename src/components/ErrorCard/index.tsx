import React from 'react';

import './styles.css';

const ErrorCard: React.FC = () => (
  <div className="errorcard">
    <h1>Usuário não encontrado!</h1>
    <p><strong>Digite um nome de usuário válido.</strong></p>
  </div>
);

export default ErrorCard;
