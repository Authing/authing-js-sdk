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
  mutation removeUserFromRBACGroup($input: RemoveUserFromRBACGroupInput!) {
    removeUserFromRBACGroup(input: $input) {
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
    mutation removeUserFromRBACGroup($input: RemoveUserFromRBACGroupInput!){
      removeUserFromRBACGroup(input: $input){
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
            metadata
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
      operationName: "removeUserFromRBACGroup",
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
