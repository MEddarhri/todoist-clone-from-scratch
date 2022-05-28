import styled from 'styled-components';

export const Anchor = styled.a`
  text-decoration: underline;
  color: #6c777a;
  font-size: ${(props) => {
    return props.size;
  }};
`;
