import React from 'react';
import {
  Circle,
  Container,
  Date,
  Description,
  FirstPart,
  SecondPart,
  TaskDate,
  TaskTitle,
} from './Styles';
import ButtonDashboard from 'shared/dashboardbutton';
import { FiEdit3 } from 'react-icons/fi';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { BsCalendar2Check } from 'react-icons/bs';
import dateFormat from 'dateformat';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTaskToggle,
  setTaskToDelete,
  editTaskToggle,
  setTaskToEdit,
  setSyncTodo,
} from 'features/toggleSlice';
import API from 'API';

const Index = ({ description, title, date, todo_id }) => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleTaskCompleted = async () => {
    try {
      await API.put(`/api/todo/complete/${todo_id}`, null, {
        headers: { Authorization: 'Bearer ' + user.details.accessToken },
      });
      dispatch(setSyncTodo());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <FirstPart>
        <Circle onClick={handleTaskCompleted} />
        <TaskTitle>{title}</TaskTitle>
        <div
          onClick={() => {
            dispatch(editTaskToggle());
            dispatch(
              setTaskToEdit({
                title,
                description,
                date_created: parseInt(date),
                todo_id,
              })
            );
          }}
        >
          <ButtonDashboard>
            <FiEdit3 size={'20px'} color='#0004' />
          </ButtonDashboard>
        </div>

        <div
          onClick={() => {
            dispatch(deleteTaskToggle());
            dispatch(setTaskToDelete({ title, todo_id }));
          }}
        >
          <ButtonDashboard>
            <MdOutlineDeleteOutline size={'20px'} color='#0004' />
          </ButtonDashboard>
        </div>
      </FirstPart>
      <SecondPart>
        <Description>{description}</Description>
        <TaskDate>
          <BsCalendar2Check size='13px' />
          <Date>{dateFormat(parseInt(date), 'mmm dd , HH:MM TT')}</Date>
        </TaskDate>
      </SecondPart>
    </Container>
  );
};

export default Index;
