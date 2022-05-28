import React, { useEffect, useRef, useState } from 'react';
import AppNav from 'shared/appnav';
import Sidebar from 'shared/sidebar';
import ButtonDashboard from 'shared/dashboardbutton';
import TaskCompleted from 'shared/taskcompleted';
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
  setTaskToEdit,
  setSyncTodo,
} from 'features/toggleSlice';
import API from 'API';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setAllCompletedTodo } from 'features/allTodoSlice';

const Index = () => {
  const addTaskRef = useRef(null);
  const sideBar = useSelector((state) => state.toggle.sideBar);
  const addTask = useSelector((state) => state.toggle.addTask);
  const syncTodo = useSelector((state) => state.toggle.syncTodo);
  const user = useSelector((state) => state.user.value);
  const allCompletedTodo = useSelector((state) => state.todos.allCompletedTodo);
  const dispatch = useDispatch();
  const [taskDetails, setTaskDetails] = useState({
    title: '',
    description: '',
    date_created: new Date(),
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

  const handleChangeTaskDetails = (e) => {
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
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

  //!get AllTodo
  useEffect(() => {
    const getAllTodo = async () => {
      const res = await API.get('/api/todo/alltodos/completed', {
        headers: {
          Authorization: 'Bearer ' + user.details.accessToken,
        },
      });
      dispatch(setAllCompletedTodo(res.data.AllTodos));
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

      <AppNav />
      <MainContainer>
        <Sidebar />
        <TaskArea sideBar={sideBar}>
          <InsideTaskArea>
            <TasksTitleContainer>
              <TasksTitle>Completed</TasksTitle>
              <ButtonDashboard>
                <BsThreeDots size={'22px'} color='#0005' />
              </ButtonDashboard>
            </TasksTitleContainer>
            <TasksContainer>
              {allCompletedTodo.length == 0 && (
                <EmptyTaskState
                  showButton={false}
                  sentence='All completed tasks due today will show up here.'
                />
              )}
              {allCompletedTodo.length > 0 &&
                allCompletedTodo.map((todo, i) => (
                  <TaskCompleted
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
