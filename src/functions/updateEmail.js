export default function updateEmail(options) {
    if (!options) {
        throw Error("options is not provided");
    }
    if (!options.email) {
        throw Error("email in options is not provided");
    }
    if (!options.emailCode) {
        throw Error('emailCode in options is not provided')
    }

    options.userPoolId = this.userPoolId;
    return this.UserServiceGql.request({
        operationName: "updateEmail",
        query: `
mutation updateEmail(
    $userPoolId: String!
    $email: String!
    $emailCode: String!
    $oldEmail: String
    $oldEmailCode: String
) {
    updateEmail(
        userPoolId: $userPoolId
        email: $email
        emailCode: $emailCode
        oldEmail: $oldEmail
        oldEmailCode: $oldEmailCode
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
