import React, { Fragment, useState } from 'react';
import Navbar from 'shared/navbar';
import Title from 'shared/title_login';
import Button from 'shared/button';
import ButtonG from 'shared/signwithbutton';
import Hori from 'shared/hr';
import Input from 'shared/input';
import Anchor from 'shared/anchor';
import Policy from 'shared/policy';
import Footer from 'shared/footerLoginSingup';
import SuccessMsg from 'shared/successmsg';
import ErrorMsg from 'shared/errormsg';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import { AiFillApple } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  DevicesSvgContainer,
  FormContainer,
  MainContainer,
  DevicesSvg,
} from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import API from 'API';
import { login } from 'features/userSlice';
import { validateEmail } from 'helpers/validateEmail';

const Login = () => {
  const user = useSelector((state) => state.user.value);
  const successMsg = useSelector((state) => state.successMsg.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (validateEmail(formData.email) && formData.password.length >= 6) {
      try {
        const res = await API.post('/api/login', formData);
        dispatch(
          login({ details: res.data.user, appLoaded: true, isLogged: true })
        );
        localStorage.setItem('token', res.data.user.accessToken);
        navigate('/app');
      } catch (error) {
        setErrorMsg(error.response.data.message);
      }
    } else {
      setErrorMsg('Email or Password is not valid.');
    }
  };
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <FormContainer>
          <Title>Log in</Title>
          {successMsg && <SuccessMsg>{successMsg}</SuccessMsg>}
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
            type='email'
            placeHolder='Enter your email...'
            name='email'
            label='Email'
            value={formData.email}
            change={handleChange}
          />
          <Input
            type='password'
            placeHolder='Enter your password...'
            name='password'
            label='Password'
            value={formData.password}
            change={handleChange}
          />
          <div onClick={handleSubmit}>
            <Button>Log in</Button>
          </div>

          <Anchor size='14px'>Forgot you password?</Anchor>
          <Policy />
          <Hori />
          <Footer
            content={`Don't have an account?`}
            anchorContent={`Sign up`}
          />
        </FormContainer>
        <DevicesSvgContainer>
          <DevicesSvg />
        </DevicesSvgContainer>
      </MainContainer>
    </Container>
  );
};

export default Login;
