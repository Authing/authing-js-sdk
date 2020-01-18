import axios from "axios";
export default function sendOneTimePhoneCode(phone) {
  if (!phone) {
    throw "phone is not provided";
  }

  const url = `${this.opts.host.user.replace(
    "/graphql",
    ""
  )}/send_smscode/${phone}/${this.userPoolId}`;
  return axios.get(url).then(result => {
    if (result.data.code !== 200) {
      throw Error(JSON.stringify(result.data));
    } else {
      return result.data;
    }
  });
}
