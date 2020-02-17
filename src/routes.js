import { Router } from 'express';

import RecipientsController from './app/controllers/RecipientsController';
import SessionControlle from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.use(authMiddleware);
routes.post('/recipient', RecipientsController.store);
routes.post('/sessions', SessionControlle.store);

export default routes;
