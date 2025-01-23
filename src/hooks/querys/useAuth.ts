import {useMutation, useQuery} from '@tanstack/react-query';
import {
  getAccessToken,
  getProfile,
  logout,
  postLogin,
  postSignup,
} from '../../api/auth';
import {
  UseMutationCustomOptions,
  UseQueryCutomOptions,
} from '../../types/common';
import {
  removeEncryptStorage,
  setEncryptStorage,
} from '../../utils/encryptStorage';
import {removeHeader, setHeader} from '../../utils/headet';
import {useEffect} from 'react';
import {queryClient} from '../../api/queryClient';

function useSignup(mutationsOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postSignup,
    ...mutationsOptions,
  });
}

function useLogin(mutationsOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: ({accessToken, refreshToken}) => {
      setEncryptStorage('refreshToken', refreshToken);
      setHeader('Authorization', `Bearer ${accessToken}`);
    },
    onSettled: () => {
      queryClient.refetchQueries({queryKey: ['auth', 'getAccessToken']});
      queryClient.invalidateQueries({queryKey: ['auth', 'getProfile']});
    },

    ...mutationsOptions,
  });
}

function useLogout(mutationsOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      removeHeader('Authorization');
      removeEncryptStorage('refreshToken');
    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['auth']});
    },
    ...mutationsOptions,
  });
}

function useGetRefreshToken() {
  const {isSuccess, isError, data} = useQuery({
    queryKey: ['auth', 'getAccessToken'],
    staleTime: 1000 * 60 * 30 - 1000 * 60 * 3,
    queryFn: getAccessToken,
    refetchInterval: 1000 * 60 * 30 - 1000 * 60 * 3,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isSuccess) {
      setHeader('Authorization', `Bearer ${data.accessToken}`);
      setEncryptStorage('refreshToken', data.refreshToken);
    }

    if (isError) {
      removeHeader('Authorization');
      removeEncryptStorage('refreshToken');
    }
  }, [isSuccess, isError, data]);

  return {isSuccess, isError};
}

function useGetProfile(queryOptions?: UseQueryCutomOptions) {
  return useQuery({
    queryKey: ['auth', 'getProfile'],
    queryFn: getProfile,
    ...queryOptions,
  });
}

function useAuth() {
  const signupMutation = useSignup();
  const refreshTokenQuery = useGetRefreshToken();
  const getProfileQuery = useGetProfile({
    enabled: refreshTokenQuery.isSuccess,
  });
  const isLogin = getProfileQuery.isSuccess;
  const loginMutation = useLogin();
  const useLogoutMutation = useLogout();
  return {
    signupMutation,
    loginMutation,
    isLogin,
    getProfileQuery,
    useLogoutMutation,
  };
}

export default useAuth;
