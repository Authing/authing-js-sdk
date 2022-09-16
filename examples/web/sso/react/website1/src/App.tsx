import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Authing } from '@authing/web';
import type {
  IUserInfo,
  LoginState,
  NormalError
} from '@authing/web/dist/typings/src/global';

function App() {
  const sdk = useMemo(() => {
    return new Authing({
      domain: "",
      appId: "",
      redirectUri: "",
      userPoolId: ''
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();
  const [userInfo, setUserInfo] = useState<IUserInfo | NormalError>();

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
    await sdk.logoutWithRedirect({
      redirectUri: 'https://www.baidu.com'
    });
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
