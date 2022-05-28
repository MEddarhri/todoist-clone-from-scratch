import React from 'react';
import { Container, Input, Label } from './Styles';

const index = ({ name, placeHolder, label, type, value, change }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={change}
        name={name}
      />
    </Container>
  );
};

export default index;
