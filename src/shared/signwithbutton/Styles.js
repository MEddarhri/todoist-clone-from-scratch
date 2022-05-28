import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid rgb(221, 226, 227);
  border-radius: 10px;
  background-color: white;
  color: black;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background 0.1s ease-in;
  &:hover {
    background-color: #e0e7e8;
  }
`;
