import React from 'react';
import { Container, Title } from './Styles';

const index = ({ children, title, color }) => {
  return (
    <Container>
      {children}
      <Title color={color}>{title}</Title>
    </Container>
  );
};

export default index;
