import checkInput from "../../utils/checkInput"

export default function (input, options) {
  checkInput(input, [
    {
      name: 'roleIdList',
      type: Array
    },
    {
      name: 'groupId',
      type: String
    }
  ])

  let query = `
  mutation AddRoleToRBACGroupBatch($input: AddRoleToRBACGroupBatchInput!){
    addRoleToRBACGroupBatch(input: $input){
        _id
        name
        description
        createdAt
        updatedAt
    }
}
  `

  let fetchRoles = options && options.fetchRoles
  if (fetchRoles) {
    query = `
    mutation AddRoleToRBACGroupBatch($input: AddRoleToRBACGroupBatchInput!){
      addRoleToRBACGroupBatch(input: $input){
          _id
          name
          description
          createdAt
          updatedAt
          roles {
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
      operationName: "AddRoleToRBACGroupBatch",
      query,
      variables: {
        input
      }
    }).then(res => {
      let ret = {
        code: 200,
        message: '操作成功'
      }
      if (!fetchRoles) {
        return ret
      }
      ret.data = res.roles
      return ret
    })
  })
}
