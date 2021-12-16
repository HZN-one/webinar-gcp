import { Router } from 'express';

import testRoute from './test.route';

const router = Router();

const routes = [
  {
    path: '/test',
    route: testRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
