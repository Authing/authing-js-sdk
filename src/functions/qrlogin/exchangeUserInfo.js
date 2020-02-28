import axios from "axios";

export default function exchangeUserInfoWithTicket(ticket) {
  if (!ticket) {
    throw Error('ticket is not provided.');
  }

  let host = this.opts.host.oauth.replace("/graphql", "");
  let url = `${host}/oauth/scan-qrcode/exchangeUserInfoWithTicket`

  return axios.post(url, {
    ticket
  }).then(res => {
    return res.data
  }).catch(err => {
    return err
  });
}
