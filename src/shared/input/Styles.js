import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  font-size: 17px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  border: 1px solid #edf2f3;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;

  font-size: 12px;
`;
