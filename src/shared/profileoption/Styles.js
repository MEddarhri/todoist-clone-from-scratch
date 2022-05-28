import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 5px;
  padding-left: 10px;
  border-radius: 4px;
  width: 100%;
  & > * + * {
    margin-left: 10px;
  }
  &:hover {
    background-color: #0001;
  }
`;

export const Title = styled.p`
  font-size: 13px;
  font-weight: 300;
`;
