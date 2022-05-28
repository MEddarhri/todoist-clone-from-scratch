import React, { useRef } from 'react';

import {
  AddProject,
  Container,
  OptionsContainer,
  ProjectContainer,
  ProjectOptionsContainer,
  ProjectTitle,
  ProjectTitleContainer,
  ToggleProjects,
} from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import SideBarOption from 'shared/sidebaroptions';
import ProjectOption from 'shared/projectoptions';
import { BsVoicemail } from 'react-icons/bs';
import { BsCalendar2Date } from 'react-icons/bs';
import { VscCalendar } from 'react-icons/vsc';
import { MdOutlineWidgets } from 'react-icons/md';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { VscAdd } from 'react-icons/vsc';
import { TiInputChecked } from 'react-icons/ti';
import { projectToggle } from 'features/toggleSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setAllCompletedTodo } from 'features/allTodoSlice';

const Index = () => {
  const [project, setProject] = useState(true);
  const sideBar = useSelector((state) => state.toggle.sideBar);
  const allCompletedTodo = useSelector((state) => state.todos.allCompletedTodo);
  const allTodo = useSelector((state) => state.todos.allTodo);

  const dispatch = useDispatch();
  const projectRef = useRef(null);

  const handleToggleProjects = () => {
    if (project) {
      projectRef.current.style.maxHeight = 0;
      setProject(false);
    } else {
      projectRef.current.style.maxHeight =
        projectRef.current.scrollHeight + 'px';
      setProject(true);
    }
  };

  return (
    <Container sideBar={sideBar}>
      <OptionsContainer>
        <Link to='/app'>
          <SideBarOption title='Mailbox' num={allTodo.length}>
            <BsVoicemail size={'18px'} color='#246fe0' />
          </SideBarOption>
        </Link>

        <SideBarOption title='Today' num={3}>
          <BsCalendar2Date size={'16px'} color='#058527' />
        </SideBarOption>
        <SideBarOption title='Shortly' num={2}>
          <VscCalendar size={'16px'} color='#692fc2' />
        </SideBarOption>
        <SideBarOption title='Filters and labels' num={2}>
          <MdOutlineWidgets size={'17px'} color='#eb8909' />
        </SideBarOption>
      </OptionsContainer>
      <ProjectContainer>
        <ProjectTitleContainer>
          <ToggleProjects onClick={handleToggleProjects} project={project}>
            <HiOutlineChevronRight size={'18px'} color='#0007' />
          </ToggleProjects>
          <ProjectTitle>Projects</ProjectTitle>
          <AddProject>
            <VscAdd size='17px' color='#0007' />
          </AddProject>
        </ProjectTitleContainer>
        <ProjectOptionsContainer ref={projectRef} project={project}>
          <ProjectOption title='Welcome' num={6} />
          <ProjectOption title='Try todist Boards' num={5} />
          <ProjectOption title='My custom project' num={3} />
        </ProjectOptionsContainer>
      </ProjectContainer>
      <Link to='/app/completed'>
        <SideBarOption title='Completed' num={allCompletedTodo.length}>
          <TiInputChecked size={'22px'} color='#246fe0' />
        </SideBarOption>
      </Link>
    </Container>
  );
};

export default Index;
