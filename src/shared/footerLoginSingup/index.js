import React from 'react';
import Anchor from 'shared/anchor';
import { Footer, Content } from './Styles';

const index = ({ content, anchorContent }) => {
  return (
    <Footer>
      <Content>{content}</Content>

      <Anchor
        href={`${anchorContent == 'Sign up' ? '/register' : '/login'}`}
        size='12px'
      >
        {anchorContent}
      </Anchor>
    </Footer>
  );
};

export default index;
