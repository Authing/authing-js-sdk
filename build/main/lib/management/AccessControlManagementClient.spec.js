"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const helper_1 = require("./../utils/helper");
const ava_1 = __importDefault(require("ava"));
const management = new index_1.ManagementClient(helper_1.getOptionsFromEnv());
const acl = management.acl;
ava_1.default('创建分组', async (t) => {
    const group = await acl.createGroup(helper_1.generateRandomString(), '管理员');
    t.assert(group);
    t.assert(group._id);
});
ava_1.default('平级 role + user + resource', async (t) => {
    const roleCode = helper_1.generateRandomString();
    const role = await acl.addRole(roleCode);
    t.assert(role);
    const resouceCode = helper_1.generateRandomString();
    const resouce = await acl.addResource(resouceCode);
    t.assert(resouce);
    await acl.allow(roleCode, 'open', resouceCode);
    await acl.deny(roleCode, 'close', resouceCode);
    const user = await management.users.create({
        username: helper_1.generateRandomString(),
        password: '123456'
    });
    const userId = user._id;
    await acl.assignRole(roleCode, [user._id]);
    const allowed = await acl.isAllowed(userId, 'open', resouceCode);
    t.assert(allowed);
    const allowed2 = await acl.isAllowed(userId, 'xxxx', resouceCode);
    t.assert(allowed2 === false);
    const allowed3 = await acl.isAllowed(userId, 'close', resouceCode);
    t.assert(allowed3 === false);
});
ava_1.default('有层级的 role + user + resource', async (t) => {
    // 1. 创建两个角色, employee 是 developer 的父角色
    const employee = helper_1.generateRandomString();
    const developer = helper_1.generateRandomString();
    const role1 = (await acl.addRole(employee)).createRole;
    const role2 = (await acl.addRole(developer, employee)).createRole;
    t.assert(role1);
    t.assert(role2);
    t.assert(role2.parent);
    t.assert(role2.parent.code === employee);
    // 创建用户，授予 developer 角色
    const user = await management.users.create({
        username: helper_1.generateRandomString(),
        password: '123456'
    });
    const userId = user._id;
    await acl.assignRole(developer, [userId]);
    // 2. 创建一个资源
    const door = helper_1.generateRandomString();
    const resouce = await acl.addResource(door);
    t.assert(resouce);
    // 3. 将这个资源授权给 employee
    const action = 'open';
    await acl.allow(employee, action, door);
    // 4. 判断 user 是否具备 open door 的权限
    const allowed = await acl.isAllowed(userId, action, door);
    t.assert(allowed);
    const allowed2 = await acl.isAllowed(userId, 'xxxx', door);
    t.assert(allowed2 === false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFuYWdlbWVudC9BY2Nlc3NDb250cm9sTWFuYWdlbWVudENsaWVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQTJDO0FBQzNDLDhDQUE0RTtBQUM1RSw4Q0FBdUI7QUFFdkIsTUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBZ0IsQ0FBQywwQkFBaUIsRUFBRSxDQUFDLENBQUM7QUFDN0QsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUUzQixhQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUNyQixNQUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsNkJBQW9CLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLDJCQUEyQixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUMxQyxNQUFNLFFBQVEsR0FBRyw2QkFBb0IsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWYsTUFBTSxXQUFXLEdBQUcsNkJBQW9CLEVBQUUsQ0FBQztJQUMzQyxNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJ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