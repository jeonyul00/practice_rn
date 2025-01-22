type UserInfo = {
  email: string;
  pwd: string;
};

type Signup = {
  email: string;
  pwd: string;
  pwdConfirm: string;
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

export const validateSigup = (values: Signup) => {
  const error = {
    email: '',
    pwd: '',
    pwdConfirm: '',
  };

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    error.email = '올바른 이메일 형식이 아닙니다.';
  }
  if (!(values.pwd.length >= 8 && values.pwd.length < 20)) {
    error.pwd = '비번 8 ~20자 사이로 입력';
  }
  if (values.pwd !== values.pwdConfirm) {
    error.pwdConfirm = '비밀번호가 일치하지 않음';
  }
  return error;
};
