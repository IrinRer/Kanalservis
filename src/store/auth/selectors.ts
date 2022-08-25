import { RootState } from 'store';

export const getAuth = (state: RootState) => state.auth.auth;
export const getLogin = (state: RootState) => state.auth.inputLogin;
export const getPassword = (state: RootState) => state.auth.inputPassword;

export const getLoginAuth = (state: RootState) => {
  if (state.auth.inputLogin && state.auth.auth === 'yes') {
    return state.auth.login;
  }
  return undefined;
};
