import styled from 'styled-components';

export const Container = styled.button`
  border: 1px solid #0002;
  border-radius: 5px;
  padding: 4px 5px;
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 4px;
  }

  &:hover {
    background-color: #0001;
  }
`;
export const Title = styled.span`
  font-size: 13px;
  font-weight: 300;
  color: ${(props) => props.color || '#000'};
`;
