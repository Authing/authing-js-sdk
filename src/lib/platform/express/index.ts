import { ManagementClient } from '../../management/ManagementClient';
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

  if (!token) {
    token = req.query?._authing_token;
  }

  return token;
};

export const loginRequired = (
  authingClient: ManagementClient,
  options: {
    /** 获取 Authing token 的 cookie key */
    cookieKey?: string;

    /** 获取 Authing token 的 query key */
    queryKey?: string;

    /** 未登录状态下的跳转链接 */
    redirectUrlOnFailure?: string;

    /** 未登录状态下的 http 状态码 */
    statusCodeOnFailure?: number;

    /** 未登录状态下的 http response body */
    responseBodyOnFailure?: any;

    /** 是否获取用户完整信息 */
    fetchUserDetail?: boolean;
  }
) => {
  options = options || {};
  const {
    cookieKey = '_authing_token',
    fetchUserDetail = false,
    statusCodeOnFailure = 403,
    responseBodyOnFailure = {
      code: 403,
      message: 'Permission Denied'
    },
    redirectUrlOnFailure
  } = options;
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = getToken(req, cookieKey);
    const user = await authingClient.checkLoginStatus(token, {
      fetchUserDetail
    });
    if (user) {
      // @ts-ignore
      req.user = user;
      return next();
    }

    if (redirectUrlOnFailure) {
      return res.redirect(redirectUrlOnFailure);
    } else {
      return res.status(statusCodeOnFailure).send(responseBodyOnFailure);
    }
  };
};

export const checkPermission = (
  authingClient: ManagementClient,
  resource: string,
  action: string,
  options: {
    /** 获取 Authing token 的 cookie key */
    cookieKey?: string;

    /** 获取 Authing token 的 query key */
    queryKey?: string;

    /** 未登录状态下的跳转链接 */
    redirectUrlOnFailure?: string;

    /** 未登录状态下的 http 状态码 */
    statusCodeOnFailure?: number;

    /** 未登录状态下的 http response body */
    responseBodyOnFailure?: any;

    /** 是否获取用户完整信息 */
    fetchUserDetail?: boolean;
  }
) => {
  options = options || {};
  const {
    cookieKey = '_authing_token',
    fetchUserDetail = false,
    statusCodeOnFailure = 403,
    responseBodyOnFailure = {
      code: 403,
      message: 'Permission Denied'
    },
    redirectUrlOnFailure
  } = options;

  return async (req: Request, res: Response, next: NextFunction) => {
    const token = getToken(req, cookieKey);
    const user = await authingClient.checkLoginStatus(token, {
      fetchUserDetail
    });
    if (user) {
      const isAllowed = await authingClient.acl.isAllowed(
        user.id,
        action,
        resource
      );
      if (isAllowed) {
        // @ts-ignore
        req.user = user;
        return next();
      }
    }

    if (redirectUrlOnFailure) {
      return res.redirect(redirectUrlOnFailure);
    } else {
      return res.status(statusCodeOnFailure).send(responseBodyOnFailure);
    }
  };
};
