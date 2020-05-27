"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCollaborator = void 0;
exports.addCollaborator = async (garpqhlClient, tokenProvider, variables) => {
    const query = `mutation addCollaborator(
    $userPoolId: String!
    $collaboratorUserId: String!
    $permissionDescriptors: [PermissionDescriptorsInputType]!
  ) {
    addCollaborator(
      userPoolId: $userPoolId
      collaboratorUserId: $collaboratorUserId
      permissionDescriptors: $permissionDescriptors
    ) {
      _id
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2VycG9vbC5hZGRDb2xsYWJvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2VycG9vbC5hZGRDb2xsYWJvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSWEsUUFBQSxlQUFlLEdBQUksS0FBSyxFQUFFLGFBQTRCLEVBQUUsYUFBc0MsRUFBRSxTQUFjLEVBQUUsRUFBRTtJQUM3SCxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7OztHQWFiLENBQUE7SUFDRCxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==