import React from 'react';
import './styles.css';

interface IRepositoryData {
  name: string,
  html_url: string,
  language: string,
  created_at: string,
  updated_at: string,
  description: string,
}

interface IProps {
  repository: IRepositoryData
}

const RepositoryCard: React.FC<IProps> = ({ repository }: IProps) => {
  console.log(repository);
  return (
    <div className="repositorycard">
      <a href={repository.html_url}><h1>{repository.name}</h1></a>
      <p>
        <strong>Linguagem:</strong>
        {` ${repository.language || 'Não determinada.'}`}
      </p>
      <p>
        <strong>Criado em:</strong>
        {` ${repository.created_at}`}
      </p>
      <p>
        <strong>Última atualização:</strong>
        {` ${repository.updated_at}`}
      </p>
      <p>{repository.description}</p>

    </div>
  );
};

export default RepositoryCard;
