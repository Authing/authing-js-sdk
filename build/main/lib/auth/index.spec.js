"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const helper_1 = require("./../utils/helper");
const ava_1 = __importDefault(require("ava"));
const authing = new index_1.AuthenticationClient(helper_1.getOptionsFromEnv());
ava_1.default.only('should be able to check login status', async (t) => {
    const res = await authing.checkLoginStatus("");
    t.assert(res.status === false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYXV0aC9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQStDO0FBQy9DLDhDQUFzRDtBQUN0RCw4Q0FBc0I7QUFFdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSw0QkFBb0IsQ0FBQywwQkFBaUIsRUFBRSxDQUFDLENBQUE7QUFFN0QsYUFBSSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDMUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDOUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFBO0FBQ2hDLENBQUMsQ0FBQyxDQUFBIn0=