import React, { useEffect, useMemo, useState } from 'react';
import { Authing } from '@authing/web';
import type { LoginState } from '@authing/web/dist/typings/src/global';

function App() {
  const sdk = useMemo(() => {
    return new Authing({
      // 很重要，请仔细填写！
      // 如果应用开启 SSO，这儿就要写单点登录的“应用面板地址”；否则填写应用的“认证地址”。
      domain: "https://mlbkhepjgjiihaap.authing.cn",

      // 应用 ID
      appId: "62e22721c889dd44bad1dda2",

      // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
      redirectUri: "https://localhost:8001",

      // 用户池 ID
      userPoolId: '62e221f85f5ac5cc47037a39'
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();

  useEffect(() => {
    if (sdk.isRedirectCallback()) {
      console.log('redirect');
      sdk.handleRedirectCallback().then((res) => {
        setLoginState(res);
        window.location.replace('/');
      });
    } else {
      console.log('normal');

      sdk.getLoginState().then((res) => {
        if (res) {
          setLoginState(res);
        } else {
          sdk.loginWithRedirect();
        }
      });
    }
  }, [sdk]);

  return (
    <div className="App">
      <h2>Website 2</h2>
      <div>
        <p>
          Access Token: <br />
          {loginState && (
            <textarea
              cols={100}
              rows={10}
              readOnly
              value={JSON.stringify(loginState?.accessToken, null, 2)}
            ></textarea>
          )}
        </p>
        <p>
          User Info: <br />
          {loginState && (
            <textarea
              cols={100}
              rows={15}
              readOnly
              value={JSON.stringify(loginState?.parsedIdToken, null, 2)}
            ></textarea>
          )}
        </p>
        <p>
          Access Token Info:<br />
          {loginState && (
            <textarea
              cols={100}
              rows={15}
              readOnly
              value={JSON.stringify(loginState?.parsedAccessToken, null, 2)}
            ></textarea>
          )}
        </p>
        <p>
          Expire At: <code>{loginState?.expireAt}</code>
        </p>
      </div>
    </div>
  );
}

export default App;
