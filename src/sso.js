/* jshint esversion: 6 */

var axios = require('axios');

class SSO {

	constructor(options) {
		const defaultOpt = {
			domain: 'https://oauth.authing.cn/sso/authorize',
			response_type: 'token',
			redirect_uri: '',
		};
		
		this.options = { 
            ...defaultOpt, 
            ...options,
        };

        if (!this.options.app_id) {
            throw 'app_id is not provided';
		}
		
		const implicitUrl = `${this.options.domain}?response_type=${this.options.response_type}&app_id=${this.options.app_id}&redirect_uri=${this.options.redirect_uri}`;

        window.location.href = implicitUrl;
	}

}

module.exports = SSO;