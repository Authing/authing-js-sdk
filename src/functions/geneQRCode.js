import axios from "axios";
import { convertObjectToQueryString } from "../utils/queryString";

export function geneQRCode(options) {
  if (!options) {
    throw Error('options is not provided.');
  }

  if (!(typeof options === 'object' && options !== null)) {
    throw Error('options must be an object.');
  }

  let { userPoolId, scence, userDefinedData } = options
  userPoolId = userPoolId || this.userPoolId
  if (!userPoolId) {
    throw Error('userPoolId is not provided.');
  }

  if (!scence) {
    throw Error('scence is not provided.');
  }

  if (scence !== "APP_AUTH") {
    throw Error(`Unsupported scence ${scence}, the choices are APP_AUTH`)
  }

  let queryObject = { scence, userPoolId }
  if (userDefinedData) {
    if (!(typeof userDefinedData === 'object' && userDefinedData !== null)) {
      throw Error('userDefinedData must be an object.');
    }
    queryObject = Object.assign(queryObject, userDefinedData)
  }


  let host = this.opts.host.oauth.replace("/graphql", "");
  let queryString = convertObjectToQueryString(queryObject)
  let url = `${host}/qrcode/gene?${queryString}`


  return axios.get(url).then(res => {
    return res.data
  }).catch(err => {
    return err
  });
}
