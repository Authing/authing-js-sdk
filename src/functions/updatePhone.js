export default function updatePhone(options) {
    if (!options) {
        throw Error("options is not provided");
    }
    if (!options.phone) {
        throw Error("email in options is not provided");
    }
    if (!options.phoneCode) {
        throw Error('emailCode in options is not provided')
    }

    options.userPoolId = this.userPoolId;
    return this.UserServiceGql.request({
        operationName: "updatePhone",
        query: `
mutation updatePhone(
    $userPoolId: String!
    $phone: String!
    $phoneCode: String!
    $oldPhone: String
    $oldPhoneCode: String
) {
    updatePhone(
        userPoolId: $userPoolId
        phone: $phone
        phoneCode: $phoneCode
        oldPhone: $oldPhone
        oldPhoneCode: $oldPhoneCode
    ) {
        _id
        email
        phone
        emailVerified
        username
        nickname
        company
        photo
        browser
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
        metadata
    }
}        
      `,
        variables: options
    });
}