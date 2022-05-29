import styled from 'styled-components';

export const Container = styled.li`
  padding: 25px 20px;
  cursor: pointer;
  font-size: 17px;
  color: #575757;
  border-bottom: 2px solid transparent;
  transition: background 150ms ease-in;
  user-select: none;
  &:hover {
    background-color: #fafafa;
    border-bottom: 2px solid #e44232;
  }
`;
