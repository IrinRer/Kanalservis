export const getLoginFromEnv = (): string | undefined => {
  const { LOGIN } = process.env;
  return LOGIN;
};

export const getPasswordFromEnv = (): string | undefined => {
  const { PASSWORD } = process.env;
  return PASSWORD;
};
