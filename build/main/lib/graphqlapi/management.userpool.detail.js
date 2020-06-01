"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPoolDetail = void 0;
exports.getUserPoolDetail = async (garpqhlClient, tokenProvider, variables) => {
    const query = `
  query client($id: String!){
    client(id: $id) {
      _id
      iamType
      domain
      logo
      name
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2VycG9vbC5kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2VycG9vbC5kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS2EsUUFBQSxpQkFBaUIsR0FBRyxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFvRSxFQUFFLFNBQWMsRUFBZ0IsRUFBRTtJQUMxSyxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7OztHQVViLENBQUE7SUFDRCxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==