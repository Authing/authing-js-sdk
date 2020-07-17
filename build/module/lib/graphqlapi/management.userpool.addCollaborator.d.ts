import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AddCollaboratorVariables, AddCollaborator } from '../../types/codeGen';
export declare const addCollaborator: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: AddCollaboratorVariables) => Promise<AddCollaborator>;
