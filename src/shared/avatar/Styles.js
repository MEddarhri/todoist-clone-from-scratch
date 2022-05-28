import styled from 'styled-components';

export const Container = styled.button`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
