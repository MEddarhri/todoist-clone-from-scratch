import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid #0001;
  padding: 10px 0 5px 0;
  @media (min-width: 1024px) {
    button {
      opacity: 0;
      visibility: hidden;
    }
    &:hover button {
      opacity: 1;
      visibility: visible;
      cursor: pointer;
    }
  }
`;

export const FirstPart = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 10px;
  }
`;
export const Circle = styled.div`
  position: relative;
  z-index: 50;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #0004;
  transition: all 200ms ease;
  cursor: pointer;
  &:hover {
    background-color: #0001;
    &::after {
      display: block;
    }
  }

  &::after {
    content: '';
    display: none;
    position: absolute;
    width: 8px;
    height: 3px;
    border-left: 1px solid #0003;
    border-bottom: 1px solid #0003;
    top: 6px;
    left: 5px;
    transform: rotate(-45deg);
  }
`;

export const TaskTitle = styled.h3`
  font-size: 14px;
  font-weight: 300;
  margin-right: auto;
`;

export const SecondPart = styled.div`
  padding: 0 0 5px 30px;
`;

export const TaskDate = styled.p`
  display: flex;
  align-items: center;

  color: #d1453b;
  & > * + * {
    margin-left: 5px;
  }
`;

export const Date = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #0008;
`;
