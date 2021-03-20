import React from 'react';
import './App.css';
import Logo from './assets/hubusca-logo.png';

const App: React.FC = () => {
  console.log('Hello World');
  return (
    <div className="App">
      <form>
        <img src={Logo} alt="Hubusca Logo" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Digite o nome do usuário"
        />
        <div className="buttons">
          <button id="search" type="submit">Pesquisar</button>
          <button id="link" type="button">Ver Histórico</button>
        </div>
      </form>
    </div>
  );
};

export default App;
