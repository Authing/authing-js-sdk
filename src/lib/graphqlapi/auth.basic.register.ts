
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';

export const register =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: any) : Promise<any> => {
  const query = `mutation register(
    $unionid: String,
    $openid: String,
    $email: String,
    $phone: String,
    $phoneCode: String,
    $password: String,
    $lastIP: String,
    $gender: String,
    $birthdate: String,
    $region: String,
    $locality: String,
    $name: String,
    $givenName: String,
    $familyName: String,
    $middleName: String,
    $profile: String,
    $preferredUsername: String,
    $website: String,
    $zoneinfo: String,
    $locale: String,
    $address: String,
    $formatted: String,
    $streetAddress: String,
    $postalCode: String,
    $country: String,
    $signedUp: String,
    $lastLogin: String,
    $forceLogin: Boolean,
    $registerInClient: String!,
    $oauth: String,
    $username: String,
    $nickname: String,
    $registerMethod: String,
    $photo: String,
    $company: String,
    $browser: String,
    $invitationCode: String,
    $keepPassword: Boolean
  ) {
      register(keepPassword: $keepPassword, invitationCode: $invitationCode, userInfo: {
        unionid: $unionid,
        openid: $openid,
        email: $email,
        phone: $phone,
        phoneCode: $phoneCode,
        password: $password,
        lastIP: $lastIP,
        forceLogin: $forceLogin,
        registerInClient: $registerInClient,
        oauth: $oauth,
        registerMethod: $registerMethod,
        name: $name,
        givenName: $givenName,
        familyName: $familyName,
        middleName: $middleName,
        profile: $profile,
        preferredUsername: $preferredUsername,
        website: $website,
        zoneinfo: $zoneinfo,
        locale: $locale,
        address: $address,
        formatted: $formatted,
        streetAddress: $streetAddress,
        postalCode: $postalCode,
        country: $country,
        signedUp: $signedUp,
        lastLogin: $lastLogin,
        gender: $gender,
        birthdate: $birthdate,
        region: $region,
        locality: $locality,
        photo: $photo,
        username: $username,
        nickname: $nickname,
        company: $company,
        browser: $browser,
      }) {
          _id,
          email,
          phone,
          emailVerified,
          unionid,
          openid,
          oauth,
          registerMethod,
          username,
          nickname,
          company,
          photo,
          browser,
          signedUp
          lastLogin
          token,
          group {
            name
          },
          blocked,
          device,
          metadata
          registerInClient
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
