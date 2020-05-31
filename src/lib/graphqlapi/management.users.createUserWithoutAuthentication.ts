
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const createUserWithoutAuthentication = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any): Promise<any> => {
  const query = `
  mutation createUserWithoutAuthentication(
    $userPoolId: String!
    $userInfo: UserRegisterInput!
    $forceLogin: Boolean
  ) {
    createUserWithoutAuthentication(
      userPoolId: $userPoolId
      userInfo: $userInfo
      forceLogin: $forceLogin
    ) {
      _id
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    username
    nickname
    company
    photo
    browser
    device
    password
    registerInClient
    registerMethod
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    metadata
    }
  }
  `
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
