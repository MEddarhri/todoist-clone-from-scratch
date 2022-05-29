import React from 'react';
import {
  MainButton,
  MainContainer,
  MainParagraph,
  MainTitle,
  Navbar,
  NavLeft,
  NavListLeft,
  NavListRight,
  NavRight,
} from './Styles';
import Logo from 'shared/logo';
import NavOption from 'shared/homenavoptions';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <>
      <Navbar>
        <NavLeft>
          <Link to='/'>
            <Logo />
          </Link>
          <NavListLeft>
            <NavOption title='Features' />
            <NavOption title='Templates' />
            <NavOption title='For Teams' />
            <NavOption title='Resources' />
            <NavOption title='Pricing' />
          </NavListLeft>
        </NavLeft>
        <NavRight>
          <NavListRight>
            <Link to='/login'>
              <NavOption title='Log in' />
            </Link>
            <Link to='/register'>
              <NavOption title='Sign up' />
            </Link>
          </NavListRight>
        </NavRight>
      </Navbar>
      <MainContainer>
        <MainTitle>
          Organize your <br /> work and life, finally.
        </MainTitle>
        <MainParagraph>
          Become focused, organized, and calm with Todoist. <br /> The world’s
          #1 task manager and to-do list app.
        </MainParagraph>
        <Link to='/login'>
          <MainButton>Start for free</MainButton>
        </Link>
      </MainContainer>
    </>
  );
};

export default index;
