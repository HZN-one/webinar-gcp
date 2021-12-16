import httpStatus from 'http-status';
import { AxiosError } from 'axios';

import { Http } from '@hzn-one/commons';

const TestController = {
  hello: async (_req, res, next) => {
    try {
      const response = Http.response(true, '', {
        greeting: 'Welcome to Webinar',
      });
      res.status(httpStatus.OK).json(response);
    } catch (error: any | AxiosError) {
      next(error);
    }
  },
};

export default TestController;
