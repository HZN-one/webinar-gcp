import axios from 'axios';
import httpStatus from 'http-status';
import { Http } from '@hzn-one/commons';
import { ErrorRequestHandler } from 'express';

// eslint-disable-next-line no-unused-vars
const errorHandler: ErrorRequestHandler = (err, _req, res, _next): void => {
  let { statusCode = httpStatus.INTERNAL_SERVER_ERROR, message = err || 'Something wrong' } = err;

  if (axios.isAxiosError(err)) {
    statusCode = err.response?.status;
    message = 'failed';
  }

  const response = Http.response(false, message, null);
  res.status(statusCode).send(response);
};

export { errorHandler };
