export default function user(options) {
  if (!options) {
    throw Error('options is not provided');
  }
  if (!options.id) {
    throw Error('id in options is not provided');
  }
  options.registerInClient = this.userPoolId;
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'user',
      query: `query user($id: String!, $registerInClient: String!){
      user(id: $id, registerInClient: $registerInClient) {
        _id
        unionid
        openid
        email
        emailVerified
        username
        nickname
        company
        photo
        phone
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
        metadata
        customData
        salt
        country
        updatedAt
        group {
          _id
          name
          descriptions
          client
          permissions
          createdAt
        }
        clientType {
          _id
          name
          description
          image
          example
        }
        userLocation {
          _id
          when
          where
        }
        userLoginHistory {
          totalCount
          list {
            _id
            when
            success
            ip
            result
            device
            browser
          }
        }
        systemApplicationType {
          _id
          name
          descriptions
          price
        }
        thirdPartyIdentity {
          provider
          refreshToken
          expiresIn
          updatedAt
          accessToken
        }
      }
    }`,
      variables: options
    });
  });
}
