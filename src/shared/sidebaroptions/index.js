import React from 'react';
import { Container, Number, Title } from './Styles';

const index = ({ primary = false, children, title, num }) => {
  return (
    <Container primary={primary}>
      {children}
      <Title>{title}</Title>
      <Number>{num}</Number>
    </Container>
  );
};

export default index;
