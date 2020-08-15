import {
  CheckPasswordStrength,
  CheckPasswordStrengthDocument,
  CheckPasswordStrengthVariables
} from '../../types/CodeGen.v2';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { GraphqlClient } from '../common/GraphqlClient';

export const checkPasswordStrength = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: CheckPasswordStrengthVariables
): Promise<CheckPasswordStrength> => {
  const query = CheckPasswordStrengthDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};
