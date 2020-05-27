import { ManagementClient } from './index';
import { getOptionsFromEnv } from '../utils/helper';
import test from "ava";
import jwtDecode from "jwt-decode";
const management = new ManagementClient(getOptionsFromEnv());
const tokenProvider = management.tokenProvider;
test('should be able to get accesstoken', async (t) => {
    const accessToken = await tokenProvider.getAccessToken();
    const decoded = jwtDecode(accessToken);
    t.assert(accessToken);
    t.assert(decoded.data.id);
});
test('should get cached accesstoken', async (t) => {
    const accessToken1 = await tokenProvider.getAccessToken();
    const accessToken2 = await tokenProvider.getAccessToken();
    t.assert(accessToken1 === accessToken2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlbWVudFRva2VuUHJvdmlkZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFuYWdlbWVudC9NYW5hZ2VtZW50VG9rZW5Qcm92aWRlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLElBQUksTUFBTSxLQUFLLENBQUE7QUFFdEIsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFBO0FBRWxDLE1BQU0sVUFBVSxHQUFHLElBQUksZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBO0FBQzVELE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUE7QUFFOUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUNsRCxNQUFNLFdBQVcsR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN4RCxNQUFNLE9BQU8sR0FBdUIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzFELENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDckIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzNCLENBQUMsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLCtCQUErQixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUM5QyxNQUFNLFlBQVksR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN6RCxNQUFNLFlBQVksR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN6RCxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsQ0FBQTtBQUN6QyxDQUFDLENBQUMsQ0FBQSJ9