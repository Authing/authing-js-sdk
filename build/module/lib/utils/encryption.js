import crypto from 'crypto';
export const encrypt = (plainText, publicKey) => {
    // jsencrypt 库在加密后使用了base64编码,所以这里要先将base64编码后的密文转成buffer
    const pawBuffer = Buffer.from(plainText);
    const encryptText = crypto.publicEncrypt({
        key: Buffer.from(publicKey),
        padding: crypto.constants.RSA_PKCS1_PADDING
    }, pawBuffer).toString('base64');
    return encryptText;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZW5jcnlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUE7QUFFM0IsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLENBQUMsU0FBaUIsRUFBRSxTQUFpQixFQUFFLEVBQUU7SUFDOUQseURBQXlEO0lBQ3pELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDM0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCO0tBQzVDLEVBQUUsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyJ9