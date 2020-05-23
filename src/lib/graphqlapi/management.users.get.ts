
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const user =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) : Promise<any> => {
  const query = `query user($id: String, $registerInClient: String, $token: String, $auth: Boolean, $userLoginHistoryPage: Int, $userLoginHistoryCount: Int){
    user(id: $id, registerInClient: $registerInClient, token: $token, auth: $auth, userLoginHistoryPage: $userLoginHistoryPage, userLoginHistoryCount: $userLoginHistoryCount){
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
}`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
