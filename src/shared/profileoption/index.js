import React from 'react';
import { Container, Title } from './Styles';

const index = ({ children, title }) => {
  return (
    <Container>
      {children}
      <Title>{title}</Title>
    </Container>
  );
};

export default index;
