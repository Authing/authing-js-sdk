import checkInput from "../../utils/checkInput"

export default function (input, options) {
  checkInput(input, [
    {
      name: 'permissionIdList',
      type: Array
    },
    {
      name: 'roleId',
      type: String
    }
  ])

  let query = `
  mutation addPermissionToRBACRoleBatch($input: AddPermissionToRBACRoleBatchInput!){
    addPermissionToRBACRoleBatch(input: $input){
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
mutation addPermissionToRBACRoleBatch($input: AddPermissionToRBACRoleBatchInput!){
  addPermissionToRBACRoleBatch(input: $input){
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
      operationName: "addPermissionToRBACRoleBatch",
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