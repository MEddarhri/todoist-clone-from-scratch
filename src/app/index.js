import React, { Fragment, useEffect } from 'react';
import BaseStyles from './BaseStyles';
import AppRoutes from './AppRoutes';
import { useDispatch } from 'react-redux';
import { login } from 'features/userSlice';
import API from 'API';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const getUserDetails = async () => {
      try {
        const res = await API.get('/api/user', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });

        dispatch(
          login({
            details: res.data.details,
            appLoaded: true,
            isLogged: true,
          })
        );
      } catch (error) {
        localStorage.removeItem('token');
        dispatch(login({ details: null, appLoaded: true, isLogged: false }));
      }
    };

    if (token) {
      getUserDetails();
    } else {
      dispatch(login({ details: null, isLogged: false, appLoaded: true }));
    }
  }, []);
  return (
    <Fragment>
      <BaseStyles />
      <AppRoutes />
    </Fragment>
  );
};

export default App;
