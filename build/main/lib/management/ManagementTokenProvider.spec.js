"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const helper_1 = require("../utils/helper");
const ava_1 = __importDefault(require("ava"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const management = new index_1.ManagementClient(helper_1.getOptionsFromEnv());
const tokenProvider = management.tokenProvider;
ava_1.default('should be able to get accesstoken', async (t) => {
    const accessToken = await tokenProvider.getAccessToken();
    const decoded = jwt_decode_1.default(accessToken);
    t.assert(accessToken);
    t.assert(decoded.data.id);
});
ava_1.default('should get cached accesstoken', async (t) => {
    const accessToken1 = await tokenProvider.getAccessToken();
    const accessToken2 = await tokenProvider.getAccessToken();
    t.assert(accessToken1 === accessToken2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlbWVudFRva2VuUHJvdmlkZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFuYWdlbWVudC9NYW5hZ2VtZW50VG9rZW5Qcm92aWRlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQTJDO0FBQzNDLDRDQUFvRDtBQUNwRCw4Q0FBc0I7QUFFdEIsNERBQWtDO0FBRWxDLE1BQU0sVUFBVSxHQUFHLElBQUksd0JBQWdCLENBQUMsMEJBQWlCLEVBQUUsQ0FBQyxDQUFBO0FBQzVELE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUE7QUFFOUMsYUFBSSxDQUFDLG1DQUFtQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUNsRCxNQUFNLFdBQVcsR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN4RCxNQUFNLE9BQU8sR0FBdUIsb0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMxRCxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3JCLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUMzQixDQUFDLENBQUMsQ0FBQTtBQUVGLGFBQUksQ0FBQywrQkFBK0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDOUMsTUFBTSxZQUFZLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDekQsTUFBTSxZQUFZLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDekQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLENBQUE7QUFDekMsQ0FBQyxDQUFDLENBQUEifQ==