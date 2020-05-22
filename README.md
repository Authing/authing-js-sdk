# authing-js-sdk

Official SDK of Authing

## Modules

- management (All operation can be done on the dashboard, on behalf of userpool admin.)
  - pipeline
  - webhook
  - userpool
  - users
  - whitelist
  - emailTemplates
  - emailProviders
  - logs
  - connections
  - importUsers
  - rbac
  - org
- authentication (Authentication Api, on behalf of normal users)
  - qrlogin
  - basic
  - social
  - oauth
  - oidc
  - ldap
  - saml
  - ad

## How to use

### ManagermentClient

```javascript
import { ManagementClient } from "authing-js-sdk"

// Init ManagermentClient
const management = new ManagermentClient({
  userPoolId: "AUTHING_USERPOOL_ID",
  secret: "AUTHING_USERPOOL_SECRET",
  server: {
    graphqlApiEndpoint: "AUTHING_GRAPHQL_ENDPOINT",
    restApiBaseHost: "AUTHING_RESTAPI_HOST"
  }
})

// Manage users
management.users.create()
management.users.update()
management.users.delete()
management.users.get()
management.users.list()

// Manage userpool
management.userpool.info()
management.userpool.update()

// Manage orgnization
management.pipeline.create()
management.pipeline.update()
management.pipeline.delete()
management.pipeline.get()
management.pipeline.list()

// ....

```

### AuthenticationClient

```javascript
import { AuthenticationClient } from "authing-js-sdk"

// Init ManagermentClient
const authing = new AuthenticationClient({
  userPoolId: "AUTHING_USERPOOL_ID",
})

// Do OIDC Login
authing.oidc.getAuthorizationUrl()
authing.oidc.exchangeAccessToken()
authing.oidc.exchangeUserInfo()

// ...
```
