"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const helper_1 = require("./../utils/helper");
const ava_1 = __importDefault(require("ava"));
const management = new index_1.ManagementClient(helper_1.getOptionsFromEnv());
const usersManagement = management.users;
ava_1.default('should be able to create user', async (t) => {
    const user = await usersManagement.create({
        userInfo: {
            registerInClient: "",
            username: helper_1.randomString(),
            password: "123456!"
        }
    });
    t.assert(user);
    t.assert(user._id);
    t.assert(user.username);
});
ava_1.default("should be able to get user list", async (t) => {
    const users = await usersManagement.list();
    t.assert(users);
    t.assert(users.totalCount !== undefined);
    t.assert(users.list !== undefined);
});
ava_1.default('should be able to get use info', async (t) => {
    const user = await usersManagement.create({
        userInfo: {
            registerInClient: "",
            username: helper_1.randomString(),
            password: "123456!"
        }
    });
    const userInfo = await usersManagement.get(user._id);
    t.assert(userInfo);
    t.assert(userInfo._id === user._id);
});
ava_1.default('should be able to delete user', async (t) => {
    let user = await usersManagement.create({
        userInfo: {
            registerInClient: "",
            username: helper_1.randomString(),
            password: "123456!"
        }
    });
    await usersManagement.delete(user._id);
    user = await usersManagement.get(user._id);
    t.assert(!user);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNNYW5hZ2VtZW50Q2xpZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvVXNlcnNNYW5hZ2VtZW50Q2xpZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBMkM7QUFDM0MsOENBQW9FO0FBQ3BFLDhDQUFzQjtBQUV0QixNQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFnQixDQUFDLDBCQUFpQixFQUFFLENBQUMsQ0FBQTtBQUM1RCxNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFBO0FBRXhDLGFBQUksQ0FBQywrQkFBK0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDOUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQ3hDLFFBQVEsRUFBRTtZQUNSLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsUUFBUSxFQUFFLHFCQUFZLEVBQUU7WUFDeEIsUUFBUSxFQUFFLFNBQVM7U0FDcEI7S0FDRixDQUFDLENBQUE7SUFDRixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDekIsQ0FBQyxDQUFDLENBQUE7QUFFRixhQUFJLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ2hELE1BQU0sS0FBSyxHQUFHLE1BQU0sZUFBZSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUE7SUFDeEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQyxDQUFBO0FBRUYsYUFBSSxDQUFDLGdDQUFnQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUMvQyxNQUFNLElBQUksR0FBRyxNQUFNLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDeEMsUUFBUSxFQUFFO1lBQ1IsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixRQUFRLEVBQUUscUJBQVksRUFBRTtZQUN4QixRQUFRLEVBQUUsU0FBUztTQUNwQjtLQUNGLENBQUMsQ0FBQTtJQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDcEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQyxDQUFBO0FBRUYsYUFBSSxDQUFDLCtCQUErQixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUM5QyxJQUFJLElBQUksR0FBRyxNQUFNLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDdEMsUUFBUSxFQUFFO1lBQ1IsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixRQUFRLEVBQUUscUJBQVksRUFBRTtZQUN4QixRQUFRLEVBQUUsU0FBUztTQUNwQjtLQUNGLENBQUMsQ0FBQTtJQUNGLE1BQU0sZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDdEMsSUFBSSxHQUFHLE1BQU0sZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDMUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pCLENBQUMsQ0FBQyxDQUFBIn0=