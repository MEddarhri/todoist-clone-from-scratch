import React from 'react';
import { Navbar } from './Styles';
import Logo from 'shared/logo';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <Navbar>
      <Link to='/'>
        <Logo />
      </Link>
    </Navbar>
  );
};

export default index;
