import React from 'react';
import { Container, Img } from './Styles';

const index = (props) => {
  return (
    <Container {...props}>
      <Img src='https://avatars.doist.com/?fullName=Emdpro&email=emdprostudio10%40gmail.com&size=195&bg=ffffff' />
    </Container>
  );
};

export default index;
