import axios from 'axios';
export function _uploadAvatar(options) {
  return this.UserServiceGql.request({
    operationName: 'qiNiuUploadToken',
    query: `query qiNiuUploadToken {
      qiNiuUploadToken
    }`
  })
    .then(token => {
      if (!token) {
        throw {
          graphQLErrors: [
            {
              message: {
                message: '获取文件上传token失败'
              }
            }
          ]
        };
      }

      const formData = new FormData();
      formData.append('file', options.photo);
      formData.append('token', token);
      return axios.post('https://upload.qiniup.com/', formData, {
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    })
    .then(data => data.data)
    .then(data => {
      if (data.key) {
        options.photo = `https://usercontents.authing.cn/${data.key}`;
      }
      return options;
    })
    .catch(e => {
      if (e.graphQLErrors) {
        throw e.graphQLErrors[0];
      }
      throw {
        message: {
          message: e
        }
      };
    });
}
