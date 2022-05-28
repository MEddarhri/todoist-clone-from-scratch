import styled from 'styled-components';

export const Navbar = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
  padding: 8px 40px;
  background-color: #db4c3f;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    padding: 8px 20px;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 3px;
  color: #fff;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: #ffffff33;
  }
  svg path {
    stroke: #fff;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: #ffffff33;
  padding: 5px;
  transition: all 0.1s ease-in;
  & > * + * {
    margin-left: 5px;
  }
  &:hover {
    background-color: #fff;
  }

  &:hover svg,
  &:hover input::placeholder {
    color: gray !important;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  width: 150px;
  &::placeholder {
    color: white;
    font-weight: 200;
    font-size: 13px;
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileOptionsCont = styled.div`
  position: absolute;
  top: 45px;
  right: 30px;
  width: 100%;
  max-width: 280px;
  border-radius: 8px;
  border: 1px solid #0003;
  box-shadow: 1px 2px 20px #0003;
  background-color: #fff;
  z-index: 100;
  transition: opacity 200ms ease;
  ${(props) =>
    props.value
      ? 'opacity:opacity:1;visibility:visible;'
      : 'opacity:opacity:0;visibility:hidden;'}
`;
export const SettingButton = styled.button`
  margin: 5px;
  width: -webkit-fill-available;
  border-radius: 4px;
  padding-left: 10px;
  &:hover {
    background-color: #0001;
  }
`;
export const FirstPart = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 20px;
  }
`;

export const NameAndEmailCont = styled.div`
  padding-right: 20px;
`;

export const SecondPart = styled.div``;
export const Name = styled.h4`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 2px;
  text-align: left;
  text-transform: capitalize;
`;
export const Email = styled.p`
  font-size: 13px;
  font-weight: 300;
  text-align: left;
`;
export const SettingOption = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 2px 0;
  & > * + * {
    margin-left: 5px;
  }
`;
export const SettingOptionTitle = styled.span`
  font-size: 13px;
  font-weight: 300;
  padding: 5px;
`;

export const ContainerOptionsProfile = styled.div`
  margin: 5px;
`;
