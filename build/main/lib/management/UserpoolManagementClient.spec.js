"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const helper_1 = require("./../utils/helper");
const ava_1 = __importDefault(require("ava"));
const management = new index_1.ManagementClient(helper_1.getOptionsFromEnv());
const userManagment = management.users;
const userpoolManagment = management.userpool;
ava_1.default('should be able to add collaborator', async (t) => {
    const user = await userManagment.create({
        userInfo: {
            registerInClient: "",
            username: helper_1.randomString(),
            password: "123456!"
        }
    });
    const { _id } = await userpoolManagment.addCollaborator(user._id);
    t.assert(_id);
});
ava_1.default("should be able to get userpool detail", async (t) => {
    const detail = await userpoolManagment.detail();
    t.assert(detail);
    t.assert(detail._id !== undefined);
    t.assert(detail.name !== undefined);
});
ava_1.default('should be able to get get permission list', async (t) => {
    const list = await userpoolManagment.getPermissionList();
    t.assert(list);
    t.assert(list.totalCount !== undefined);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnBvb2xNYW5hZ2VtZW50Q2xpZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvVXNlcnBvb2xNYW5hZ2VtZW50Q2xpZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBMkM7QUFDM0MsOENBQW9FO0FBQ3BFLDhDQUFzQjtBQUV0QixNQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFnQixDQUFDLDBCQUFpQixFQUFFLENBQUMsQ0FBQTtBQUM1RCxNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFBO0FBQ3RDLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQTtBQUU3QyxhQUFJLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ25ELE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxRQUFRLEVBQUU7WUFDUixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLFFBQVEsRUFBRSxxQkFBWSxFQUFFO1lBQ3hCLFFBQVEsRUFBRSxTQUFTO1NBQ3BCO0tBQ0YsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0saUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNqRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2YsQ0FBQyxDQUFDLENBQUE7QUFFRixhQUFJLENBQUMsdUNBQXVDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ3RELE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDL0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUE7SUFDbEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQyxDQUFBO0FBRUYsYUFBSSxDQUFDLDJDQUEyQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUMxRCxNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDekQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNkLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQTtBQUN6QyxDQUFDLENBQUMsQ0FBQSJ9