import AuthingMove from '@authing/authingmove-core'

import apiProxy from '@authing/authingmove-api-proxy'

AuthingMove.use(apiProxy)

export { AuthingMove }
