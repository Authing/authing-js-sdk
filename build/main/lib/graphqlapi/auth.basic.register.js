"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
exports.register = async (garpqhlClient, tokenProvider, variables) => {
    const query = `mutation register(
    $unionid: String,
    $openid: String,
    $email: String,
    $phone: String,
    $phoneCode: String,
    $password: String,
    $lastIP: String,
    $gender: String,
    $birthdate: String,
    $region: String,
    $locality: String,
    $name: String,
    $givenName: String,
    $familyName: String,
    $middleName: String,
    $profile: String,
    $preferredUsername: String,
    $website: String,
    $zoneinfo: String,
    $locale: String,
    $address: String,
    $formatted: String,
    $streetAddress: String,
    $postalCode: String,
    $country: String,
    $signedUp: String,
    $lastLogin: String,
    $forceLogin: Boolean,
    $registerInClient: String!,
    $oauth: String,
    $username: String,
    $nickname: String,
    $registerMethod: String,
    $photo: String,
    $company: String,
    $browser: String,
    $invitationCode: String,
    $keepPassword: Boolean
  ) {
      register(keepPassword: $keepPassword, invitationCode: $invitationCode, userInfo: {
        unionid: $unionid,
        openid: $openid,
        email: $email,
        phone: $phone,
        phoneCode: $phoneCode,
        password: $password,
        lastIP: $lastIP,
        forceLogin: $forceLogin,
        registerInClient: $registerInClient,
        oauth: $oauth,
        registerMethod: $registerMethod,
        name: $name,
        givenName: $givenName,
        familyName: $familyName,
        middleName: $middleName,
        profile: $profile,
        preferredUsername: $preferredUsername,
        website: $website,
        zoneinfo: $zoneinfo,
        locale: $locale,
        address: $address,
        formatted: $formatted,
        streetAddress: $streetAddress,
        postalCode: $postalCode,
        country: $country,
        signedUp: $signedUp,
        lastLogin: $lastLogin,
        gender: $gender,
        birthdate: $birthdate,
        region: $region,
        locality: $locality,
        photo: $photo,
        username: $username,
        nickname: $nickname,
        company: $company,
        browser: $browser,
      }) {
          _id,
          email,
          phone,
          emailVerified,
          unionid,
          openid,
          oauth,
          registerMethod,
          username,
          nickname,
          company,
          photo,
          browser,
          signedUp
          lastLogin
          token,
          group {
            name
          },
          blocked,
          device,
          metadata
          registerInClient
      }
  }
`;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5iYXNpYy5yZWdpc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9hdXRoLmJhc2ljLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUthLFFBQUEsUUFBUSxHQUFJLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQW9FLEVBQUUsU0FBYyxFQUFpQixFQUFFO0lBQ25LLE1BQU0sS0FBSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBdUdmLENBQUE7SUFDQyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==