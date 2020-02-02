export default function getUsersByRole({ roleId, page = 1, count = 10 }) {
  // 查询属于某角色的所有用户
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'UserGroup',
      query: `query UserGroup($group: String!, $client: String!, $page: Int, $count: Int) {
      userGroup(client: $client, group: $group, page: $page, count: $count) {
        totalCount
        list {
          _id
          group {
            _id
          }
          client {
            _id
          }
          user {
            _id
            photo
            username
            email
          }
          createdAt
        }
      }
    }
    `,
      variables: {
        client: this.userPoolId,
        group: roleId,
        page,
        count
      }
    });
  });
}
