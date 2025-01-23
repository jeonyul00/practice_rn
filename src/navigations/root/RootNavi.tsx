import React from 'react';
import AuthStackNavi from '../stack/AuthStackNavi';
import MainDrawerNavi from '../drawer/MainDrawerNavi';
import useAuth from '../../hooks/querys/useAuth';

const RootNavi = () => {
  const isLogin = useAuth();

  return <>{isLogin ? <MainDrawerNavi /> : <AuthStackNavi />}</>;
};

export default RootNavi;
