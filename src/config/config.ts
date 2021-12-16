export default {
  env: process.env.NODE_ENV,
  app_env: process.env.APP_ENV,
  port: process.env.PORT,
  projectId: process.env.PROJECT_ID,
  gosend: {
    API_BASE_URL: process.env.GOSEND_API_BASE_URL,
    CLIENT_ID: process.env.GOSEND_CLIENT_ID,
    PASS_KEY: process.env.GOSEND_PASS_KEY,
  },
};
