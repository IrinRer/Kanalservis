import React from 'react';

interface IProps {
  title: string;
}

const TitleComponent: React.FC<IProps> = ({ title }) => {
  return <span>{title}</span>;
};

export default TitleComponent;
