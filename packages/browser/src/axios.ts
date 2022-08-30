import axios, { AxiosError, AxiosRequestConfig } from 'axios';

function isAxiosError(e: any): e is AxiosError {
  return e.isAxiosError;
}

async function axiosPromiseWrapper(p: Promise<any>) {
  try {
    return await p;
  } catch (e) {
    if (isAxiosError(e)) {
      if (e.response?.data?.error) {
        const { error, error_description } = e.response.data;
        throw new Error(`认证服务器返回错误 ${error}: ${error_description}`);
      }
    }
    throw e;
  }
}

export async function axiosGet(
  url: string,
  options?: AxiosRequestConfig<string>,
) {
  return axiosPromiseWrapper(axios.get(url, options));
}

export async function axiosPost(
  url: string,
  data?: any,
  options?: AxiosRequestConfig<string>,
) {
  return axiosPromiseWrapper(axios.post(url, data, options));
}
