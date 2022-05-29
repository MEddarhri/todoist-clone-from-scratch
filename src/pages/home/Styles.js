import styled from 'styled-components';

export const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 0 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 950px) {
    padding: 0 20px;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const NavListLeft = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: 20px;
  @media (max-width: 1250px) {
    display: none;
  }
`;
export const NavRight = styled.div`
  display: flex;
  align-items: center;
`;
export const NavListRight = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const MainContainer = styled.main`
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 50;
  padding: 0 20px;
  padding-top: 50px;

  & > * + * {
    margin-top: 20px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 60px;
  text-align: center;
  line-height: 65px;
  @media (max-width: 700px) {
    font-size: 35px;
    line-height: 38px;
  }
`;

export const MainParagraph = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 17px;
  }
`;

export const MainButton = styled.button`
  padding: 13px 18px;
  border-radius: 10px;
  background-color: #e44232;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  transition: all 150ms ease-in;
  &:hover {
    background-color: #b43226;
  }
`;
