import {
  SendVerifyEmailVariables,
  SendVerifyEmail,
  SendVerifyEmailDocument,
} from '../../types/CodeGen';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';

export const sendVerifyEmail = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: SendVerifyEmailVariables
): Promise<SendVerifyEmail> => {
  const query = SendVerifyEmailDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables,
  });
};
