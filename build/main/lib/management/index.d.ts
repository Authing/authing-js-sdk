import { ConnectionManagementClient } from './ConnectionManagementClient';
import { OrgManagementClient } from './OrgManagementClient';
import { AccessControlManagementClient } from './AccessControlManagementClient';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from "./types";
import { UserPoolManagementClient } from './UserpoolManagementClient';
import { UsersManagementClient } from './UsersManagementClient';
export declare class ManagementClient {
    options: ManagementClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: ManagementTokenProvider;
    users: UsersManagementClient;
    userpool: UserPoolManagementClient;
    accessControl: AccessControlManagementClient;
    org: OrgManagementClient;
    connections: ConnectionManagementClient;
    constructor(options: ManagementClientOptions);
    isDomainAvaliable(domain: string): Promise<any>;
}
