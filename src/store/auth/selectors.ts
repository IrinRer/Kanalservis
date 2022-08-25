export const getAuth = (state) => state.auth.auth;
export const getLogin = (state) => state.auth.inputLogin;
export const getPassword = (state) => state.auth.inputPassword;

export const getLoginAuth = (state) => {
  if (state.auth.inputLogin && state.auth.auth === "yes") {
    return state.auth.login;
  }
 return null;
};
