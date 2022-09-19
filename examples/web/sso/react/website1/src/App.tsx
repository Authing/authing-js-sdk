import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Authing } from '@authing/web';
import {
  IUserInfo,
  LoginState,
  NormalError,
} from '@authing/web/dist/typings/src/global';

function App() {
  const sdk = useMemo(() => {
    return new Authing({
      // 很重要，请仔细填写！
      // 如果应用开启 SSO，这儿就要写单点登录的“应用面板地址”；否则填写应用的“认证地址”。
      domain: "https://mlbkhepjgjiihaap.authing.cn",

      // 应用 ID
      appId: "62e752f0d8c681db4ed3f743",

      // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
      redirectUri: "https://localhost:8000",

      // 用户池 ID
      userPoolId: '62e221f85f5ac5cc47037a39'
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();
  const [userInfo, setUserInfo] = useState<IUserInfo | NormalError | null>();

  const loginWithPopup = async () => {
    const res = await sdk.loginWithPopup();
    setLoginState(res);
  };

  const loginWithRedirect = () => {
    sdk.loginWithRedirect();
  };

  const getLoginState = useCallback(async () => {
    const state = await sdk.getLoginState();
    setLoginState(state);
  }, [sdk]);

  const getUserInfo = async () => {
    if (!loginState) {
      alert('用户未登录');
      return;
    }
    const userInfo = await sdk.getUserInfo({
      accessToken: loginState?.accessToken,
    });
    setUserInfo(userInfo);
  };

  const logoutWithRedirect = async () => {
    await sdk.logoutWithRedirect();
  };

  useEffect(() => {
    if (sdk.isRedirectCallback()) {
      console.log('redirect');
      sdk.handleRedirectCallback().then((res) => {
        setLoginState(res);
        window.location.replace('/');
      });
    } else {
      getLoginState();
    }
  }, [getLoginState, sdk]);

  return (
    <div className="App">
      <h2>Website 1</h2>
      <p>
        <a href="https://localhost:8001" rel="noreferrer" target="_blank">
          redirect to website2
        </a>
      </p>
      <p>
        <button onClick={loginWithPopup}>login with popup</button>
      </p>
      <p>
        <button onClick={loginWithRedirect}>loginWithRedirect</button>
        <button onClick={logoutWithRedirect}>logoutWithRedirect</button>
      </p>
      <p>
        <button onClick={getLoginState}>getLoginState</button>
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
        <button onClick={getUserInfo}>getUserInfo</button>
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
    </div>
  );
}

export default App;
