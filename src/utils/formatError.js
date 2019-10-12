export function formatError(error) {
  if (typeof error === 'string') return error;
  if (error.request) {
    // axios 错误
    return JSON.stringify(error.response.data);
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
