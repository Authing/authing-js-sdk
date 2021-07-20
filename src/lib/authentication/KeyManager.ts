import { AuthenticationClientOptions, JWKS, KeyEntry } from './types';
import { NaiveHttpClient } from '../common/HttpClient';
import { importECDHES, importRSAOAEP, importHS256, importAESKW } from './BrowserKeyImportHelper';
import { parseJwk } from '@authing/jose';
import { KeyLike } from '@authing/jose/types';

export class KeyManager {

    keystore: Promise<KeyEntry[]>;

    constructor(
        private options: AuthenticationClientOptions,
        private naiveHttpClient: NaiveHttpClient,
    ) {
        this.keystore = this.naiveHttpClient.request({
            url: `${this.options.appHost}/oidc/.well-known/jwks.json`,
            method: 'GET',
        }).then(async (serverJwks: JWKS) => {
            const ks: KeyEntry[] = [];

            for (const jwk of serverJwks.keys) {
                ks.push({
                    alg: [ jwk.alg ],
                    key: await parseJwk(jwk),
                });
            }

            if (options.secret) {
                const aesKWAlg = [ 'A128KW', 'A192KW', 'A256KW' ];
                if (typeof window !== 'undefined') { // In browser
                    ks.push({
                        alg: ['HS256'],
                        key: await importHS256(options.secret),
                    });
                    ks.push({
                        alg: aesKWAlg,
                        key: await importAESKW(options.secret),
                    });
                } else { // In Node.js
                    const crypto = require('crypto');
                    const key = crypto.createSecretKey(Buffer.from(options.secret)) as KeyLike;
                    ks.push({
                        alg: ['HS256'],
                        key,
                    });
                    ks.push({
                        alg: aesKWAlg,
                        key,
                    });
                }
            }

            if (options.privateKeys) {
                for (const privateKey of options.privateKeys) {
                    if (typeof window !== 'undefined') { // In browser
                        const importer = {
                            'RSA-OAEP': importRSAOAEP,
                            'ECDH-ES': importECDHES,
                        };
                        ks.push({
                            alg: [ privateKey.alg ],
                            kid: privateKey.kid,
                            key: await importer[privateKey.alg](privateKey.pkcs8Key),
                        });
                    } else { // In Node.js
                        const crypto = require('crypto');
                        ks.push({
                            alg: [ privateKey.alg ],
                            kid: privateKey.kid,
                            key: crypto.createPrivateKey(privateKey.pkcs8Key),
                        });
                    }
                }
            }

            return ks;
        });
    }

    async getKeyFor(condition: {
        alg?: string,
        kid?: string,
    }) {
        const { alg, kid } = condition;
        const keystore = await this.keystore;

        for (const key of keystore) {
            if (kid && key.kid && kid !== key.kid) {
                continue;
            }
            if (alg && !key.alg.includes(alg)) {
                continue;
            }
            return key.key;
        }
        throw new Error(`No suitable key found for {alg=${alg}, kid=${kid}}`);
    }
}
