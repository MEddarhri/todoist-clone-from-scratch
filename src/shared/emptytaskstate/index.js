import { addTaskToggle } from 'features/toggleSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, EmptyStateSvg, Sentence } from './Styles';

const Index = ({ showButton, sentence }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <EmptyStateSvg />
      <Sentence size='18px' weight='300'>
        A preview of the day ahead
      </Sentence>
      <Sentence size='15px' color='#0007'>
        {sentence}
      </Sentence>
      {showButton && (
        <Button onClick={() => dispatch(addTaskToggle())}>Add task</Button>
      )}
    </Container>
  );
};

export default Index;
