import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #0001;
  padding: 10px 0 5px 0;
`;

export const LeftContainer = styled.div``;

export const TaskTitle = styled.h3`
  font-size: 14px;
  font-weight: 300;
  margin-right: auto;
  margin-bottom: 4px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 5px 30px;
`;

export const Date = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: #d1453b;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #0008;
`;

export const UndoButton = styled.div`
  background-color: #fff;
  color: #d1453b;
  font-weight: 500;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
