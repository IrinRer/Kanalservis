import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 150px;
  height: 150px;
  float: left;
  margin-right: 30px;
`;

interface IProps {
  src: string;
}

const ImgComponenet: React.FC<IProps> = ({ src }) => {
  return <Img src={src} alt="photo_user" />;
};

export default ImgComponenet;
