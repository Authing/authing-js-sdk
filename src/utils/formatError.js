export function formatError(error) {
  if (typeof error === 'string') return error;
  if (error.request) {
    // axios 错误
    if(error.response)
      return JSON.stringify(error.response.data);
    else
      return JSON.stringify(error.request);
  } else if (typeof error.message === 'object') {
    // graphql 错误
    if (error.message.message) {
      return JSON.stringify(error.message.message);
    } else {
      return JSON.stringify(error.message);
    }
  } else {
    return error;
  }
}
