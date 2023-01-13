import env from './.env';

export const environment = {
  production: false,
  firebaseAPIKey: env.secret_key,
};
