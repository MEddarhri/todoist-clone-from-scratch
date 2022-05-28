import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => (props.primary ? '#eee' : 'transparent')};
  padding: 7px 15px 7px 7px;
  cursor: pointer;
  transition: background 0.1s ease-in-out;
  & > * + * {
    margin-left: 10px;
  }
  &:hover {
    background-color: #eee;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  margin-right: auto;
  color: #202020;
  font-weight: 300;
`;

export const Number = styled.span`
  font-size: 13px;
  color: #aaa;
`;
