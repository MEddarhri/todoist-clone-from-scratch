import React from 'react';
import Anchor from 'shared/anchor';
import { Policy } from './Styles';

const index = () => {
  return (
    <Policy>
      {`By continuing with Google, Apple, or Email, you agree to Todoist's `}
      <Anchor size='14px'>Terms of Service</Anchor>
      {` and `}
      <Anchor size='14px'> Privacy Policy</Anchor>.
    </Policy>
  );
};

export default index;
