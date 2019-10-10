export const configs = {
  services: {
    user: {
      host: 'https://users.authing.cn/graphql'
    },
    oauth: {
      host: 'https://oauth.authing.cn/graphql'
    }
  },
  openSSLSecret: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----
`,
  inBrowser: typeof window !== 'undefined' && typeof document !== 'undefined'
};
