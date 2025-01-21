type UserInfo = {
  email: string;
  pwd: string;
};

export const validateLogin = (values: UserInfo) => {
  const error = {
    email: '',
    pwd: '',
  };

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    error.email = '올바른 이메일 형식이 아닙니다.';
  }
  if (!(values.pwd.length >= 8 && values.pwd.length < 20)) {
    error.pwd = '비번 8 ~20자 사이로 입력';
  }

  return error;
};
