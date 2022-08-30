import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Authing } from "@authing/browser";
import type {
  LoginState,
  UserInfo,
} from "@authing/browser/dist/types/global";

function App() {
  const sdk = useMemo(() => {
    return new Authing({
      // 应用的认证地址，例如：https://domain.authing.cn
      domain: process.env.REACT_APP_SDK_DOMAIN as string,

      // 应用 ID
      appId: process.env.REACT_APP_SDK_APPID as string,

      // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
      redirectUri: process.env.REACT_APP_SDK_REDIRECT_URI as string,
      scope: process.env.REACT_APP_SDK_SCOPE,
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();
  const [userInfo, setUserInfo] = useState<UserInfo | null>();
  const [resource, setResource] = useState<object | null>();

  /**
   * 以弹窗方式打开 Authing 托管的登录页
   */
  const loginWithPopup = async () => {
    const res = await sdk.loginWithPopup();
    setLoginState(res);
  };

  /**
   * 以跳转方式打开 Authing 托管的登录页
   */
  const loginWithRedirect = () => {
    sdk.loginWithRedirect();
  };

  /**
   * 获取用户的登录状态
   */
  const getLoginState = useCallback(async () => {
    const state = await sdk.getLoginState();
    setLoginState(state);
  }, [sdk]);

  /**
   * 用 Access Token 获取用户身份信息
   */
  const getUserInfo = async () => {
    if (!loginState) {
      alert("用户未登录");
      return;
    }
    const userInfo = await sdk.getUserInfo({
      accessToken: loginState?.accessToken,
    });
    setUserInfo(userInfo);
  };

  /**
   * 登出
   */
  const logout = async () => {
    await sdk.logoutWithRedirect();
  };

  /**
   * 使用 Access Token 调用资源 API
   */
  const handleResource = async () => {
    try {
      let res = await fetch(process.env.REACT_APP_RESOURCE_API as string, {
        headers: {
          Authorization: `Bearer ${loginState?.accessToken}`,
        },
        method: "GET",
      });
      let data = await res.json();
      setResource(data);
    } catch (err) {
      alert("无权访问接口");
    }
  };

  useEffect(() => {
    if (sdk.isRedirectCallback()) {
      console.log("redirect");
      sdk.handleRedirectCallback().then((res) => {
        setLoginState(res);
        window.location.replace("/");
      });
    } else {
      getLoginState();
    }
  }, [getLoginState, sdk]);

  return (
    <div>
      <h2>React 快速集成 Authing Demo</h2>
      <p>
        <button onClick={loginWithPopup}>login with popup</button>
        <button onClick={loginWithRedirect}>loginWithRedirect</button>
        <button onClick={logout}>logout</button>
        <button onClick={getLoginState}>getLoginState</button>
        <button onClick={getUserInfo}>getUserInfo</button>
        <button onClick={handleResource}>handleResource</button>
      </p>
      <p>
        {loginState && (
          <textarea
            cols={100}
            rows={20}
            readOnly
            value={JSON.stringify(loginState, null, 2)}
          ></textarea>
        )}
      </p>
      <p>
        {userInfo && (
          <textarea
            cols={100}
            rows={15}
            readOnly
            value={JSON.stringify(userInfo, null, 2)}
          ></textarea>
        )}
      </p>
      <p>
        {resource && (
          <textarea
            cols={100}
            rows={5}
            value={JSON.stringify(resource, null, 2)}
          ></textarea>
        )}
      </p>
    </div>
  );
}

export default App;
