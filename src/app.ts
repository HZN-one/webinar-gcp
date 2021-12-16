import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import xss from 'xss-clean';
import httpStatus from 'http-status';
import compression from 'compression';
import { ApiError } from '@hzn-one/commons';
import express, { Application } from 'express';

import v1Routes from './routes/v1';
import { errorHandler } from './middlewares/error';

// load envs, should be at the very beginning of program
dotenv.config();

const app: Application = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data,
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

app.use((err, _, res, next) => {
  if (err) {
    res.status(err.statusCode).json({
      meta: {
        status: 'failed',
        message: err.message || 'Something went wrong',
      },
    });
  } else {
    next();
  }
});

app.get('/', (_, res) => {
  res.send('PT HZN Teknologi Indonesia - Webinar');
});

// v1 api routes
app.use('/v1', v1Routes);

// send back a 404 error for any unknown api request
app.use((_req, _res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// handle error
app.use(errorHandler);

export default app;
