import React from 'react';
import { Anchor } from './Styles';

const index = (props) => {
  return <Anchor {...props}>{props.children}</Anchor>;
};

export default index;
