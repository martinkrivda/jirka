const apiPrefix = '/api';

export default {
  login: () => `${apiPrefix}/auth/login`,
  signUp: () => `${apiPrefix}/auth/register-user`,
};
