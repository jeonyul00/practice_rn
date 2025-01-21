import React from 'react';
import AuthStackNavi from '../stack/AuthStackNavi';
import MainDrawerNavi from '../drawer/MainDrawerNavi';

const RootNavi = () => {
  const isLogin = false;

  return <>{isLogin ? <MainDrawerNavi /> : <AuthStackNavi />}</>;
};

export default RootNavi;
