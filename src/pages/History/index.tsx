/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import './styles.css';
import HistoryCard from '../../components/HistoryCard';
import Header from '../../components/Header';

interface IUserData {
  login: string,
  avatar_url: string,
  name: string,
  location: string,
  id: number,
  followers: number,
  public_repos: number
}

interface ISearchPosition {
  userData: IUserData;
}

const History: React.FC = () => {
  const [history, setHistory] = useState<IUserData[]>([]);

  const deleteHistory = () => {
    localStorage.removeItem('searchHistory');
    setHistory([]);
  };

  useEffect(() => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const userDataArray = searchHistory.map((object: ISearchPosition) => object.userData).reverse();
    setHistory(userDataArray);
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="history">
        <div className="historytitle">
          <h1>Histórico</h1>
          <button onClick={deleteHistory} type="button">Limpar Histórico</button>
        </div>
        {history.map((user, index) => <HistoryCard key={index} userData={user} />)}
      </div>
    </div>
  );
};

export default History;
