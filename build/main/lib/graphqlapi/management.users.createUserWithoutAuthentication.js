"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserWithoutAuthentication = void 0;
exports.createUserWithoutAuthentication = async (garpqhlClient, tokenProvider, variables) => {
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
  `;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5jcmVhdGVVc2VyV2l0aG91dEF1dGhlbnRpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMuY3JlYXRlVXNlcldpdGhvdXRBdXRoZW50aWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJYSxRQUFBLCtCQUErQixHQUFHLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQXNDLEVBQUUsU0FBYyxFQUFnQixFQUFFO0lBQzFKLE1BQU0sS0FBSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMERiLENBQUE7SUFDRCxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==