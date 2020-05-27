"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-expression-statement
const ava_1 = __importDefault(require("ava"));
const index_1 = require("./index");
ava_1.default('should init with secret', async (t) => {
    const management = new index_1.ManagementClient({
        userPoolId: "AUTHING_USERPOOL_ID",
        secret: "AUTHING_USERPOOL_SECRET"
    });
    t.assert(management);
});
ava_1.default('should init with accessToken', async (t) => {
    const management = new index_1.ManagementClient({
        userPoolId: "AUTHING_USERPOOL_ID",
        accessToken: "AUTHING_ACCESS_TOKEN"
    });
    t.assert(management);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFuYWdlbWVudC9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXlDO0FBQ3pDLDhDQUFzQjtBQUN0QixtQ0FBMEM7QUFFMUMsYUFBSSxDQUFDLHlCQUF5QixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUN4QyxNQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFnQixDQUFDO1FBQ3RDLFVBQVUsRUFBRSxxQkFBcUI7UUFDakMsTUFBTSxFQUFFLHlCQUF5QjtLQUNsQyxDQUFDLENBQUE7SUFDRixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ3RCLENBQUMsQ0FBQyxDQUFBO0FBRUYsYUFBSSxDQUFDLDhCQUE4QixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUM3QyxNQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFnQixDQUFDO1FBQ3RDLFVBQVUsRUFBRSxxQkFBcUI7UUFDakMsV0FBVyxFQUFFLHNCQUFzQjtLQUNwQyxDQUFDLENBQUE7SUFDRixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ3RCLENBQUMsQ0FBQyxDQUFBIn0=