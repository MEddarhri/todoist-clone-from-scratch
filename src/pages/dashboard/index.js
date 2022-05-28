import React, { useEffect, useRef, useState } from 'react';
import AppNav from 'shared/appnav';
import Sidebar from 'shared/sidebar';
import ButtonDashboard from 'shared/dashboardbutton';
import Task from 'shared/task';
import AddTaskButton from 'shared/addtaskbutton';
import EmptyTaskState from 'shared/emptytaskstate';
import {
  Container,
  InsideTaskArea,
  MainContainer,
  TaskArea,
  TasksTitleContainer,
  TasksTitle,
  TasksContainer,
  AddTaskOverlay,
  AddTaskContainer,
  AddTaskFirstPart,
  AddTaskTitleInput,
  AddTaskDescription,
  AddTaskFirstPartOptions,
  ButtonOptionsContainerLeft,
  ButtonOptionsContainerRight,
  AddTaskSecondPart,
  SumbitButtonAddTask,
  DeleteTaskOverlay,
  DeleteTaskPara,
  DeleteTaskTitle,
  DeleteTaskContainer,
  DeleteTaskContButton,
} from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import { BsThreeDots } from 'react-icons/bs';
import { CgCalendarToday } from 'react-icons/cg';
import { BsVoicemail } from 'react-icons/bs';
import { MdOutlineLabel } from 'react-icons/md';
import { BsFillFlagFill } from 'react-icons/bs';
import { GiAlarmClock } from 'react-icons/gi';
import {
  addTaskToggle,
  deleteTaskToggle,
  editTaskToggle,
  setSyncTodo,
  setTaskToEdit,
} from 'features/toggleSlice';
import { setAllTodo } from 'features/allTodoSlice';
import API from 'API';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Index = () => {
  const addTaskRef = useRef(null);
  const editTaskRef = useRef(null);
  const deleteTaskRef = useRef(null);
  const sideBar = useSelector((state) => state.toggle.sideBar);
  const addTask = useSelector((state) => state.toggle.addTask);
  const deleteTask = useSelector((state) => state.toggle.deleteTask);
  const editTask = useSelector((state) => state.toggle.editTask);
  const taskToDelete = useSelector((state) => state.toggle.taskToDelete);
  const taskToEdit = useSelector((state) => state.toggle.taskToEdit);
  const syncTodo = useSelector((state) => state.toggle.syncTodo);
  const allTodo = useSelector((state) => state.todos.allTodo);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [taskDetails, setTaskDetails] = useState({
    title: '',
    description: '',
    date_created: new Date(),
  });

  const [editDetails, setEditDetails] = useState({
    title: '',
    description: '',
    date_created: null,
  });

  const autoExpandTextArea = (e) => {
    setTimeout(function () {
      e.target.style.cssText = 'height:min-content; padding:0';
      e.target.style.cssText = 'height:' + e.target.scrollHeight + 'px';
    }, 0);
  };

  const handleCloseAddTask = (e) => {
    if (addTaskRef.current && e.target.contains(addTaskRef.current)) {
      dispatch(addTaskToggle());
    }
  };

  const handleCloseEditTask = (e) => {
    if (editTaskRef.current && e.target.contains(editTaskRef.current)) {
      dispatch(editTaskToggle());
      setEditDetails({ title: '', description: '', date_created: '' });
    }
  };
  const handleCloseDeleteTask = (e) => {
    if (deleteTaskRef.current && e.target.contains(deleteTaskRef.current)) {
      dispatch(deleteTaskToggle());
    }
  };

  const handleChangeTaskDetails = (e) => {
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
  };

  const handleChangeTaskToEdit = (e) => {
    dispatch(setTaskToEdit({ ...taskToEdit, [e.target.name]: e.target.value }));
  };
  //!handle Add Task
  const handleAddTask = async () => {
    try {
      dispatch(addTaskToggle());

      await API.post('/api/todo/addtodo', taskDetails, {
        headers: {
          Authorization: 'Bearer ' + user.details.accessToken,
        },
      });
      dispatch(setSyncTodo());
      setTaskDetails({
        title: '',
        description: '',
        date_created: new Date(),
      });
    } catch (error) {
      console.log(error);
    }
  };
  //!handle Edit Task
  const handleEditTask = async () => {
    try {
      dispatch(editTaskToggle());
      await API.put(`/api/todo/${taskToEdit.todo_id}`, taskToEdit, {
        headers: {
          Authorization: 'Bearer ' + user.details.accessToken,
        },
      });
      dispatch(setSyncTodo());
    } catch (error) {
      console.log(error);
    }
  };

  //! handle delete

  const handleDeleteTask = async () => {
    try {
      dispatch(deleteTaskToggle());
      await API.delete(`/api/todo/${taskToDelete.todo_id}`, {
        headers: {
          Authorization: 'Bearer ' + user.details.accessToken,
        },
      });
      dispatch(setSyncTodo());
    } catch (error) {
      console.log(error);
    }
  };

  //!get AllTodo
  useEffect(() => {
    const getAllTodo = async () => {
      const res = await API.get('/api/todo/alltodos', {
        headers: {
          Authorization: 'Bearer ' + user.details.accessToken,
        },
      });
      dispatch(setAllTodo(res.data.AllTodos));
    };
    getAllTodo();
  }, [syncTodo]);

  //!custom input date
  const CustomInputDate = React.forwardRef(({ value, onClick }, ref) => (
    <div style={{ marginRight: '10px' }} onClick={onClick} ref={ref}>
      <AddTaskButton title={'Today'} color='#058527'>
        <CgCalendarToday color='#058527' size={'17px'} />
      </AddTaskButton>
    </div>
  ));

  return (
    <Container>
      {addTask && (
        <AddTaskOverlay onClick={handleCloseAddTask}>
          <AddTaskContainer ref={addTaskRef}>
            <AddTaskFirstPart>
              <AddTaskTitleInput
                placeholder='Task Name'
                name='title'
                value={taskDetails.title}
                onChange={handleChangeTaskDetails}
              />
              <AddTaskDescription
                placeholder='Description'
                onKeyDown={autoExpandTextArea}
                name='description'
                value={taskDetails.description}
                onChange={handleChangeTaskDetails}
              />
              <AddTaskFirstPartOptions>
                <ButtonOptionsContainerLeft>
                  <DatePicker
                    selected={new Date(taskDetails.date_created)}
                    onChange={(date) => {
                      setTaskDetails({
                        ...taskDetails,
                        date_created: parseInt(date.getTime()),
                      });
                    }}
                    customInput={<CustomInputDate />}
                    showTimeInput
                  />
                  <AddTaskButton title='Mailbox'>
                    <BsVoicemail color='#246fe0' size={'18px'} />
                  </AddTaskButton>
                </ButtonOptionsContainerLeft>
                <ButtonOptionsContainerRight>
                  <ButtonDashboard>
                    <MdOutlineLabel
                      style={{ transform: 'rotateZ(-45deg)' }}
                      color='#0007'
                      size={'22px'}
                    />
                  </ButtonDashboard>
                  <ButtonDashboard>
                    <BsFillFlagFill color='#0007' size='18px' />
                  </ButtonDashboard>
                  <ButtonDashboard>
                    <GiAlarmClock color='#0007' size='24px' />
                  </ButtonDashboard>
                </ButtonOptionsContainerRight>
              </AddTaskFirstPartOptions>
            </AddTaskFirstPart>
            <AddTaskSecondPart>
              <SumbitButtonAddTask
                color='#fff'
                bgColor='#db4c3f'
                hoverBgColor='#b03d32'
                disabled={
                  taskDetails.title.length == 0 ||
                  taskDetails.description.length == 0
                }
                disableButton={
                  taskDetails.title.length == 0 ||
                  taskDetails.description.length == 0
                }
                onClick={handleAddTask}
              >
                Add task
              </SumbitButtonAddTask>
              <SumbitButtonAddTask
                color='#0007'
                bgColor='#0001'
                hoverBgColor='#0002'
                onClick={() => dispatch(addTaskToggle())}
              >
                Cancel
              </SumbitButtonAddTask>
            </AddTaskSecondPart>
          </AddTaskContainer>
        </AddTaskOverlay>
      )}
      {deleteTask && (
        <DeleteTaskOverlay onClick={handleCloseDeleteTask}>
          <DeleteTaskContainer ref={deleteTaskRef}>
            <DeleteTaskPara>
              Are you sure you want to delete
              <DeleteTaskTitle>{taskToDelete.title}?</DeleteTaskTitle>
            </DeleteTaskPara>
            <DeleteTaskContButton>
              <SumbitButtonAddTask
                onClick={handleDeleteTask}
                color='#fff'
                bgColor='#db4c3f'
                hoverBgColor='#b03d32'
              >
                Delete
              </SumbitButtonAddTask>
              <SumbitButtonAddTask
                color='#0007'
                bgColor='#0001'
                hoverBgColor='#0002'
                onClick={() => dispatch(deleteTaskToggle())}
              >
                Cancel
              </SumbitButtonAddTask>
            </DeleteTaskContButton>
          </DeleteTaskContainer>
        </DeleteTaskOverlay>
      )}
      {editTask && (
        <AddTaskOverlay onClick={handleCloseEditTask}>
          <AddTaskContainer ref={editTaskRef}>
            <AddTaskFirstPart>
              <AddTaskTitleInput
                placeholder='Task Name'
                name='title'
                value={taskToEdit.title}
                onChange={handleChangeTaskToEdit}
              />
              <AddTaskDescription
                placeholder='Description'
                onKeyDown={autoExpandTextArea}
                name='description'
                value={taskToEdit.description}
                onChange={handleChangeTaskToEdit}
              />
              <AddTaskFirstPartOptions>
                <ButtonOptionsContainerLeft>
                  <DatePicker
                    selected={new Date(taskToEdit.date_created)}
                    onChange={(date) => {
                      dispatch(
                        setTaskToEdit({
                          ...taskToEdit,
                          date_created: parseInt(date.getTime()),
                        })
                      );
                    }}
                    customInput={<CustomInputDate />}
                    showTimeInput
                  />
                  <AddTaskButton title='Mailbox'>
                    <BsVoicemail color='#246fe0' size={'18px'} />
                  </AddTaskButton>
                </ButtonOptionsContainerLeft>
                <ButtonOptionsContainerRight>
                  <ButtonDashboard>
                    <MdOutlineLabel
                      style={{ transform: 'rotateZ(-45deg)' }}
                      color='#0007'
                      size={'22px'}
                    />
                  </ButtonDashboard>
                  <ButtonDashboard>
                    <BsFillFlagFill color='#0007' size='18px' />
                  </ButtonDashboard>
                  <ButtonDashboard>
                    <GiAlarmClock color='#0007' size='24px' />
                  </ButtonDashboard>
                </ButtonOptionsContainerRight>
              </AddTaskFirstPartOptions>
            </AddTaskFirstPart>
            <AddTaskSecondPart>
              <SumbitButtonAddTask
                color='#fff'
                bgColor='#db4c3f'
                hoverBgColor='#b03d32'
                disabled={
                  taskToEdit.title.length == 0 ||
                  taskToEdit.description.length == 0
                }
                disableButton={
                  taskToEdit.title.length == 0 ||
                  taskToEdit.description.length == 0
                }
                onClick={handleEditTask}
              >
                Edit task
              </SumbitButtonAddTask>
              <SumbitButtonAddTask
                color='#0007'
                bgColor='#0001'
                hoverBgColor='#0002'
                onClick={() => dispatch(editTaskToggle())}
              >
                Cancel
              </SumbitButtonAddTask>
            </AddTaskSecondPart>
          </AddTaskContainer>
        </AddTaskOverlay>
      )}
      <AppNav />
      <MainContainer>
        <Sidebar />
        <TaskArea sideBar={sideBar}>
          <InsideTaskArea>
            <TasksTitleContainer>
              <TasksTitle>Mailbox</TasksTitle>
              <ButtonDashboard>
                <BsThreeDots size={'22px'} color='#0005' />
              </ButtonDashboard>
            </TasksTitleContainer>
            <TasksContainer>
              {allTodo.length == 0 && (
                <EmptyTaskState
                  showButton={true}
                  sentence='All tasks due today will show up here.'
                />
              )}
              {allTodo.length > 0 &&
                allTodo.map((todo, i) => (
                  <Task
                    key={i}
                    title={todo.title}
                    description={todo.description}
                    date={todo.date_created}
                    todo_id={todo.todo_id}
                    setSyncTodo={setSyncTodo}
                  />
                ))}
            </TasksContainer>
          </InsideTaskArea>
        </TaskArea>
      </MainContainer>
    </Container>
  );
};

export default Index;
