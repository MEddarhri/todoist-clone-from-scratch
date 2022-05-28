import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 10px;
  background-color: #db4c3f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 0;
  border: none;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;

  color: white;
  transition: background 0.1s ease-in;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: #c53727;
  }
`;
