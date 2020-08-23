import { ManagementClient } from '../../management';
import { Request, Response, NextFunction } from 'express';

const getToken = (req: Request, cookieKey: string) => {
  let token = null;
  if (req.headers.authorization) {
    token = req.headers.authorization
      ?.replace('Bearer ', '')
      ?.replace('bearer ', '');
  }

  if (!token) {
    token = req.cookies ? req.cookies[cookieKey] : null;
  }
  return token;
};

export const loginRequired = (options: {
  authingClient: ManagementClient;
  cookieKey?: string;
  redirectUrl?: string;
}) => {
  const {
    authingClient,
    cookieKey = '_authing_token',
    redirectUrl = '/login'
  } = options;
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = getToken(req, cookieKey);
    const session = await authingClient.checkLoginStatus(token);
    if (session) return next();
    return res.redirect(redirectUrl);
  };
};
