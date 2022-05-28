import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loading from 'shared/loading';

const ProtectedRouteAuth = ({ children }) => {
  const user = useSelector((state) => state.user.value);

  if (user.appLoaded == false) {
    return <Loading />;
  } else {
    if (user.isLogged) {
      return <Navigate to='/app' />;
    } else {
      return children;
    }
  }
};

export default ProtectedRouteAuth;
