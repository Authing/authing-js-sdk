import React, { useEffect, useMemo, useState } from 'react';
import { Authing } from '@authing/web';
import type { LoginState, IUserInfo, NormalError } from '@authing/web/dist/typings/src/global';

function App() {
  const sdk = useMemo(() => {
    return new Authing({
      domain: "",
      appId: "",
      redirectUri: "",
      userPoolId: ""
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();
  const [userInfo, setUserInfo] = useState<IUserInfo | NormalError>();

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

  const geteUserInfo = async () => {
    const userInfo = await sdk.getUserInfo()
    setUserInfo(userInfo)
  }

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
        <button onClick={() => geteUserInfo()}>geteUserInfo</button>
        <p>
          User Info: <br />
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
    </div>
  );
}

export default App;
