import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from 'pages/login';
import Home from 'pages/home';
import Register from 'pages/register';
import Dashboard from 'pages/dashboard';
import DashboardTaskCompleted from 'pages/dashtaskcompleted';
import ProtectedRouteAuth from './ProtectedRouteAuth';
import ProtectedRouteDash from './ProtectedRouteDash';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/login'
        element={
          <ProtectedRouteAuth>
            <Login />
          </ProtectedRouteAuth>
        }
      />
      <Route
        path='/register'
        element={
          <ProtectedRouteAuth>
            <Register />
          </ProtectedRouteAuth>
        }
      />
      <Route
        path='/app'
        element={
          <ProtectedRouteDash>
            <Dashboard />
          </ProtectedRouteDash>
        }
      />
      <Route
        path='/app/completed'
        element={
          <ProtectedRouteDash>
            <DashboardTaskCompleted />
          </ProtectedRouteDash>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
