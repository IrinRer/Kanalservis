export const getLoginFromEnv = (): string | undefined => {
  const { LOGIN } = process.env;
  return LOGIN;
};

export const getPasswordFromEnv = (): string | undefined => {
  const { PASSWORD } = process.env;
  return PASSWORD;
};

export const getBackendURL = (): string | undefined => {
  const { BACKEND_URL } = process.env;
  return BACKEND_URL;
};
