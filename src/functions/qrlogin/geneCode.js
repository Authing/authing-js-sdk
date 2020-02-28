import axios from "axios";
import { convertObjectToQueryString } from "../../utils/queryString";

export default function geneQRCode(options) {
  if (!options) {
    throw Error('options is not provided.');
  }

  if (!(typeof options === 'object' && options !== null)) {
    throw Error('options must be an object.');
  }

  let { userPoolId, scene, userDefinedData } = options
  userPoolId = userPoolId || this.userPoolId
  if (!userPoolId) {
    throw Error('userPoolId is not provided.');
  }

  if (!scene) {
    throw Error('scene is not provided.');
  }

  if (scene !== "APP_AUTH") {
    throw Error(`Unsupported scene ${scene}, the choices are APP_AUTH`)
  }

  let queryObject = { scene, userPoolId }
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
