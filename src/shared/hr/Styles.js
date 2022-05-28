import styled from 'styled-components';

export const Hori = styled.hr`
  color: ${(props) => props.color || '#edf2f3'};
  margin: ${(props) => props.margin || '30px'} 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.color || '#edf2f3'};
`;
