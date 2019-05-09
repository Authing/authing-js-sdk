/* eslint-disable no-underscore-dangle */
const Authing = require('../dist/authing-js-sdk');

const secret = '2bc1c6e3c9c0a707095f764ede2a9e61';
const clientId = '5c9c659cb9440b05cb2570e6';

const authing = new Authing({
  clientId,
  secret,
  host: {
    user: 'http://localhost:5555/graphql'
  }
});

authing.then((validAuth) => {
  validAuth.queryRoles({
    page: 1,
    count: 100
  }).then((roles) => {
    console.log('查询用户组成功', roles);
    authing.queryPermissions('5ca332d265520f3d751b0f63').then((permissions) => {
      console.log('查询用户权限成功', permissions);
      authing.createRole({
        name: '来自 SDK 的测试',
        descriptions: '来自 SDK 的测试'
      }).then((role) => {
        console.log('创建用户组成功', role);
        authing.updateRolePermissions({
          name: role.name,
          roleId: role._id,
          permissions: '来自 SDK 的 permissions 填充'
        }).then((newRole) => {
          console.log('修改用户权限成功', newRole);
          authing.assignUserToRole({
            roleId: role._id,
            user: '5ca332d265520f3d751b0f63'
          }).then((result) => {
            console.log('指派用户角色成功', result);
            authing.removeUserFromRole({
              user: '5ca332d265520f3d751b0f63',
              roleId: role._id
            }).then((result2) => {
              console.log('移除用户角色成功', result2);
            }).catch((error) => {
              console.log('移除用户角色失败', error.response.data.errors);
            });
          }).catch((error) => {
            console.log('指派用户角色失败', error.response.data.errors);
          });
        }).catch((error) => {
          console.log('修改用户权限失败', error.response.data.errors);
        });
      }).catch((error) => {
        console.log('创建用户组失败', error.response.data.errors);
      });
    }).catch((error) => {
      console.log('查询用户权限失败', error.response.data.errors);
    });
  }).catch((error) => {
    console.log('查询用户组失败', error.response.data.errors);
  });
});
