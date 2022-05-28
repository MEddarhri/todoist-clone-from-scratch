import React, { Fragment, useState } from 'react';
import Navbar from 'shared/navbar';
import Title from 'shared/title_login';
import Button from 'shared/button';
import ButtonG from 'shared/signwithbutton';
import Hori from 'shared/hr';
import Input from 'shared/input';
import Anchor from 'shared/anchor';
import ErrorMsg from 'shared/errormsg';
import Policy from 'shared/policy';
import Footer from 'shared/footerLoginSingup';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import { AiFillApple } from 'react-icons/ai';

import {
  Container,
  DevicesSvgContainer,
  FormContainer,
  MainContainer,
  DevicesSvg,
} from './Styles';
import API from 'API';
import { useSelector, useDispatch } from 'react-redux';
import { setSuccessMsg } from 'features/successMsgSlice';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from 'helpers/validateEmail';

const Register = () => {
  const successMsg = useSelector((state) => state.successMsg.message);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (
      validateEmail(formData.email) &&
      formData.password.length >= 6 &&
      formData.full_name.length >= 6
    ) {
      try {
        await API.post('/api/register', formData);
        navigate('/login');
        dispatch(setSuccessMsg('Email registered Successfully.'));
      } catch (error) {
        setErrorMsg(error.response.data.message);
      }
    } else {
      setErrorMsg('Please check your details and try again.');
    }
  };
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <FormContainer>
          <Title>Sign up</Title>
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <ButtonG>
            <FcGoogle size={'1.1rem'} />
            Continue with Google
          </ButtonG>
          <ButtonG>
            <MdFacebook color='#246fe0' size={'1.1rem'} />
            Continue with Facebook
          </ButtonG>
          <ButtonG>
            <AiFillApple size={'1.1rem'} />
            Continue with Apple
          </ButtonG>
          <Hori />
          <Input
            type='text'
            placeHolder='Enter your full name...'
            label='Full name'
            name='full_name'
            value={formData.full_name}
            change={handleChange}
          />
          <Input
            type='email'
            placeHolder='Enter your email...'
            label='Email'
            name='email'
            value={formData.email}
            change={handleChange}
          />
          <Input
            type='password'
            placeHolder='Enter your password...'
            label='Password'
            name='password'
            value={formData.password}
            change={handleChange}
          />
          <div onClick={handleSubmit}>
            <Button>Sign up with Email</Button>
          </div>

          <Policy />
          <Hori />
          <Footer
            content={`Already signed up?`}
            anchorContent={`Go to login`}
          />
        </FormContainer>
        <DevicesSvgContainer>
          <DevicesSvg />
        </DevicesSvgContainer>
      </MainContainer>
    </Container>
  );
};

export default Register;
