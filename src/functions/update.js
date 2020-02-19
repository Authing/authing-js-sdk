import encryption from '../utils/_encryption';
export default function update(options) {
  const self = this;
  if (!options) {
    throw Error('options is not provided');
  }

  // eslint-disable-next-line no-underscore-dangle
  if (!options._id) {
    throw Error('_id in options is not provided');
  }

  if (options.password) {
    options.password = encryption(options.password);
    options.oldPassword = encryption(options.oldPassword);
  }

  options.registerInClient = self.userPoolId;

  const keyTypeList = {
    _id: 'String!',
    email: 'String',
    emailVerified: 'Boolean',
    username: 'String',
    nickname: 'String',
    company: 'String',
    photo: 'String',
    oauth: 'String',
    browser: 'String',
    password: 'String',
    oldPassword: 'String',
    registerInClient: 'String!',
    phone: 'String',
    token: 'String',
    tokenExpiredAt: 'String',
    loginsCount: 'Int',
    lastLogin: 'String',
    lastIP: 'String',
    signedUp: 'String',
    blocked: 'Boolean',
    isDeleted: 'Boolean'
  };
  const returnFields = `_id
    email
    emailVerified
    username
    nickname
    company
    photo
    browser
    registerInClient
    registerMethod
    oauth
    phone
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    metadata
    `;

  function generateArgs(opts) {
    const args = [];
    const argsFiller = [];
    let argsString = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const key in opts) {
      if (keyTypeList[key]) {
        args.push(`$${key}: ${keyTypeList[key]}`);
        argsFiller.push(`${key}: $${key}`);
      }
    }
    argsString = args.join(', ');
    return {
      args,
      argsString,
      argsFiller
    };
  }

  if (options.photo) {
    const { photo } = options;
    if (typeof photo !== 'string') {
      return this._uploadAvatar(options).then(opts => {
        const arg = generateArgs(opts);
        return this.UserServiceGql.request({
          operationName: 'UpdateUser',
          query: `
            mutation UpdateUser(${arg.argsString}){
              updateUser(options: {
                ${arg.argsFiller.join(', ')}
              }) {
              ${returnFields}
              }
            }
          `,
          variables: opts
        });
      });
    }
  }
  const args = generateArgs(options);
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'UpdateUser',
      query: `
      mutation UpdateUser(${args.argsString}){
        updateUser(options: {
          ${args.argsFiller.join(', ')}
        }) {
          ${returnFields}
        }
      }
    `,
      variables: options
    });
  });
}
