import React from 'react';
import dateFormat from 'dateformat';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Date,
  Description,
  LeftContainer,
  RightContainer,
  TaskTitle,
  UndoButton,
} from './Styles';
import API from 'API';
import { setSyncTodo } from 'features/toggleSlice';

const Index = ({ title, description, date, todo_id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleUndoTask = async () => {
    try {
      await API.put(`/api/todo/undo/${todo_id}`, null, {
        headers: { Authorization: 'Bearer ' + user.details.accessToken },
      });
      dispatch(setSyncTodo());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <LeftContainer>
        <TaskTitle>{title}</TaskTitle>
        <Description>{description}</Description>
        <Date>{dateFormat(parseInt(date), 'mmm dd , HH:MM TT')}</Date>
      </LeftContainer>
      <RightContainer>
        <UndoButton onClick={handleUndoTask}>Undo</UndoButton>
      </RightContainer>
    </Container>
  );
};

export default Index;
