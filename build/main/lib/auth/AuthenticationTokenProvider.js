"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationTokenProvider = void 0;
class AuthenticationTokenProvider {
    constructor(options) {
        this.options = options;
    }
    async getAccessToken() {
        return this._accessToken;
    }
    async setAccessToken(accessToken) {
        this._accessToken = accessToken;
    }
}
exports.AuthenticationTokenProvider = AuthenticationTokenProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hdXRoL0F1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxNQUFhLDJCQUEyQjtJQVV0QyxZQUFZLE9BQW9DO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQ3hCLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYztRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBbUI7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUE7SUFDakMsQ0FBQztDQUNGO0FBckJELGtFQXFCQyJ9