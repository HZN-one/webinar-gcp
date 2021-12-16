// PLEASE COMMENT THIS LINE IN DEVELOPMENT MODE
import 'module-alias/register';

import app from './app';
import config from './config/config';
import { logger } from '@config/logger';

const { app_env, port = 8080 } = config;

app.listen(port, () => {
  logger.info(`Listening to port http://localhost:${port}/ (${app_env})`);
});
