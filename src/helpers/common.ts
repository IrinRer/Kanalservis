export const getLoginFromEnv = (): string | undefined => {
  const { REACT_APP_LOGIN } = process.env;
  return REACT_APP_LOGIN;
};

export const getPasswordFromEnv = (): string | undefined => {
  const { REACT_APP_PASSWORD } = process.env;
  return REACT_APP_PASSWORD;
};

export const getBackendURL = (): string | undefined => {
  const { REACT_APP_BACKEND_URL } = process.env;
  return REACT_APP_BACKEND_URL;
};
