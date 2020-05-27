import { AuthenticationClient } from './index';
import { getOptionsFromEnv } from './../utils/helper';
import test from "ava";
const authing = new AuthenticationClient(getOptionsFromEnv());
test.only('should be able to check login status', async (t) => {
    const res = await authing.checkLoginStatus("");
    t.assert(res.status === false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYXV0aC9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLElBQUksTUFBTSxLQUFLLENBQUE7QUFFdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUE7QUFFN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDMUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDOUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFBO0FBQ2hDLENBQUMsQ0FBQyxDQUFBIn0=