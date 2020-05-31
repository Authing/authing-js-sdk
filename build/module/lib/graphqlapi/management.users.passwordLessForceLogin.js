export const passwordLessForceLogin = async (garpqhlClient, tokenProvider, variables) => {
    const query = `
  mutation passwordLessForceLogin($userPoolId: String!, $userId: String!){
    passwordLessForceLogin(userPoolId: $userPoolId, userId: $userId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5wYXNzd29yZExlc3NGb3JjZUxvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMucGFzc3dvcmRMZXNzRm9yY2VMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFzQyxFQUFFLFNBQWMsRUFBZ0IsRUFBRTtJQUNqSixNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrRGIsQ0FBQTtJQUNELE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxTQUFTO1FBQ1QsS0FBSztLQUNOLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9