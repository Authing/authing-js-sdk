"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
exports.encrypt = (plainText, publicKey) => {
    // jsencrypt 库在加密后使用了base64编码,所以这里要先将base64编码后的密文转成buffer
    const pawBuffer = Buffer.from(plainText);
    const encryptText = crypto_1.default.publicEncrypt({
        key: Buffer.from(publicKey),
        padding: crypto_1.default.constants.RSA_PKCS1_PADDING
    }, pawBuffer).toString('base64');
    return encryptText;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZW5jcnlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBMkI7QUFFZCxRQUFBLE9BQU8sR0FBRyxDQUFDLFNBQWlCLEVBQUUsU0FBaUIsRUFBRSxFQUFFO0lBQzlELHlEQUF5RDtJQUN6RCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sV0FBVyxHQUFHLGdCQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixPQUFPLEVBQUUsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCO0tBQzVDLEVBQUUsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyJ9