import checkInput from "../../utils/checkInput"

export default function (input, options) {
  checkInput(input, [
    {
      name: 'userId',
      type: String
    },
    {
      name: 'groupId',
      type: String
    }
  ])

  let query = `
  mutation AddUserToRBACGroup($input: AddUserToRBACGroupInput!){
    addUserToRBACGroup(input: $input){
        _id
        name
        description
        createdAt
        updatedAt
    }
}
  `
  let fetchUsers = options && options.fetchUsers
  if (fetchUsers) {
    query = `
mutation AddUserToRBACGroup($input: AddUserToRBACGroupInput!){
    addUserToRBACGroup(input: $input){
        _id
        name
        description
        createdAt
        updatedAt
        users {
          totalCount
          list {
            _id
            unionid
            email
            emailVerified
            username
            nickname
            company
            photo
            phone
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
            userLocation {
              _id
              when
              where
            }
            metadata
            userLoginHistory {
              totalCount
              list {
                _id
                when
                success
                ip
                result
              }
            }
          }
        }
    }
}
    `
  }


  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "AddUserToRBACGroup",
      query,
      variables: {
        input
      }
    }).then(res => {
      let ret = {
        code: 200,
        message: '操作成功'
      }
      if (!fetchUsers) {
        return ret
      }
      ret.data = res.users
      return ret
    })
  })
}