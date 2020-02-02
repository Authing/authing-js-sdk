import checkInput from "../../utils/checkInput"

export default function (input, options) {
  checkInput(input, [
    {
      name: 'permissionId',
      type: String
    },
    {
      name: 'roleId',
      type: String
    }
  ])

  let query = `
  mutation addPermissionToRBACRole($input: AddPermissionToRBACRoleInput!){
    addPermissionToRBACRole(input: $input){
        _id
        name
        description
        createdAt
        updatedAt
    }
}
  `
  let fetchPermissions = options && options.fetchPermissions
  if (fetchPermissions) {
    query = `
mutation addPermissionToRBACRole($input: AddPermissionToRBACRoleInput!){
  addPermissionToRBACRole(input: $input){
        _id
        name
        description
        createdAt
        updatedAt
        permissions {
          totalCount
          list {
            _id
            name
            description
            createdAt
            updatedAt
          }
        }
    }
}
    `
  }


  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "addPermissionToRBACRole",
      query,
      variables: {
        input
      }
    }).then(res => {
      let ret = {
        code: 200,
        message: '操作成功'
      }
      if (!fetchPermissions) {
        return ret
      }
      ret.data = res.permissions
      return ret
    })
  })
}