import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: ${(props) => (props.sideBar ? '0' : '-300px')};
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: #fafafa;
  padding: 78px 10px 0 50px;
  transition: left 300ms ease-in-out;
  z-index: 90;
  @media (max-width: 768px) {
    padding: 78px 10px 0 20px;
  }
`;

export const OptionsContainer = styled.div`
  margin-bottom: 50px;
`;

export const ProjectContainer = styled.div`
  margin-bottom: 20px;
`;

export const ProjectTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 20px;
  & > * + * {
    margin-left: 15px;
  }
`;

export const ProjectTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  margin-right: auto;
`;

export const ToggleProjects = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.project ? 'rotate(90deg)' : 'rotate(0)')};
  transition: transform 200ms ease;
`;
export const AddProject = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 3px;
  &:hover {
    background-color: #0001;
  }
`;

export const ProjectOptionsContainer = styled.div`
  overflow-y: hidden;
  transition: max-height 200ms ease;
  height: auto;
  max-height: 1000px;
`;
