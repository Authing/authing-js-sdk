interface Options {
  default_key_size?: number
  default_public_exponent?: string
  log?: boolean
}

export declare class JSEncrypt {
  options: Options
  constructor(options: Options)
  setPublicKey: (publicKey: string) => void
  encrypt: (plainText: string) => string | false
  // expand more .......
}

export declare function encryptFunction(plainText: string, publicKey: string): string
