import React from 'react';
import './styles.css';

const RepositoryCard: React.FC = () => (
  <div className="repositorycard">
    <a href="https://github.com/gabriel-paiva/gota"><h1>Gota</h1></a>
    <p>
      <strong>Linguagem:</strong>
      {' '}
      Javascript
    </p>
    <p>
      <strong>Criado em:</strong>
      {' '}
      66/66/66
    </p>
    <p>
      <strong>Última atualização:</strong>
      {' '}
      66/66/66
    </p>
    <p>Calculadora de tarifas de água do Brasil.</p>

  </div>
);

export default RepositoryCard;
