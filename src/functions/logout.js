import configs from '../configs';
import TokenMananger from '../TokenManager';
export default function logout(_id) {
  if (!_id) {
    throw Error('_id is not provided');
  }
  if (configs.inBrowser) {
    localStorage.removeItem('_authing_token');
  }

  return this.update({
    _id,
    tokenExpiredAt: '0'
  }).then(res => {
    TokenMananger.getInstance().setUserToken(null);
    return res;
  });
}
