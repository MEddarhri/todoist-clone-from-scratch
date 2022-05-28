import React, { useState, useRef } from 'react';
import {
  Navbar,
  LeftNav,
  NavButton,
  InputContainer,
  SearchInput,
  RightNav,
  ProfileOptionsCont,
  SettingButton,
  FirstPart,
  SecondPart,
  NameAndEmailCont,
  Name,
  Email,
  SettingOption,
  SettingOptionTitle,
  ContainerOptionsProfile,
} from './Styles';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { GrHomeRounded } from 'react-icons/gr';
import { VscAdd } from 'react-icons/vsc';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlinePalette } from 'react-icons/md';
import { FiActivity } from 'react-icons/fi';
import { BsPrinter } from 'react-icons/bs';
import { BiAddToQueue } from 'react-icons/bi';
import { FiStar } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { GiSmartphone } from 'react-icons/gi';
import { MdLogout } from 'react-icons/md';
import {
  IoIosHelpCircleOutline,
  IoIosNotificationsOutline,
} from 'react-icons/io';
import Avatar from 'shared/avatar';
import ProfileOption from 'shared/profileoption';
import Hr from 'shared/hr';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskToggle, sideBarToggle } from 'features/toggleSlice';
import { useOutsideAlerter } from 'hooks/useOutsideAlerter';
import { login } from 'features/userSlice';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [showProfileBar, setShowProfileBar] = useState(false);
  const dispatch = useDispatch();
  const profileSettingRef = useRef(null);
  const avatarRef = useRef(null);
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  useOutsideAlerter(profileSettingRef, avatarRef, setShowProfileBar);
  const handleClick = () => {
    dispatch(sideBarToggle());
  };

  const handleShowProfileBar = () => {
    setShowProfileBar((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(login({ appLoaded: true, isLogged: false, details: null }));
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Navbar>
      <ProfileOptionsCont value={showProfileBar}>
        <div ref={profileSettingRef}>
          <SettingButton>
            <FirstPart>
              <Avatar size='45px' />
              <NameAndEmailCont>
                <Name>{user.details.full_name}</Name>
                <Email>{user.details.email}</Email>
              </NameAndEmailCont>
            </FirstPart>
            <SecondPart>
              <SettingOption>
                <AiOutlineSetting size='22px' color='#0006' />
                <SettingOptionTitle>Settings</SettingOptionTitle>
              </SettingOption>
            </SecondPart>
          </SettingButton>
          <Hr margin='0px' color='#0003' />
          <ContainerOptionsProfile>
            <ProfileOption title='Theme'>
              <MdOutlinePalette size='22px' color='#0006' />
            </ProfileOption>
            <ProfileOption title='Activity Log'>
              <FiActivity size='22px' color='#0006' />
            </ProfileOption>
            <ProfileOption title='To print'>
              <BsPrinter size='22px' color='#0006' />
            </ProfileOption>
            <ProfileOption title='Integrations'>
              <BiAddToQueue size='22px' color='#0006' />
            </ProfileOption>
          </ContainerOptionsProfile>
          <Hr margin='0px' color='#0003' />
          <ContainerOptionsProfile>
            <ProfileOption title='Subscribe to Pro'>
              <FiStar size='22px' color='#FEBA07' />
            </ProfileOption>
            <ProfileOption title='Switch to todoist business'>
              <FiUsers size='22px' color='#0006' />
            </ProfileOption>
            <ProfileOption title='Download apps'>
              <GiSmartphone size='22px' color='#0006' />
            </ProfileOption>
          </ContainerOptionsProfile>
          <Hr margin='0px' color='#0003' />
          <ContainerOptionsProfile>
            <div onClick={handleLogout}>
              <ProfileOption title='Logout'>
                <MdLogout size='22px' color='#db2810' />
              </ProfileOption>
            </div>
          </ContainerOptionsProfile>
        </div>
      </ProfileOptionsCont>

      <LeftNav>
        <NavButton onClick={handleClick}>
          <FiMenu size='21px' />
        </NavButton>
        <NavButton>
          <GrHomeRounded size='18px' color='#fff' />
        </NavButton>
        <InputContainer>
          <FiSearch size='20px' color='#fff' />
          <SearchInput placeholder='Reasearch' />
        </InputContainer>
      </LeftNav>
      <RightNav>
        <NavButton onClick={() => dispatch(addTaskToggle())}>
          <VscAdd size='20px' />
        </NavButton>
        <NavButton>
          <IoIosHelpCircleOutline size='24px' />
        </NavButton>
        <NavButton>
          <IoIosNotificationsOutline size='24px' />
        </NavButton>
        <div ref={avatarRef}>
          <Avatar size='30px' onClick={handleShowProfileBar} />
        </div>
      </RightNav>
    </Navbar>
  );
};

export default Index;
