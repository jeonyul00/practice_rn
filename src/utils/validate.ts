type UserInfo = {
  email: string;
  password: string;
};

type Signup = {
  email: string;
  password: string;
  pwdConfirm: string;
};

export const validateLogin = (values: UserInfo) => {
  const error = {
    email: '',
    password: '',
  };

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    error.email = '올바른 이메일 형식이 아닙니다.';
  }
  if (!(values.password.length >= 8 && values.password.length < 20)) {
    error.password = '비번 8 ~20자 사이로 입력';
  }

  return error;
};

export const validateSigup = (values: Signup) => {
  const error = {
    email: '',
    password: '',
    pwdConfirm: '',
  };

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    error.email = '올바른 이메일 형식이 아닙니다.';
  }
  if (!(values.password.length >= 8 && values.password.length < 20)) {
    error.password = '비번 8 ~20자 사이로 입력';
  }
  if (values.password !== values.pwdConfirm) {
    error.pwdConfirm = '비밀번호가 일치하지 않음';
  }
  return error;
};

export const validateAddPost = (values: {title: string}) => {
  const error = {
    title: '',
    desc: '',
  };

  if (values.title.trim() === '') {
    error.title = '제목은 1~10자 이내로 입력해주세요';
  }
  return error;
};
