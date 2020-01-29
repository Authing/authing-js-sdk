import axios from "axios";
export function casLogout() {
  const url = `${this.opts.host.user.replace(
    "/graphql",
    ""
  )}/cas/logout`;
  return axios.get(url).then(result => {
    if (result.data.code !== 200) {
      throw Error(JSON.stringify(result.data));
    } else {
      return result.data;
    }
  });
}
