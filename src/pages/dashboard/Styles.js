import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const AddTaskOverlay = styled.div`
  position: absolute;
  padding: 80px 20px 0 20px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 150;
  background-color: #0002;
`;
export const DeleteTaskOverlay = styled.div`
  position: absolute;
  padding: 80px 20px 0 20px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 150;
  background-color: #0002;
`;

export const AddTaskContainer = styled.div`
  width: 100%;
  max-width: 560px;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 2px 2px 25px 10px #0002;
`;

export const DeleteTaskContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;

  box-shadow: 2px 2px 25px 10px #0002;
`;

export const DeleteTaskPara = styled.p`
  font-size: 15px;
  text-align: left;
  padding: 30px 30px 0 30px;
`;
export const DeleteTaskTitle = styled.span`
  font-weight: 700;
  margin-left: 5px;
`;

export const DeleteTaskContButton = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px 30px 30px;
  padding-top: 20px;
  & > * + * {
    margin-left: 10px;
  }
`;

export const AddTaskFirstPart = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #0001;
`;

export const AddTaskTitleInput = styled.input`
  width: 100%;
  margin-bottom: 8px;
  &::placeholder {
    color: #0007;
    font-weight: 600;
    font-size: 13px;
  }
`;
export const AddTaskDescription = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  font-weight: 300;
  &::placeholder {
    color: #0005;
    font-size: 13px;
  }
  &:focus {
    outline: none;
  }
`;
export const AddTaskFirstPartOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonOptionsContainerLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonOptionsContainerRight = styled.div`
  display: flex;
  & > * + * {
    margin-left: 10px;
  }
`;

export const AddTaskSecondPart = styled.div`
  padding: 15px 20px;
  display: flex;
  & > * + * {
    margin-left: 10px;
  }
`;
export const SumbitButtonAddTask = styled.button`
  border-radius: 5px;
  background-color: ${(props) => props.bgColor || '#fff'};
  padding: 8px 12px;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.color || '#000'};
  &:hover {
    ${(props) => {
      if (props.disableButton) {
        return '';
      } else {
        return `background-color: ${props.hoverBgColor || '#fff'}`;
      }
    }}
  }
  ${(props) =>
    props.disableButton && 'cursor: not-allowed;background-color: #db4c3f66;'}
`;

SumbitButtonAddTask.defaultProps = {
  disableButton: false,
};

export const MainContainer = styled.div``;

export const TaskArea = styled.section`
  padding-top: 48px;
  padding-left: ${(props) => (props.sideBar ? '300px' : '0')};
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  transition: padding 300ms ease-in-out;
  overflow: hidden auto;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
export const InsideTaskArea = styled.div`
  padding-top: 40px;
  width: 70%;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const TasksTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TasksTitle = styled.h2`
  font-size: 19px;
  font-weight: 600;
`;

export const TasksContainer = styled.div`
  margin-top: 30px;
`;
