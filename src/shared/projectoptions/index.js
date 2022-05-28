import React from 'react';
import { Container, Number, Title } from './Styles';
import { GiPlainCircle } from 'react-icons/gi';

const index = ({ primary = false, title, num }) => {
  return (
    <Container primary={primary}>
      <GiPlainCircle size={'10px'} color='#0006' />
      <Title>{title}</Title>
      <Number>{num}</Number>
    </Container>
  );
};

export default index;
