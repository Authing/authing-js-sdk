module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack://Authing/./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/http.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/adapters/http.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar httpFollow = __webpack_require__(/*! follow-redirects */ \"./node_modules/follow-redirects/index.js\").http;\nvar httpsFollow = __webpack_require__(/*! follow-redirects */ \"./node_modules/follow-redirects/index.js\").https;\nvar url = __webpack_require__(/*! url */ \"url\");\nvar zlib = __webpack_require__(/*! zlib */ \"zlib\");\nvar pkg = __webpack_require__(/*! ./../../package.json */ \"./node_modules/axios/package.json\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\nvar enhanceError = __webpack_require__(/*! ../core/enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\nvar isHttps = /https:?/;\n\n/*eslint consistent-return:0*/\nmodule.exports = function httpAdapter(config) {\n  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {\n    var timer;\n    var resolve = function resolve(value) {\n      clearTimeout(timer);\n      resolvePromise(value);\n    };\n    var reject = function reject(value) {\n      clearTimeout(timer);\n      rejectPromise(value);\n    };\n    var data = config.data;\n    var headers = config.headers;\n\n    // Set User-Agent (required by some servers)\n    // Only set header if it hasn't been set in config\n    // See https://github.com/axios/axios/issues/69\n    if (!headers['User-Agent'] && !headers['user-agent']) {\n      headers['User-Agent'] = 'axios/' + pkg.version;\n    }\n\n    if (data && !utils.isStream(data)) {\n      if (Buffer.isBuffer(data)) {\n        // Nothing to do...\n      } else if (utils.isArrayBuffer(data)) {\n        data = Buffer.from(new Uint8Array(data));\n      } else if (utils.isString(data)) {\n        data = Buffer.from(data, 'utf-8');\n      } else {\n        return reject(createError(\n          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',\n          config\n        ));\n      }\n\n      // Add Content-Length header if data exists\n      headers['Content-Length'] = data.length;\n    }\n\n    // HTTP basic authentication\n    var auth = undefined;\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      auth = username + ':' + password;\n    }\n\n    // Parse url\n    var parsed = url.parse(config.url);\n    var protocol = parsed.protocol || 'http:';\n\n    if (!auth && parsed.auth) {\n      var urlAuth = parsed.auth.split(':');\n      var urlUsername = urlAuth[0] || '';\n      var urlPassword = urlAuth[1] || '';\n      auth = urlUsername + ':' + urlPassword;\n    }\n\n    if (auth) {\n      delete headers.Authorization;\n    }\n\n    var isHttpsRequest = isHttps.test(protocol);\n    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;\n\n    var options = {\n      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\\?/, ''),\n      method: config.method.toUpperCase(),\n      headers: headers,\n      agent: agent,\n      auth: auth\n    };\n\n    if (config.socketPath) {\n      options.socketPath = config.socketPath;\n    } else {\n      options.hostname = parsed.hostname;\n      options.port = parsed.port;\n    }\n\n    var proxy = config.proxy;\n    if (!proxy && proxy !== false) {\n      var proxyEnv = protocol.slice(0, -1) + '_proxy';\n      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];\n      if (proxyUrl) {\n        var parsedProxyUrl = url.parse(proxyUrl);\n        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;\n        var shouldProxy = true;\n\n        if (noProxyEnv) {\n          var noProxy = noProxyEnv.split(',').map(function trim(s) {\n            return s.trim();\n          });\n\n          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {\n            if (!proxyElement) {\n              return false;\n            }\n            if (proxyElement === '*') {\n              return true;\n            }\n            if (proxyElement[0] === '.' &&\n                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement &&\n                proxyElement.match(/\\./g).length === parsed.hostname.match(/\\./g).length) {\n              return true;\n            }\n\n            return parsed.hostname === proxyElement;\n          });\n        }\n\n\n        if (shouldProxy) {\n          proxy = {\n            host: parsedProxyUrl.hostname,\n            port: parsedProxyUrl.port\n          };\n\n          if (parsedProxyUrl.auth) {\n            var proxyUrlAuth = parsedProxyUrl.auth.split(':');\n            proxy.auth = {\n              username: proxyUrlAuth[0],\n              password: proxyUrlAuth[1]\n            };\n          }\n        }\n      }\n    }\n\n    if (proxy) {\n      options.hostname = proxy.host;\n      options.host = proxy.host;\n      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');\n      options.port = proxy.port;\n      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;\n\n      // Basic proxy authorization\n      if (proxy.auth) {\n        var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');\n        options.headers['Proxy-Authorization'] = 'Basic ' + base64;\n      }\n    }\n\n    var transport;\n    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);\n    if (config.transport) {\n      transport = config.transport;\n    } else if (config.maxRedirects === 0) {\n      transport = isHttpsProxy ? https : http;\n    } else {\n      if (config.maxRedirects) {\n        options.maxRedirects = config.maxRedirects;\n      }\n      transport = isHttpsProxy ? httpsFollow : httpFollow;\n    }\n\n    if (config.maxContentLength && config.maxContentLength > -1) {\n      options.maxBodyLength = config.maxContentLength;\n    }\n\n    // Create the request\n    var req = transport.request(options, function handleResponse(res) {\n      if (req.aborted) return;\n\n      // uncompress the response body transparently if required\n      var stream = res;\n      switch (res.headers['content-encoding']) {\n      /*eslint default-case:0*/\n      case 'gzip':\n      case 'compress':\n      case 'deflate':\n        // add the unzipper to the body stream processing pipeline\n        stream = (res.statusCode === 204) ? stream : stream.pipe(zlib.createUnzip());\n\n        // remove the content-encoding in order to not confuse downstream operations\n        delete res.headers['content-encoding'];\n        break;\n      }\n\n      // return the last request in case of redirects\n      var lastRequest = res.req || req;\n\n      var response = {\n        status: res.statusCode,\n        statusText: res.statusMessage,\n        headers: res.headers,\n        config: config,\n        request: lastRequest\n      };\n\n      if (config.responseType === 'stream') {\n        response.data = stream;\n        settle(resolve, reject, response);\n      } else {\n        var responseBuffer = [];\n        stream.on('data', function handleStreamData(chunk) {\n          responseBuffer.push(chunk);\n\n          // make sure the content length is not over the maxContentLength if specified\n          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {\n            stream.destroy();\n            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',\n              config, null, lastRequest));\n          }\n        });\n\n        stream.on('error', function handleStreamError(err) {\n          if (req.aborted) return;\n          reject(enhanceError(err, config, null, lastRequest));\n        });\n\n        stream.on('end', function handleStreamEnd() {\n          var responseData = Buffer.concat(responseBuffer);\n          if (config.responseType !== 'arraybuffer') {\n            responseData = responseData.toString(config.responseEncoding);\n          }\n\n          response.data = responseData;\n          settle(resolve, reject, response);\n        });\n      }\n    });\n\n    // Handle errors\n    req.on('error', function handleRequestError(err) {\n      if (req.aborted) return;\n      reject(enhanceError(err, config, null, req));\n    });\n\n    // Handle request timeout\n    if (config.timeout) {\n      timer = setTimeout(function handleRequestTimeout() {\n        req.abort();\n        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));\n      }, config.timeout);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (req.aborted) return;\n\n        req.abort();\n        reject(cancel);\n      });\n    }\n\n    // Send the request\n    if (utils.isStream(data)) {\n      data.on('error', function handleStreamError(err) {\n        reject(enhanceError(err, config, null, req));\n      }).pipe(req);\n    } else {\n      req.end(data);\n    }\n  });\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/adapters/http.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request.onreadystatechange = function handleLoad() {\n      if (!request || request.readyState !== 4) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      var cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\n\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (config.withCredentials) {\n      request.withCredentials = true;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (requestData === undefined) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n  config.method = config.method ? config.method.toLowerCase() : 'get';\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\nvar isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Support baseURL config\n  if (config.baseURL && !isAbsoluteURL(config.url)) {\n    config.url = combineURLs(config.baseURL, config.url);\n  }\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers || {}\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {\n    if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    }\n  });\n\n  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {\n    if (utils.isObject(config2[prop])) {\n      config[prop] = utils.deepMerge(config1[prop], config2[prop]);\n    } else if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    } else if (utils.isObject(config1[prop])) {\n      config[prop] = utils.deepMerge(config1[prop]);\n    } else if (typeof config1[prop] !== 'undefined') {\n      config[prop] = config1[prop];\n    }\n  });\n\n  utils.forEach([\n    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',\n    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',\n    'socketPath'\n  ], function defaultToConfig2(prop) {\n    if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    } else if (typeof config1[prop] !== 'undefined') {\n      config[prop] = config1[prop];\n    }\n  });\n\n  return config;\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/core/mergeConfig.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  // Only Node.JS has a process variable that is of [[Class]] process\n  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/http.js\");\n  } else if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%40/gi, '@').\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/axios/node_modules/is-buffer/index.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = merge(result[key], val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Function equal to merge with the difference being that no reference\n * to original objects is kept.\n *\n * @see merge\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction deepMerge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = deepMerge(result[key], val);\n    } else if (typeof val === 'object') {\n      result[key] = deepMerge({}, val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  deepMerge: deepMerge,\n  extend: extend,\n  trim: trim\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\nmodule.exports = function isBuffer (obj) {\n  return obj != null && obj.constructor != null &&\n    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n\n//# sourceURL=webpack://Authing/./node_modules/axios/node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/axios/package.json":
/*!*****************************************!*\
  !*** ./node_modules/axios/package.json ***!
  \*****************************************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, browser, typings, dependencies, bundlesize, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"axios\\\",\\\"version\\\":\\\"0.19.0\\\",\\\"description\\\":\\\"Promise based HTTP client for the browser and node.js\\\",\\\"main\\\":\\\"index.js\\\",\\\"scripts\\\":{\\\"test\\\":\\\"grunt test && bundlesize\\\",\\\"start\\\":\\\"node ./sandbox/server.js\\\",\\\"build\\\":\\\"NODE_ENV=production grunt build\\\",\\\"preversion\\\":\\\"npm test\\\",\\\"version\\\":\\\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\\\",\\\"postversion\\\":\\\"git push && git push --tags\\\",\\\"examples\\\":\\\"node ./examples/server.js\\\",\\\"coveralls\\\":\\\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\\\",\\\"fix\\\":\\\"eslint --fix lib/**/*.js\\\"},\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"https://github.com/axios/axios.git\\\"},\\\"keywords\\\":[\\\"xhr\\\",\\\"http\\\",\\\"ajax\\\",\\\"promise\\\",\\\"node\\\"],\\\"author\\\":\\\"Matt Zabriskie\\\",\\\"license\\\":\\\"MIT\\\",\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/axios/axios/issues\\\"},\\\"homepage\\\":\\\"https://github.com/axios/axios\\\",\\\"devDependencies\\\":{\\\"bundlesize\\\":\\\"^0.17.0\\\",\\\"coveralls\\\":\\\"^3.0.0\\\",\\\"es6-promise\\\":\\\"^4.2.4\\\",\\\"grunt\\\":\\\"^1.0.2\\\",\\\"grunt-banner\\\":\\\"^0.6.0\\\",\\\"grunt-cli\\\":\\\"^1.2.0\\\",\\\"grunt-contrib-clean\\\":\\\"^1.1.0\\\",\\\"grunt-contrib-watch\\\":\\\"^1.0.0\\\",\\\"grunt-eslint\\\":\\\"^20.1.0\\\",\\\"grunt-karma\\\":\\\"^2.0.0\\\",\\\"grunt-mocha-test\\\":\\\"^0.13.3\\\",\\\"grunt-ts\\\":\\\"^6.0.0-beta.19\\\",\\\"grunt-webpack\\\":\\\"^1.0.18\\\",\\\"istanbul-instrumenter-loader\\\":\\\"^1.0.0\\\",\\\"jasmine-core\\\":\\\"^2.4.1\\\",\\\"karma\\\":\\\"^1.3.0\\\",\\\"karma-chrome-launcher\\\":\\\"^2.2.0\\\",\\\"karma-coverage\\\":\\\"^1.1.1\\\",\\\"karma-firefox-launcher\\\":\\\"^1.1.0\\\",\\\"karma-jasmine\\\":\\\"^1.1.1\\\",\\\"karma-jasmine-ajax\\\":\\\"^0.1.13\\\",\\\"karma-opera-launcher\\\":\\\"^1.0.0\\\",\\\"karma-safari-launcher\\\":\\\"^1.0.0\\\",\\\"karma-sauce-launcher\\\":\\\"^1.2.0\\\",\\\"karma-sinon\\\":\\\"^1.0.5\\\",\\\"karma-sourcemap-loader\\\":\\\"^0.3.7\\\",\\\"karma-webpack\\\":\\\"^1.7.0\\\",\\\"load-grunt-tasks\\\":\\\"^3.5.2\\\",\\\"minimist\\\":\\\"^1.2.0\\\",\\\"mocha\\\":\\\"^5.2.0\\\",\\\"sinon\\\":\\\"^4.5.0\\\",\\\"typescript\\\":\\\"^2.8.1\\\",\\\"url-search-params\\\":\\\"^0.10.0\\\",\\\"webpack\\\":\\\"^1.13.1\\\",\\\"webpack-dev-server\\\":\\\"^1.14.1\\\"},\\\"browser\\\":{\\\"./lib/adapters/http.js\\\":\\\"./lib/adapters/xhr.js\\\"},\\\"typings\\\":\\\"./index.d.ts\\\",\\\"dependencies\\\":{\\\"follow-redirects\\\":\\\"1.5.10\\\",\\\"is-buffer\\\":\\\"^2.0.2\\\"},\\\"bundlesize\\\":[{\\\"path\\\":\\\"./dist/axios.min.js\\\",\\\"threshold\\\":\\\"5kB\\\"}]}\");\n\n//# sourceURL=webpack://Authing/./node_modules/axios/package.json?");

/***/ }),

/***/ "./node_modules/follow-redirects/index.js":
/*!************************************************!*\
  !*** ./node_modules/follow-redirects/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var url = __webpack_require__(/*! url */ \"url\");\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar assert = __webpack_require__(/*! assert */ \"assert\");\nvar Writable = __webpack_require__(/*! stream */ \"stream\").Writable;\nvar debug = __webpack_require__(/*! debug */ \"./node_modules/follow-redirects/node_modules/debug/src/index.js\")(\"follow-redirects\");\n\n// RFC7231§4.2.1: Of the request methods defined by this specification,\n// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.\nvar SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };\n\n// Create handlers that pass events from native requests\nvar eventHandlers = Object.create(null);\n[\"abort\", \"aborted\", \"error\", \"socket\", \"timeout\"].forEach(function (event) {\n  eventHandlers[event] = function (arg) {\n    this._redirectable.emit(event, arg);\n  };\n});\n\n// An HTTP(S) request that can be redirected\nfunction RedirectableRequest(options, responseCallback) {\n  // Initialize the request\n  Writable.call(this);\n  options.headers = options.headers || {};\n  this._options = options;\n  this._redirectCount = 0;\n  this._redirects = [];\n  this._requestBodyLength = 0;\n  this._requestBodyBuffers = [];\n\n  // Since http.request treats host as an alias of hostname,\n  // but the url module interprets host as hostname plus port,\n  // eliminate the host property to avoid confusion.\n  if (options.host) {\n    // Use hostname if set, because it has precedence\n    if (!options.hostname) {\n      options.hostname = options.host;\n    }\n    delete options.host;\n  }\n\n  // Attach a callback if passed\n  if (responseCallback) {\n    this.on(\"response\", responseCallback);\n  }\n\n  // React to responses of native requests\n  var self = this;\n  this._onNativeResponse = function (response) {\n    self._processResponse(response);\n  };\n\n  // Complete the URL object when necessary\n  if (!options.pathname && options.path) {\n    var searchPos = options.path.indexOf(\"?\");\n    if (searchPos < 0) {\n      options.pathname = options.path;\n    }\n    else {\n      options.pathname = options.path.substring(0, searchPos);\n      options.search = options.path.substring(searchPos);\n    }\n  }\n\n  // Perform the first request\n  this._performRequest();\n}\nRedirectableRequest.prototype = Object.create(Writable.prototype);\n\n// Writes buffered data to the current native request\nRedirectableRequest.prototype.write = function (data, encoding, callback) {\n  // Validate input and shift parameters if necessary\n  if (!(typeof data === \"string\" || typeof data === \"object\" && (\"length\" in data))) {\n    throw new Error(\"data should be a string, Buffer or Uint8Array\");\n  }\n  if (typeof encoding === \"function\") {\n    callback = encoding;\n    encoding = null;\n  }\n\n  // Ignore empty buffers, since writing them doesn't invoke the callback\n  // https://github.com/nodejs/node/issues/22066\n  if (data.length === 0) {\n    if (callback) {\n      callback();\n    }\n    return;\n  }\n  // Only write when we don't exceed the maximum body length\n  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {\n    this._requestBodyLength += data.length;\n    this._requestBodyBuffers.push({ data: data, encoding: encoding });\n    this._currentRequest.write(data, encoding, callback);\n  }\n  // Error when we exceed the maximum body length\n  else {\n    this.emit(\"error\", new Error(\"Request body larger than maxBodyLength limit\"));\n    this.abort();\n  }\n};\n\n// Ends the current native request\nRedirectableRequest.prototype.end = function (data, encoding, callback) {\n  // Shift parameters if necessary\n  if (typeof data === \"function\") {\n    callback = data;\n    data = encoding = null;\n  }\n  else if (typeof encoding === \"function\") {\n    callback = encoding;\n    encoding = null;\n  }\n\n  // Write data and end\n  var currentRequest = this._currentRequest;\n  this.write(data || \"\", encoding, function () {\n    currentRequest.end(null, null, callback);\n  });\n};\n\n// Sets a header value on the current native request\nRedirectableRequest.prototype.setHeader = function (name, value) {\n  this._options.headers[name] = value;\n  this._currentRequest.setHeader(name, value);\n};\n\n// Clears a header value on the current native request\nRedirectableRequest.prototype.removeHeader = function (name) {\n  delete this._options.headers[name];\n  this._currentRequest.removeHeader(name);\n};\n\n// Proxy all other public ClientRequest methods\n[\n  \"abort\", \"flushHeaders\", \"getHeader\",\n  \"setNoDelay\", \"setSocketKeepAlive\", \"setTimeout\",\n].forEach(function (method) {\n  RedirectableRequest.prototype[method] = function (a, b) {\n    return this._currentRequest[method](a, b);\n  };\n});\n\n// Proxy all public ClientRequest properties\n[\"aborted\", \"connection\", \"socket\"].forEach(function (property) {\n  Object.defineProperty(RedirectableRequest.prototype, property, {\n    get: function () { return this._currentRequest[property]; },\n  });\n});\n\n// Executes the next native request (initial or redirect)\nRedirectableRequest.prototype._performRequest = function () {\n  // Load the native protocol\n  var protocol = this._options.protocol;\n  var nativeProtocol = this._options.nativeProtocols[protocol];\n  if (!nativeProtocol) {\n    this.emit(\"error\", new Error(\"Unsupported protocol \" + protocol));\n    return;\n  }\n\n  // If specified, use the agent corresponding to the protocol\n  // (HTTP and HTTPS use different types of agents)\n  if (this._options.agents) {\n    var scheme = protocol.substr(0, protocol.length - 1);\n    this._options.agent = this._options.agents[scheme];\n  }\n\n  // Create the native request\n  var request = this._currentRequest =\n        nativeProtocol.request(this._options, this._onNativeResponse);\n  this._currentUrl = url.format(this._options);\n\n  // Set up event handlers\n  request._redirectable = this;\n  for (var event in eventHandlers) {\n    /* istanbul ignore else */\n    if (event) {\n      request.on(event, eventHandlers[event]);\n    }\n  }\n\n  // End a redirected request\n  // (The first request must be ended explicitly with RedirectableRequest#end)\n  if (this._isRedirect) {\n    // Write the request entity and end.\n    var i = 0;\n    var buffers = this._requestBodyBuffers;\n    (function writeNext() {\n      if (i < buffers.length) {\n        var buffer = buffers[i++];\n        request.write(buffer.data, buffer.encoding, writeNext);\n      }\n      else {\n        request.end();\n      }\n    }());\n  }\n};\n\n// Processes a response from the current native request\nRedirectableRequest.prototype._processResponse = function (response) {\n  // Store the redirected response\n  if (this._options.trackRedirects) {\n    this._redirects.push({\n      url: this._currentUrl,\n      headers: response.headers,\n      statusCode: response.statusCode,\n    });\n  }\n\n  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates\n  // that further action needs to be taken by the user agent in order to\n  // fulfill the request. If a Location header field is provided,\n  // the user agent MAY automatically redirect its request to the URI\n  // referenced by the Location field value,\n  // even if the specific status code is not understood.\n  var location = response.headers.location;\n  if (location && this._options.followRedirects !== false &&\n      response.statusCode >= 300 && response.statusCode < 400) {\n    // RFC7231§6.4: A client SHOULD detect and intervene\n    // in cyclical redirections (i.e., \"infinite\" redirection loops).\n    if (++this._redirectCount > this._options.maxRedirects) {\n      this.emit(\"error\", new Error(\"Max redirects exceeded.\"));\n      return;\n    }\n\n    // RFC7231§6.4: Automatic redirection needs to done with\n    // care for methods not known to be safe […],\n    // since the user might not wish to redirect an unsafe request.\n    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates\n    // that the target resource resides temporarily under a different URI\n    // and the user agent MUST NOT change the request method\n    // if it performs an automatic redirection to that URI.\n    var header;\n    var headers = this._options.headers;\n    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {\n      this._options.method = \"GET\";\n      // Drop a possible entity and headers related to it\n      this._requestBodyBuffers = [];\n      for (header in headers) {\n        if (/^content-/i.test(header)) {\n          delete headers[header];\n        }\n      }\n    }\n\n    // Drop the Host header, as the redirect might lead to a different host\n    if (!this._isRedirect) {\n      for (header in headers) {\n        if (/^host$/i.test(header)) {\n          delete headers[header];\n        }\n      }\n    }\n\n    // Perform the redirected request\n    var redirectUrl = url.resolve(this._currentUrl, location);\n    debug(\"redirecting to\", redirectUrl);\n    Object.assign(this._options, url.parse(redirectUrl));\n    this._isRedirect = true;\n    this._performRequest();\n\n    // Discard the remainder of the response to avoid waiting for data\n    response.destroy();\n  }\n  else {\n    // The response is not a redirect; return it as-is\n    response.responseUrl = this._currentUrl;\n    response.redirects = this._redirects;\n    this.emit(\"response\", response);\n\n    // Clean up\n    this._requestBodyBuffers = [];\n  }\n};\n\n// Wraps the key/value object of protocols with redirect functionality\nfunction wrap(protocols) {\n  // Default settings\n  var exports = {\n    maxRedirects: 21,\n    maxBodyLength: 10 * 1024 * 1024,\n  };\n\n  // Wrap each protocol\n  var nativeProtocols = {};\n  Object.keys(protocols).forEach(function (scheme) {\n    var protocol = scheme + \":\";\n    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];\n    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);\n\n    // Executes a request, following redirects\n    wrappedProtocol.request = function (options, callback) {\n      if (typeof options === \"string\") {\n        options = url.parse(options);\n        options.maxRedirects = exports.maxRedirects;\n      }\n      else {\n        options = Object.assign({\n          protocol: protocol,\n          maxRedirects: exports.maxRedirects,\n          maxBodyLength: exports.maxBodyLength,\n        }, options);\n      }\n      options.nativeProtocols = nativeProtocols;\n      assert.equal(options.protocol, protocol, \"protocol mismatch\");\n      debug(\"options\", options);\n      return new RedirectableRequest(options, callback);\n    };\n\n    // Executes a GET request, following redirects\n    wrappedProtocol.get = function (options, callback) {\n      var request = wrappedProtocol.request(options, callback);\n      request.end();\n      return request;\n    };\n  });\n  return exports;\n}\n\n// Exports\nmodule.exports = wrap({ http: http, https: https });\nmodule.exports.wrap = wrap;\n\n\n//# sourceURL=webpack://Authing/./node_modules/follow-redirects/index.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * This is the web browser implementation of `debug()`.\n *\n * Expose `debug()` as the module.\n */\n\nexports = module.exports = __webpack_require__(/*! ./debug */ \"./node_modules/follow-redirects/node_modules/debug/src/debug.js\");\nexports.log = log;\nexports.formatArgs = formatArgs;\nexports.save = save;\nexports.load = load;\nexports.useColors = useColors;\nexports.storage = 'undefined' != typeof chrome\n               && 'undefined' != typeof chrome.storage\n                  ? chrome.storage.local\n                  : localstorage();\n\n/**\n * Colors.\n */\n\nexports.colors = [\n  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',\n  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',\n  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',\n  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',\n  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',\n  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',\n  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',\n  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',\n  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',\n  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',\n  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'\n];\n\n/**\n * Currently only WebKit-based Web Inspectors, Firefox >= v31,\n * and the Firebug extension (any Firefox version) are known\n * to support \"%c\" CSS customizations.\n *\n * TODO: add a `localStorage` variable to explicitly enable/disable colors\n */\n\nfunction useColors() {\n  // NB: In an Electron preload script, document will be defined but not fully\n  // initialized. Since we know we're in Chrome, we'll just detect this case\n  // explicitly\n  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {\n    return true;\n  }\n\n  // Internet Explorer and Edge do not support colors.\n  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\\/(\\d+)/)) {\n    return false;\n  }\n\n  // is webkit? http://stackoverflow.com/a/16459606/376773\n  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632\n  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||\n    // is firebug? http://stackoverflow.com/a/398120/376773\n    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||\n    // is firefox >= v31?\n    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages\n    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||\n    // double check webkit in userAgent just in case we are in a worker\n    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\/(\\d+)/));\n}\n\n/**\n * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.\n */\n\nexports.formatters.j = function(v) {\n  try {\n    return JSON.stringify(v);\n  } catch (err) {\n    return '[UnexpectedJSONParseError]: ' + err.message;\n  }\n};\n\n\n/**\n * Colorize log arguments if enabled.\n *\n * @api public\n */\n\nfunction formatArgs(args) {\n  var useColors = this.useColors;\n\n  args[0] = (useColors ? '%c' : '')\n    + this.namespace\n    + (useColors ? ' %c' : ' ')\n    + args[0]\n    + (useColors ? '%c ' : ' ')\n    + '+' + exports.humanize(this.diff);\n\n  if (!useColors) return;\n\n  var c = 'color: ' + this.color;\n  args.splice(1, 0, c, 'color: inherit')\n\n  // the final \"%c\" is somewhat tricky, because there could be other\n  // arguments passed either before or after the %c, so we need to\n  // figure out the correct index to insert the CSS into\n  var index = 0;\n  var lastC = 0;\n  args[0].replace(/%[a-zA-Z%]/g, function(match) {\n    if ('%%' === match) return;\n    index++;\n    if ('%c' === match) {\n      // we only are interested in the *last* %c\n      // (the user may have provided their own)\n      lastC = index;\n    }\n  });\n\n  args.splice(lastC, 0, c);\n}\n\n/**\n * Invokes `console.log()` when available.\n * No-op when `console.log` is not a \"function\".\n *\n * @api public\n */\n\nfunction log() {\n  // this hackery is required for IE8/9, where\n  // the `console.log` function doesn't have 'apply'\n  return 'object' === typeof console\n    && console.log\n    && Function.prototype.apply.call(console.log, console, arguments);\n}\n\n/**\n * Save `namespaces`.\n *\n * @param {String} namespaces\n * @api private\n */\n\nfunction save(namespaces) {\n  try {\n    if (null == namespaces) {\n      exports.storage.removeItem('debug');\n    } else {\n      exports.storage.debug = namespaces;\n    }\n  } catch(e) {}\n}\n\n/**\n * Load `namespaces`.\n *\n * @return {String} returns the previously persisted debug modes\n * @api private\n */\n\nfunction load() {\n  var r;\n  try {\n    r = exports.storage.debug;\n  } catch(e) {}\n\n  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG\n  if (!r && typeof process !== 'undefined' && 'env' in process) {\n    r = process.env.DEBUG;\n  }\n\n  return r;\n}\n\n/**\n * Enable namespaces listed in `localStorage.debug` initially.\n */\n\nexports.enable(load());\n\n/**\n * Localstorage attempts to return the localstorage.\n *\n * This is necessary because safari throws\n * when a user disables cookies/localstorage\n * and you attempt to access it.\n *\n * @return {LocalStorage}\n * @api private\n */\n\nfunction localstorage() {\n  try {\n    return window.localStorage;\n  } catch (e) {}\n}\n\n\n//# sourceURL=webpack://Authing/./node_modules/follow-redirects/node_modules/debug/src/browser.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n/**\n * This is the common logic for both the Node.js and web browser\n * implementations of `debug()`.\n *\n * Expose `debug()` as the module.\n */\n\nexports = module.exports = createDebug.debug = createDebug['default'] = createDebug;\nexports.coerce = coerce;\nexports.disable = disable;\nexports.enable = enable;\nexports.enabled = enabled;\nexports.humanize = __webpack_require__(/*! ms */ \"./node_modules/follow-redirects/node_modules/ms/index.js\");\n\n/**\n * Active `debug` instances.\n */\nexports.instances = [];\n\n/**\n * The currently active debug mode names, and names to skip.\n */\n\nexports.names = [];\nexports.skips = [];\n\n/**\n * Map of special \"%n\" handling functions, for the debug \"format\" argument.\n *\n * Valid key names are a single, lower or upper-case letter, i.e. \"n\" and \"N\".\n */\n\nexports.formatters = {};\n\n/**\n * Select a color.\n * @param {String} namespace\n * @return {Number}\n * @api private\n */\n\nfunction selectColor(namespace) {\n  var hash = 0, i;\n\n  for (i in namespace) {\n    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);\n    hash |= 0; // Convert to 32bit integer\n  }\n\n  return exports.colors[Math.abs(hash) % exports.colors.length];\n}\n\n/**\n * Create a debugger with the given `namespace`.\n *\n * @param {String} namespace\n * @return {Function}\n * @api public\n */\n\nfunction createDebug(namespace) {\n\n  var prevTime;\n\n  function debug() {\n    // disabled?\n    if (!debug.enabled) return;\n\n    var self = debug;\n\n    // set `diff` timestamp\n    var curr = +new Date();\n    var ms = curr - (prevTime || curr);\n    self.diff = ms;\n    self.prev = prevTime;\n    self.curr = curr;\n    prevTime = curr;\n\n    // turn the `arguments` into a proper Array\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n\n    args[0] = exports.coerce(args[0]);\n\n    if ('string' !== typeof args[0]) {\n      // anything else let's inspect with %O\n      args.unshift('%O');\n    }\n\n    // apply any `formatters` transformations\n    var index = 0;\n    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {\n      // if we encounter an escaped % then don't increase the array index\n      if (match === '%%') return match;\n      index++;\n      var formatter = exports.formatters[format];\n      if ('function' === typeof formatter) {\n        var val = args[index];\n        match = formatter.call(self, val);\n\n        // now we need to remove `args[index]` since it's inlined in the `format`\n        args.splice(index, 1);\n        index--;\n      }\n      return match;\n    });\n\n    // apply env-specific formatting (colors, etc.)\n    exports.formatArgs.call(self, args);\n\n    var logFn = debug.log || exports.log || console.log.bind(console);\n    logFn.apply(self, args);\n  }\n\n  debug.namespace = namespace;\n  debug.enabled = exports.enabled(namespace);\n  debug.useColors = exports.useColors();\n  debug.color = selectColor(namespace);\n  debug.destroy = destroy;\n\n  // env-specific initialization logic for debug instances\n  if ('function' === typeof exports.init) {\n    exports.init(debug);\n  }\n\n  exports.instances.push(debug);\n\n  return debug;\n}\n\nfunction destroy () {\n  var index = exports.instances.indexOf(this);\n  if (index !== -1) {\n    exports.instances.splice(index, 1);\n    return true;\n  } else {\n    return false;\n  }\n}\n\n/**\n * Enables a debug mode by namespaces. This can include modes\n * separated by a colon and wildcards.\n *\n * @param {String} namespaces\n * @api public\n */\n\nfunction enable(namespaces) {\n  exports.save(namespaces);\n\n  exports.names = [];\n  exports.skips = [];\n\n  var i;\n  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\\s,]+/);\n  var len = split.length;\n\n  for (i = 0; i < len; i++) {\n    if (!split[i]) continue; // ignore empty strings\n    namespaces = split[i].replace(/\\*/g, '.*?');\n    if (namespaces[0] === '-') {\n      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));\n    } else {\n      exports.names.push(new RegExp('^' + namespaces + '$'));\n    }\n  }\n\n  for (i = 0; i < exports.instances.length; i++) {\n    var instance = exports.instances[i];\n    instance.enabled = exports.enabled(instance.namespace);\n  }\n}\n\n/**\n * Disable debug output.\n *\n * @api public\n */\n\nfunction disable() {\n  exports.enable('');\n}\n\n/**\n * Returns true if the given mode name is enabled, false otherwise.\n *\n * @param {String} name\n * @return {Boolean}\n * @api public\n */\n\nfunction enabled(name) {\n  if (name[name.length - 1] === '*') {\n    return true;\n  }\n  var i, len;\n  for (i = 0, len = exports.skips.length; i < len; i++) {\n    if (exports.skips[i].test(name)) {\n      return false;\n    }\n  }\n  for (i = 0, len = exports.names.length; i < len; i++) {\n    if (exports.names[i].test(name)) {\n      return true;\n    }\n  }\n  return false;\n}\n\n/**\n * Coerce `val`.\n *\n * @param {Mixed} val\n * @return {Mixed}\n * @api private\n */\n\nfunction coerce(val) {\n  if (val instanceof Error) return val.stack || val.message;\n  return val;\n}\n\n\n//# sourceURL=webpack://Authing/./node_modules/follow-redirects/node_modules/debug/src/debug.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Detect Electron renderer process, which is node, but we should\n * treat as a browser.\n */\n\nif (typeof process === 'undefined' || process.type === 'renderer') {\n  module.exports = __webpack_require__(/*! ./browser.js */ \"./node_modules/follow-redirects/node_modules/debug/src/browser.js\");\n} else {\n  module.exports = __webpack_require__(/*! ./node.js */ \"./node_modules/follow-redirects/node_modules/debug/src/node.js\");\n}\n\n\n//# sourceURL=webpack://Authing/./node_modules/follow-redirects/node_modules/debug/src/index.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/node.js":
/*!**********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/node.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\n\nvar tty = __webpack_require__(/*! tty */ \"tty\");\nvar util = __webpack_require__(/*! util */ \"util\");\n\n/**\n * This is the Node.js implementation of `debug()`.\n *\n * Expose `debug()` as the module.\n */\n\nexports = module.exports = __webpack_require__(/*! ./debug */ \"./node_modules/follow-redirects/node_modules/debug/src/debug.js\");\nexports.init = init;\nexports.log = log;\nexports.formatArgs = formatArgs;\nexports.save = save;\nexports.load = load;\nexports.useColors = useColors;\n\n/**\n * Colors.\n */\n\nexports.colors = [ 6, 2, 3, 4, 5, 1 ];\n\ntry {\n  var supportsColor = __webpack_require__(/*! supports-color */ \"./node_modules/supports-color/index.js\");\n  if (supportsColor && supportsColor.level >= 2) {\n    exports.colors = [\n      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,\n      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,\n      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,\n      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,\n      205, 206, 207, 208, 209, 214, 215, 220, 221\n    ];\n  }\n} catch (err) {\n  // swallow - we only care if `supports-color` is available; it doesn't have to be.\n}\n\n/**\n * Build up the default `inspectOpts` object from the environment variables.\n *\n *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js\n */\n\nexports.inspectOpts = Object.keys(process.env).filter(function (key) {\n  return /^debug_/i.test(key);\n}).reduce(function (obj, key) {\n  // camel-case\n  var prop = key\n    .substring(6)\n    .toLowerCase()\n    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });\n\n  // coerce string value into JS value\n  var val = process.env[key];\n  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;\n  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;\n  else if (val === 'null') val = null;\n  else val = Number(val);\n\n  obj[prop] = val;\n  return obj;\n}, {});\n\n/**\n * Is stdout a TTY? Colored output is enabled when `true`.\n */\n\nfunction useColors() {\n  return 'colors' in exports.inspectOpts\n    ? Boolean(exports.inspectOpts.colors)\n    : tty.isatty(process.stderr.fd);\n}\n\n/**\n * Map %o to `util.inspect()`, all on a single line.\n */\n\nexports.formatters.o = function(v) {\n  this.inspectOpts.colors = this.useColors;\n  return util.inspect(v, this.inspectOpts)\n    .split('\\n').map(function(str) {\n      return str.trim()\n    }).join(' ');\n};\n\n/**\n * Map %o to `util.inspect()`, allowing multiple lines if needed.\n */\n\nexports.formatters.O = function(v) {\n  this.inspectOpts.colors = this.useColors;\n  return util.inspect(v, this.inspectOpts);\n};\n\n/**\n * Adds ANSI color escape codes if enabled.\n *\n * @api public\n */\n\nfunction formatArgs(args) {\n  var name = this.namespace;\n  var useColors = this.useColors;\n\n  if (useColors) {\n    var c = this.color;\n    var colorCode = '\\u001b[3' + (c < 8 ? c : '8;5;' + c);\n    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\\u001b[0m';\n\n    args[0] = prefix + args[0].split('\\n').join('\\n' + prefix);\n    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\\u001b[0m');\n  } else {\n    args[0] = getDate() + name + ' ' + args[0];\n  }\n}\n\nfunction getDate() {\n  if (exports.inspectOpts.hideDate) {\n    return '';\n  } else {\n    return new Date().toISOString() + ' ';\n  }\n}\n\n/**\n * Invokes `util.format()` with the specified arguments and writes to stderr.\n */\n\nfunction log() {\n  return process.stderr.write(util.format.apply(util, arguments) + '\\n');\n}\n\n/**\n * Save `namespaces`.\n *\n * @param {String} namespaces\n * @api private\n */\n\nfunction save(namespaces) {\n  if (null == namespaces) {\n    // If you set a process.env field to null or undefined, it gets cast to the\n    // string 'null' or 'undefined'. Just delete instead.\n    delete process.env.DEBUG;\n  } else {\n    process.env.DEBUG = namespaces;\n  }\n}\n\n/**\n * Load `namespaces`.\n *\n * @return {String} returns the previously persisted debug modes\n * @api private\n */\n\nfunction load() {\n  return process.env.DEBUG;\n}\n\n/**\n * Init logic for `debug` instances.\n *\n * Create a new `inspectOpts` object in case `useColors` is set\n * differently for a particular `debug` instance.\n */\n\nfunction init (debug) {\n  debug.inspectOpts = {};\n\n  var keys = Object.keys(exports.inspectOpts);\n  for (var i = 0; i < keys.length; i++) {\n    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];\n  }\n}\n\n/**\n * Enable namespaces listed in `process.env.DEBUG` initially.\n */\n\nexports.enable(load());\n\n\n//# sourceURL=webpack://Authing/./node_modules/follow-redirects/node_modules/debug/src/node.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/ms/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/ms/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} [options]\n * @throws {Error} throw an error if val is not a non-empty string or a number\n * @return {String|Number}\n * @api public\n */\n\nmodule.exports = function(val, options) {\n  options = options || {};\n  var type = typeof val;\n  if (type === 'string' && val.length > 0) {\n    return parse(val);\n  } else if (type === 'number' && isNaN(val) === false) {\n    return options.long ? fmtLong(val) : fmtShort(val);\n  }\n  throw new Error(\n    'val is not a non-empty string or a valid number. val=' +\n      JSON.stringify(val)\n  );\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */\n\nfunction parse(str) {\n  str = String(str);\n  if (str.length > 100) {\n    return;\n  }\n  var match = /^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(\n    str\n  );\n  if (!match) {\n    return;\n  }\n  var n = parseFloat(match[1]);\n  var type = (match[2] || 'ms').toLowerCase();\n  switch (type) {\n    case 'years':\n    case 'year':\n    case 'yrs':\n    case 'yr':\n    case 'y':\n      return n * y;\n    case 'days':\n    case 'day':\n    case 'd':\n      return n * d;\n    case 'hours':\n    case 'hour':\n    case 'hrs':\n    case 'hr':\n    case 'h':\n      return n * h;\n    case 'minutes':\n    case 'minute':\n    case 'mins':\n    case 'min':\n    case 'm':\n      return n * m;\n    case 'seconds':\n    case 'second':\n    case 'secs':\n    case 'sec':\n    case 's':\n      return n * s;\n    case 'milliseconds':\n    case 'millisecond':\n    case 'msecs':\n    case 'msec':\n    case 'ms':\n      return n;\n    default:\n      return undefined;\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtShort(ms) {\n  if (ms >= d) {\n    return Math.round(ms / d) + 'd';\n  }\n  if (ms >= h) {\n    return Math.round(ms / h) + 'h';\n  }\n  if (ms >= m) {\n    return Math.round(ms / m) + 'm';\n  }\n  if (ms >= s) {\n    return Math.round(ms / s) + 's';\n  }\n  return ms + 'ms';\n}\n\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtLong(ms) {\n  return plural(ms, d, 'day') ||\n    plural(ms, h, 'hour') ||\n    plural(ms, m, 'minute') ||\n    plural(ms, s, 'second') ||\n    ms + ' ms';\n}\n\n/**\n * Pluralization helper.\n */\n\nfunction plural(ms, n, name) {\n  if (ms < n) {\n    return;\n  }\n  if (ms < n * 1.5) {\n    return Math.floor(ms / n) + ' ' + name;\n  }\n  return Math.ceil(ms / n) + ' ' + name + 's';\n}\n\n\n//# sourceURL=webpack://Authing/./node_modules/follow-redirects/node_modules/ms/index.js?");

/***/ }),

/***/ "./node_modules/has-flag/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-flag/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = (flag, argv) => {\n\targv = argv || process.argv;\n\tconst prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');\n\tconst pos = argv.indexOf(prefix + flag);\n\tconst terminatorPos = argv.indexOf('--');\n\treturn pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/has-flag/index.js?");

/***/ }),

/***/ "./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst os = __webpack_require__(/*! os */ \"os\");\nconst hasFlag = __webpack_require__(/*! has-flag */ \"./node_modules/has-flag/index.js\");\n\nconst {env} = process;\n\nlet forceColor;\nif (hasFlag('no-color') ||\n\thasFlag('no-colors') ||\n\thasFlag('color=false') ||\n\thasFlag('color=never')) {\n\tforceColor = 0;\n} else if (hasFlag('color') ||\n\thasFlag('colors') ||\n\thasFlag('color=true') ||\n\thasFlag('color=always')) {\n\tforceColor = 1;\n}\nif ('FORCE_COLOR' in env) {\n\tif (env.FORCE_COLOR === true || env.FORCE_COLOR === 'true') {\n\t\tforceColor = 1;\n\t} else if (env.FORCE_COLOR === false || env.FORCE_COLOR === 'false') {\n\t\tforceColor = 0;\n\t} else {\n\t\tforceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);\n\t}\n}\n\nfunction translateLevel(level) {\n\tif (level === 0) {\n\t\treturn false;\n\t}\n\n\treturn {\n\t\tlevel,\n\t\thasBasic: true,\n\t\thas256: level >= 2,\n\t\thas16m: level >= 3\n\t};\n}\n\nfunction supportsColor(stream) {\n\tif (forceColor === 0) {\n\t\treturn 0;\n\t}\n\n\tif (hasFlag('color=16m') ||\n\t\thasFlag('color=full') ||\n\t\thasFlag('color=truecolor')) {\n\t\treturn 3;\n\t}\n\n\tif (hasFlag('color=256')) {\n\t\treturn 2;\n\t}\n\n\tif (stream && !stream.isTTY && forceColor === undefined) {\n\t\treturn 0;\n\t}\n\n\tconst min = forceColor || 0;\n\n\tif (env.TERM === 'dumb') {\n\t\treturn min;\n\t}\n\n\tif (process.platform === 'win32') {\n\t\t// Node.js 7.5.0 is the first version of Node.js to include a patch to\n\t\t// libuv that enables 256 color output on Windows. Anything earlier and it\n\t\t// won't work. However, here we target Node.js 8 at minimum as it is an LTS\n\t\t// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows\n\t\t// release that supports 256 colors. Windows 10 build 14931 is the first release\n\t\t// that supports 16m/TrueColor.\n\t\tconst osRelease = os.release().split('.');\n\t\tif (\n\t\t\tNumber(process.versions.node.split('.')[0]) >= 8 &&\n\t\t\tNumber(osRelease[0]) >= 10 &&\n\t\t\tNumber(osRelease[2]) >= 10586\n\t\t) {\n\t\t\treturn Number(osRelease[2]) >= 14931 ? 3 : 2;\n\t\t}\n\n\t\treturn 1;\n\t}\n\n\tif ('CI' in env) {\n\t\tif (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {\n\t\t\treturn 1;\n\t\t}\n\n\t\treturn min;\n\t}\n\n\tif ('TEAMCITY_VERSION' in env) {\n\t\treturn /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\n\t}\n\n\tif (env.COLORTERM === 'truecolor') {\n\t\treturn 3;\n\t}\n\n\tif ('TERM_PROGRAM' in env) {\n\t\tconst version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);\n\n\t\tswitch (env.TERM_PROGRAM) {\n\t\t\tcase 'iTerm.app':\n\t\t\t\treturn version >= 3 ? 3 : 2;\n\t\t\tcase 'Apple_Terminal':\n\t\t\t\treturn 2;\n\t\t\t// No default\n\t\t}\n\t}\n\n\tif (/-256(color)?$/i.test(env.TERM)) {\n\t\treturn 2;\n\t}\n\n\tif (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n\t\treturn 1;\n\t}\n\n\tif ('COLORTERM' in env) {\n\t\treturn 1;\n\t}\n\n\treturn min;\n}\n\nfunction getSupportLevel(stream) {\n\tconst level = supportsColor(stream);\n\treturn translateLevel(level);\n}\n\nmodule.exports = {\n\tsupportsColor: getSupportLevel,\n\tstdout: getSupportLevel(process.stdout),\n\tstderr: getSupportLevel(process.stderr)\n};\n\n\n//# sourceURL=webpack://Authing/./node_modules/supports-color/index.js?");

/***/ }),

/***/ "./src/GraphQL.js":
/*!************************!*\
  !*** ./src/GraphQL.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.GraphQLClient = void 0;\n\nvar _TokenManager = _interopRequireDefault(__webpack_require__(/*! ./TokenManager */ \"./src/TokenManager.js\"));\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GraphQLClient =\n/*#__PURE__*/\nfunction () {\n  function GraphQLClient(options) {\n    _classCallCheck(this, GraphQLClient);\n\n    var defaultOpt = {\n      timeout: options.timeout || 8000,\n      method: 'POST'\n    };\n    this.options = _objectSpread({}, defaultOpt, {}, options);\n  }\n\n  _createClass(GraphQLClient, [{\n    key: \"request\",\n    value: function request(data, tokenType) {\n      this.options.data = data; // 每次请求前先看看要不要发 token\n\n      this.options = _objectSpread({}, this.options, {\n        headers: {\n          Authorization: _TokenManager[\"default\"].getInstance().getToken(tokenType)\n        }\n      });\n      return (0, _axios[\"default\"])(this.options).then(function (res) {\n        var d = res.data;\n\n        if (d.errors) {\n          throw d.errors[0];\n        }\n\n        var first = Object.keys(d.data)[0]; // return d.data[data.operationName];\n\n        return d.data[first];\n      });\n    }\n  }]);\n\n  return GraphQLClient;\n}();\n\nexports.GraphQLClient = GraphQLClient;\n\n//# sourceURL=webpack://Authing/./src/GraphQL.js?");

/***/ }),

/***/ "./src/TokenManager.js":
/*!*****************************!*\
  !*** ./src/TokenManager.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Token 状态管理，单例\nvar TokenManager =\n/*#__PURE__*/\nfunction () {\n  function TokenManager() {\n    _classCallCheck(this, TokenManager);\n  }\n\n  _createClass(TokenManager, [{\n    key: \"setUserToken\",\n    value: function setUserToken(userToken) {\n      TokenManager.instance.userToken = userToken;\n    }\n  }, {\n    key: \"setOwnerToken\",\n    value: function setOwnerToken(ownerToken) {\n      TokenManager.instance.ownerToken = ownerToken;\n    }\n  }, {\n    key: \"setToken\",\n    value: function setToken(token) {\n      if (typeof window === 'undefined') {\n        return TokenManager.instance.ownerToken = token;\n      } else {\n        return TokenManager.instance.userToken = token;\n      }\n    }\n  }, {\n    key: \"getToken\",\n    value: function getToken(type) {\n      if (typeof type === 'undefined') {\n        /*\n        if (typeof window === 'undefined') {\n          return `Bearer ${TokenManager.instance.ownerToken}`;\n        } else {\n          return `Bearer ${TokenManager.instance.userToken}`;\n        }\n        */\n        if (TokenManager.instance.userToken) {\n          return \"Bearer \".concat(TokenManager.instance.userToken);\n        } else if (TokenManager.instance.ownerToken) {\n          return \"Bearer \".concat(TokenManager.instance.ownerToken);\n        } else {\n          return null;\n        }\n      } else {\n        return \"Bearer \".concat(TokenManager.instance[type]);\n      }\n    }\n  }], [{\n    key: \"getInstance\",\n    value: function getInstance() {\n      if (!TokenManager.instance) {\n        TokenManager.instance = new TokenManager();\n      }\n\n      return TokenManager.instance;\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      TokenManager.instance = null;\n    }\n  }]);\n\n  return TokenManager;\n}();\n\nexports[\"default\"] = TokenManager;\n\nfunction test() {\n  var tm = TokenManager.getInstance();\n  var tm2 = TokenManager.getInstance();\n  console.log(tm === tm2);\n  var a = '';\n  tm.setUserToken('11111');\n  tm.setOwnerToken('22222');\n  a = tm.getToken();\n  console.log(a);\n  a = tm.getToken('userToken');\n  console.log(a);\n  a = tm.getToken('ownerToken');\n  console.log(a);\n} // test();\n\n//# sourceURL=webpack://Authing/./src/TokenManager.js?");

/***/ }),

/***/ "./src/configs.js":
/*!************************!*\
  !*** ./src/configs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  services: {\n    user: {\n      host: 'https://users.authing.cn/graphql'\n    },\n    oauth: {\n      host: 'https://oauth.authing.cn/graphql'\n    }\n  },\n  openSSLSecret: \"-----BEGIN PUBLIC KEY-----\\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb\\n5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae\\n+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM\\nGKl64GDcIq3au+aqJQIDAQAB\\n-----END PUBLIC KEY-----\\n\",\n  inBrowser: typeof window !== 'undefined' && typeof document !== 'undefined'\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://Authing/./src/configs.js?");

/***/ }),

/***/ "./src/functions sync \\.js$":
/*!***********************************************!*\
  !*** ./src/functions sync nonrecursive \.js$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./_uploadAvatar.js\": \"./src/functions/_uploadAvatar.js\",\n\t\"./assignUserToRole.js\": \"./src/functions/assignUserToRole.js\",\n\t\"./bindOAuth.js\": \"./src/functions/bindOAuth.js\",\n\t\"./cdnPreflightFun.js\": \"./src/functions/cdnPreflightFun.js\",\n\t\"./changeMFA.js\": \"./src/functions/changeMFA.js\",\n\t\"./changePassword.js\": \"./src/functions/changePassword.js\",\n\t\"./checkLoginStatus.js\": \"./src/functions/checkLoginStatus.js\",\n\t\"./checkPreflight.js\": \"./src/functions/checkPreflight.js\",\n\t\"./checkQR.js\": \"./src/functions/checkQR.js\",\n\t\"./configs.js\": \"./src/functions/configs.js\",\n\t\"./createRole.js\": \"./src/functions/createRole.js\",\n\t\"./decodeToken.js\": \"./src/functions/decodeToken.js\",\n\t\"./genQRCode.js\": \"./src/functions/genQRCode.js\",\n\t\"./getAuthedAppList.js\": \"./src/functions/getAuthedAppList.js\",\n\t\"./getUserPoolSettings.js\": \"./src/functions/getUserPoolSettings.js\",\n\t\"./getVerificationCode.js\": \"./src/functions/getVerificationCode.js\",\n\t\"./index.js\": \"./src/functions/index.js\",\n\t\"./list.js\": \"./src/functions/list.js\",\n\t\"./login.js\": \"./src/functions/login.js\",\n\t\"./loginByLDAP.js\": \"./src/functions/loginByLDAP.js\",\n\t\"./loginByPhoneCode.js\": \"./src/functions/loginByPhoneCode.js\",\n\t\"./loginFromLocalStorage.js\": \"./src/functions/loginFromLocalStorage.js\",\n\t\"./logout.js\": \"./src/functions/logout.js\",\n\t\"./preflightFun.js\": \"./src/functions/preflightFun.js\",\n\t\"./queryMFA.js\": \"./src/functions/queryMFA.js\",\n\t\"./queryPermissions.js\": \"./src/functions/queryPermissions.js\",\n\t\"./queryRoles.js\": \"./src/functions/queryRoles.js\",\n\t\"./readOAuthList.js\": \"./src/functions/readOAuthList.js\",\n\t\"./readUserOAuthList.js\": \"./src/functions/readUserOAuthList.js\",\n\t\"./refreshToken.js\": \"./src/functions/refreshToken.js\",\n\t\"./register.js\": \"./src/functions/register.js\",\n\t\"./remove.js\": \"./src/functions/remove.js\",\n\t\"./removeUserFromRole.js\": \"./src/functions/removeUserFromRole.js\",\n\t\"./revokeAuthedApp.js\": \"./src/functions/revokeAuthedApp.js\",\n\t\"./selectAvatarFile.js\": \"./src/functions/selectAvatarFile.js\",\n\t\"./sendResetPasswordEmail.js\": \"./src/functions/sendResetPasswordEmail.js\",\n\t\"./sendVerifyEmail.js\": \"./src/functions/sendVerifyEmail.js\",\n\t\"./startWXAppScaning.js\": \"./src/functions/startWXAppScaning.js\",\n\t\"./unbindEmail.js\": \"./src/functions/unbindEmail.js\",\n\t\"./unbindOAuth.js\": \"./src/functions/unbindOAuth.js\",\n\t\"./update.js\": \"./src/functions/update.js\",\n\t\"./updateFailedTips.js\": \"./src/functions/updateFailedTips.js\",\n\t\"./updateRetryTips.js\": \"./src/functions/updateRetryTips.js\",\n\t\"./updateRolePermissions.js\": \"./src/functions/updateRolePermissions.js\",\n\t\"./updateSuccessRedirectTips.js\": \"./src/functions/updateSuccessRedirectTips.js\",\n\t\"./updateSuccessTips.js\": \"./src/functions/updateSuccessTips.js\",\n\t\"./user.js\": \"./src/functions/user.js\",\n\t\"./userPatch.js\": \"./src/functions/userPatch.js\",\n\t\"./verifyResetPasswordVerifyCode.js\": \"./src/functions/verifyResetPasswordVerifyCode.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/functions sync \\\\.js$\";\n\n//# sourceURL=webpack://Authing/./src/functions_sync_nonrecursive_\\.js$?");

/***/ }),

/***/ "./src/functions/_uploadAvatar.js":
/*!****************************************!*\
  !*** ./src/functions/_uploadAvatar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports._uploadAvatar = _uploadAvatar;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _uploadAvatar(options) {\n  return this.UserServiceGql.request({\n    operationName: 'qiNiuUploadToken',\n    query: \"query qiNiuUploadToken {\\n      qiNiuUploadToken\\n    }\"\n  }).then(function (token) {\n    if (!token) {\n      throw {\n        graphQLErrors: [{\n          message: {\n            message: '获取文件上传token失败'\n          }\n        }]\n      };\n    }\n\n    var formData = new FormData();\n    formData.append('file', options.photo);\n    formData.append('token', token);\n    return _axios[\"default\"].post('https://upload.qiniup.com/', formData, {\n      method: 'post',\n      headers: {\n        'Content-Type': 'multipart/form-data'\n      }\n    });\n  }).then(function (data) {\n    return data.data;\n  }).then(function (data) {\n    if (data.key) {\n      options.photo = \"https://usercontents.authing.cn/\".concat(data.key);\n    }\n\n    return options;\n  })[\"catch\"](function (e) {\n    if (e.graphQLErrors) {\n      throw e.graphQLErrors[0];\n    }\n\n    throw {\n      message: {\n        message: e\n      }\n    };\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/_uploadAvatar.js?");

/***/ }),

/***/ "./src/functions/assignUserToRole.js":
/*!*******************************************!*\
  !*** ./src/functions/assignUserToRole.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.assignUserToRole = assignUserToRole;\n\nfunction assignUserToRole(options) {\n  var _this = this;\n\n  if (!options) {\n    throw Error('options is not provided.');\n  }\n\n  var variables = {\n    client: this.userPoolId,\n    group: options.roleId,\n    user: options.user\n  };\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'AssignUserToRole',\n      query: \"\\n      mutation AssignUserToRole(\\n        $group: String!\\n        $client: String!\\n        $user: String!\\n      ) {\\n        assignUserToRole(\\n          group: $group\\n          client: $client\\n          user: $user\\n        ) {\\n          totalCount,\\n          list {\\n            _id,\\n            client {\\n              _id\\n            },\\n            user {\\n              _id\\n            },\\n            createdAt\\n          }\\n        }\\n      }\\n    \",\n      variables: variables\n    }, 'ownerToken');\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/assignUserToRole.js?");

/***/ }),

/***/ "./src/functions/bindOAuth.js":
/*!************************************!*\
  !*** ./src/functions/bindOAuth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.bindOAuth = bindOAuth;\n\nfunction bindOAuth(variables) {\n  if (!variables) {\n    throw Error('options is not provided');\n  }\n\n  if (!variables.type) {\n    throw Error('type in options is not provided');\n  }\n\n  if (!variables.unionid) {\n    throw Error('unionid in options is not provided');\n  }\n\n  if (!variables.userInfo) {\n    throw Error('userInfo in options is not provided');\n  }\n\n  return this.UserServiceGql.request({\n    operationName: 'bindOtherOAuth',\n    query: \"mutation bindOtherOAuth(\\n      $user: String,\\n      $client: String,\\n      $type: String!,\\n      $unionid: String!,\\n      $userInfo: String!\\n    ) {\\n      bindOtherOAuth (\\n        user: $user,\\n        client: $client,\\n        type: $type,\\n        unionid: $unionid,\\n        userInfo: $userInfo\\n      ) {\\n        _id\\n        user\\n        client\\n        type\\n        userInfo\\n        unionid\\n        createdAt\\n      }\\n    }\",\n    variables: variables\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/bindOAuth.js?");

/***/ }),

/***/ "./src/functions/cdnPreflightFun.js":
/*!******************************************!*\
  !*** ./src/functions/cdnPreflightFun.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.cdnPreflightFun = cdnPreflightFun;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction cdnPreflightFun() {\n  return _axios[\"default\"].get(this.opts.cdnPreflightUrl)[\"catch\"](function (error) {\n    throw Error(\"CDN \\u670D\\u52A1\\u9884\\u68C0\\u5931\\u8D25\");\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/cdnPreflightFun.js?");

/***/ }),

/***/ "./src/functions/changeMFA.js":
/*!************************************!*\
  !*** ./src/functions/changeMFA.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.changeMFA = changeMFA;\n\nfunction changeMFA(options) {\n  // 用于修改某一用户池（应用）的 MFA 状态\n  if (!options) {\n    throw Error(\"options is not provided.\");\n  }\n\n  var variables = {\n    userPoolId: this.opts.userPoolId,\n    userId: options.userId,\n    enable: options.enable\n  };\n  return this.UserServiceGql.request({\n    operationName: \"changeMFA\",\n    query: \"\\n      mutation changeMFA($_id: String,$userId: String,$userPoolId: String,$enable: Boolean!, $refreshKey: Boolean) {\\n        changeMFA(_id: $_id, userId: $userId, userPoolId: $userPoolId, enable: $enable, refreshKey: $refreshKey) {\\n            _id\\n            userId\\n            userPoolId\\n            shareKey\\n            enable\\n        }\\n    }\",\n    variables: variables\n  }, 'userToken');\n}\n\n//# sourceURL=webpack://Authing/./src/functions/changeMFA.js?");

/***/ }),

/***/ "./src/functions/changePassword.js":
/*!*****************************************!*\
  !*** ./src/functions/changePassword.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.changePassword = changePassword;\n\nvar _encryption = _interopRequireDefault(__webpack_require__(/*! ../utils/_encryption */ \"./src/utils/_encryption.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction changePassword(options) {\n  if (!options) {\n    throw Error(\"options is not provided\");\n  }\n\n  if (!options.email) {\n    throw Error(\"email in options is not provided\");\n  }\n\n  if (!options.password) {\n    throw Error(\"password in options is not provided\");\n  }\n\n  if (!options.verifyCode) {\n    throw Error(\"verifyCode in options is not provided\");\n  }\n\n  options.client = this.userPoolId;\n  options.password = (0, _encryption[\"default\"])(options.password);\n  return this.UserServiceGql.request({\n    operationName: \"changePassword\",\n    query: \"\\n      mutation changePassword(\\n        $email: String!,\\n        $client: String!,\\n        $password: String!,\\n        $verifyCode: String!\\n      ){\\n        changePassword(\\n          email: $email,\\n          client: $client,\\n          password: $password,\\n          verifyCode: $verifyCode\\n        ) {\\n          _id\\n          email\\n          emailVerified\\n          username\\n          nickname\\n          company\\n          photo\\n          browser\\n          registerInClient\\n          registerMethod\\n          oauth\\n          token\\n          tokenExpiredAt\\n          loginsCount\\n          lastLogin\\n          lastIP\\n          signedUp\\n          blocked\\n          isDeleted\\n        }\\n      }\\n    \",\n    variables: options\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/changePassword.js?");

/***/ }),

/***/ "./src/functions/checkLoginStatus.js":
/*!*******************************************!*\
  !*** ./src/functions/checkLoginStatus.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.checkLoginStatus = checkLoginStatus;\n\nfunction checkLoginStatus(token) {\n  return this.UserServiceGql.request({\n    operationName: \"checkLoginStatus\",\n    query: \"query checkLoginStatus($token: String) {\\n      checkLoginStatus(token: $token) {\\n        status\\n        code\\n        message\\n        token {\\n          data {\\n            email\\n            id\\n            clientId\\n            unionid\\n          }\\n          iat\\n          exp\\n        }\\n      }\\n    }\",\n    variables: {\n      token: token\n    }\n  }, 'userToken');\n}\n\n//# sourceURL=webpack://Authing/./src/functions/checkLoginStatus.js?");

/***/ }),

/***/ "./src/functions/checkPreflight.js":
/*!*****************************************!*\
  !*** ./src/functions/checkPreflight.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.checkPreflight = checkPreflight;\n\nfunction checkPreflight() {\n  var service = Promise.resolve('ok');\n  var cdn = Promise.resolve('ok');\n\n  if (this.opts.preflight) {\n    service = this.preflightFun()[\"catch\"](this.opts.onInitError);\n  }\n\n  if (this.opts.cdnPreflight) {\n    cdn = this.cdnPreflightFun()[\"catch\"](this.opts.onInitError);\n  }\n\n  return [service, cdn];\n}\n\n//# sourceURL=webpack://Authing/./src/functions/checkPreflight.js?");

/***/ }),

/***/ "./src/functions/checkQR.js":
/*!**********************************!*\
  !*** ./src/functions/checkQR.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.checkQR = checkQR;\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ../configs */ \"./src/configs.js\"));\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n// 检验微信二维码扫描状态\nfunction checkQR(QRCodeId) {\n  var random;\n\n  if (typeof QRCodeId === 'undefined') {\n    if (typeof sessionStorage !== 'undefined') {\n      random = sessionStorage.randomWord || '';\n    } else {\n      random = '';\n    }\n  } else {\n    random = QRCodeId;\n  }\n\n  var url = _configs[\"default\"].services.oauth.host;\n  url = url.replace('/graphql', '');\n  return _axios[\"default\"].post(\"\".concat(url, \"/oauth/wxapp/confirm/qr?random=\").concat(random, \"&useSelfWxapp=\").concat(this.opts.useSelfWxapp));\n}\n\n//# sourceURL=webpack://Authing/./src/functions/checkQR.js?");

/***/ }),

/***/ "./src/functions/configs.js":
/*!**********************************!*\
  !*** ./src/functions/configs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n// 条目为文件名\nvar _default = {\n  node: ['assignUserToRole', 'bindOAuth', 'cdnPreflightFun', 'changeMFA', 'changePassword', 'checkLoginStatus', 'checkPreflight', 'checkQR', 'createRole', 'decodeToken', 'getAuthedAppList', 'getVerificationCode', 'genQRCode', 'list', 'login', 'loginByLDAP', 'loginByPhoneCode', 'logout', 'preflightFun', 'queryMFA', 'queryPermissions', 'queryRoles', 'readOAuthList', 'readUserOAuthList', 'refreshToken', 'register', 'remove', 'removeUserFromRole', 'revokeAuthedApp', 'sendResetPasswordEmail', 'sendVerifyEmail', 'unbindEmail', 'unbindOAuth', 'update', 'user', 'userPatch', 'verifyResetPasswordVerifyCode', 'updateRolePermissions', 'getUserPoolSettings'],\n  web: ['_uploadAvatar', 'bindOAuth', 'cdnPreflightFun', 'changeMFA', 'changePassword', 'checkLoginStatus', 'checkPreflight', 'checkQR', 'decodeToken', 'genQRCode', 'getAuthedAppList', 'getVerificationCode', 'login', 'loginByLDAP', 'loginByPhoneCode', 'loginFromLocalStorage', 'logout', 'preflightFun', 'queryMFA', 'readOAuthList', 'readUserOAuthList', 'register', 'revokeAuthedApp', 'selectAvatarFile', 'sendResetPasswordEmail', 'sendVerifyEmail', 'startWXAppScaning', 'unbindEmail', 'unbindOAuth', 'update', 'updateFailedTips', 'updateRetryTips', 'updateSuccessTips', 'updateSuccessRedirectTips', 'user', 'verifyResetPasswordVerifyCode', 'getUserPoolSettings']\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://Authing/./src/functions/configs.js?");

/***/ }),

/***/ "./src/functions/createRole.js":
/*!*************************************!*\
  !*** ./src/functions/createRole.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createRole = createRole;\n\nfunction createRole(options) {\n  var _this = this;\n\n  if (!options) {\n    throw Error('options is not provided.');\n  }\n\n  var variables = {\n    client: this.opts.userPoolId,\n    name: options.name,\n    descriptions: options.descriptions\n  };\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'CreateRole',\n      query: \"\\n        mutation CreateRole(\\n          $name: String!\\n          $client: String!\\n          $descriptions: String\\n        ) {\\n          createRole(\\n            name: $name\\n            client: $client\\n            descriptions: $descriptions\\n          ) {\\n            _id,\\n            name,\\n            client,\\n            descriptions\\n          }\\n        }\\n      \",\n      variables: variables\n    }, 'ownerToken');\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/createRole.js?");

/***/ }),

/***/ "./src/functions/decodeToken.js":
/*!**************************************!*\
  !*** ./src/functions/decodeToken.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.decodeToken = decodeToken;\n\nfunction decodeToken(token) {\n  return this.UserServiceGql.request({\n    operationName: \"decodeJwtToken\",\n    query: \"query decodeJwtToken($token: String) {\\n      decodeJwtToken(token: $token) {\\n          data {\\n            email\\n            id\\n            clientId\\n          }\\n          status {\\n            code\\n            message\\n          }\\n          iat\\n          exp\\n        }\\n      }\",\n    variables: {\n      token: token\n    }\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/decodeToken.js?");

/***/ }),

/***/ "./src/functions/genQRCode.js":
/*!************************************!*\
  !*** ./src/functions/genQRCode.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.genQRCode = genQRCode;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ../configs */ \"./src/configs.js\"));\n\nvar _randomWord = __webpack_require__(/*! ../utils/randomWord */ \"./src/utils/randomWord.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction genQRCode(clientId) {\n  var random = (0, _randomWord.randomWord)(true, 12, 24);\n\n  if (typeof sessionStorage !== 'undefined') {\n    sessionStorage.randomWord = random;\n  }\n\n  var url = _configs[\"default\"].services.oauth.host;\n  url = url.replace('/graphql', '');\n  return _axios[\"default\"].get(\"\".concat(url, \"/oauth/wxapp/qrcode/\").concat(clientId, \"?random=\").concat(random, \"&useSelfWxapp=\").concat(this.opts.useSelfWxapp, \"&enableFetchPhone=\").concat(this.opts.enableFetchPhone));\n}\n\n//# sourceURL=webpack://Authing/./src/functions/genQRCode.js?");

/***/ }),

/***/ "./src/functions/getAuthedAppList.js":
/*!*******************************************!*\
  !*** ./src/functions/getAuthedAppList.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getAuthedAppList = getAuthedAppList;\n\nfunction getAuthedAppList(options) {\n  if (!options) {\n    throw Error(\"options is not provided.\");\n  }\n\n  var variables = {\n    clientId: this.userPoolId,\n    userId: options.userId,\n    page: options.page,\n    count: options.count\n  };\n  return this.OAuthServiceGql.request({\n    operationName: \"GetUserAuthorizedApps\",\n    query: \"\\n    query GetUserAuthorizedApps($clientId: String, $userId: String, $page: Int, $count: Int) {\\n      GetUserAuthorizedApps(clientId: $clientId, userId: $userId, page: $page, count: $count) {\\n          OAuthApps {\\n              _id\\n              name\\n              domain\\n              clientId\\n              description\\n              isDeleted\\n              grants\\n              redirectUris\\n              when\\n          }\\n          OIDCApps {\\n              _id\\n              name\\n              client_id\\n              domain\\n              description\\n              authorization_code_expire\\n              when\\n              isDeleted\\n              id_token_signed_response_alg\\n              response_types\\n              grant_types\\n              token_endpoint_auth_method\\n              redirect_uris\\n              image\\n              access_token_expire\\n              id_token_expire\\n              cas_expire\\n  \\n          }\\n          totalCount\\n      }\\n  }\",\n    variables: variables\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/getAuthedAppList.js?");

/***/ }),

/***/ "./src/functions/getUserPoolSettings.js":
/*!**********************************************!*\
  !*** ./src/functions/getUserPoolSettings.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getUserPoolSettings = getUserPoolSettings;\n\nfunction getUserPoolSettings() {\n  return this.UserServiceGql.request({\n    operationName: \"getUserPoolSettings\",\n    query: \"query getUserPoolSettings($userPoolId: String!) {\\n      getUserPoolSettings(userPoolId: $userPoolId) {\\n          name\\n          logo\\n          descriptions\\n          allowedOrigins\\n          emailVerifiedDefault\\n          useMiniLogin\\n          registerDisabled\\n          showWXMPQRCode\\n          enableEmail\\n          jwtExpired\\n        }\\n      }\",\n    variables: {\n      userPoolId: this.userPoolId\n    }\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/getUserPoolSettings.js?");

/***/ }),

/***/ "./src/functions/getVerificationCode.js":
/*!**********************************************!*\
  !*** ./src/functions/getVerificationCode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getVerificationCode = getVerificationCode;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ../configs */ \"./src/configs.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction getVerificationCode(phone) {\n  if (!phone) {\n    throw \"phone is not provided\";\n  }\n\n  var url = \"\".concat(_configs[\"default\"].services.user.host.replace(\"/graphql\", \"\"), \"/send_smscode/\").concat(phone, \"/\").concat(this.userPoolId);\n  return _axios[\"default\"].get(url).then(function (result) {\n    if (result.data.code !== 200) {\n      throw Error(JSON.stringify(result.data));\n    } else {\n      return result.data;\n    }\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/getVerificationCode.js?");

/***/ }),

/***/ "./src/functions/index.js":
/*!********************************!*\
  !*** ./src/functions/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ./configs */ \"./src/functions/configs.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar exp = [];\n\nif (true) {\n  exp = _configs[\"default\"].node;\n} else {}\n\nvar files = __webpack_require__(\"./src/functions sync \\\\.js$\");\n\nvar mod = {}; // 不导出哪些文件\n\nvar exclude = ['./index.js', './configs.js'];\nfiles.keys().forEach(function (item) {\n  if (exclude.indexOf(item) !== -1) return;\n  var key = /\\.\\/(.*)\\.js/.exec(item)[1];\n  if (exp.indexOf(key) !== -1) mod[key] = files(item)[key];\n});\nvar _default = mod;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://Authing/./src/functions/index.js?");

/***/ }),

/***/ "./src/functions/list.js":
/*!*******************************!*\
  !*** ./src/functions/list.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.list = list;\n\nfunction list(page, count, queryOptions) {\n  var _this = this;\n\n  page = page || 1;\n  count = count || 10;\n  queryOptions = queryOptions || {\n    populate: false\n  };\n  var options = {\n    registerInClient: this.userPoolId,\n    page: page,\n    count: count,\n    populate: queryOptions.populate\n  };\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'users',\n      query: \"query users($registerInClient: String, $page: Int, $count: Int, $populate: Boolean){\\n      users(registerInClient: $registerInClient, page: $page, count: $count, populate: $populate) {\\n          totalCount\\n          list {\\n          _id\\n          email\\n          emailVerified\\n          username\\n          nickname\\n          phone\\n          unionid\\n          oauth\\n          company\\n          photo\\n          browser\\n          password\\n          registerInClient\\n          registerMethod\\n          token\\n          tokenExpiredAt\\n          loginsCount\\n          lastLogin\\n          lastIP\\n          signedUp\\n          blocked\\n          isDeleted\\n          userLocation {\\n            _id\\n            when\\n            where\\n          }\\n          userLoginHistory {\\n            totalCount\\n            list{\\n              _id\\n              when\\n              success\\n              ip\\n              result\\n            }\\n          }\\n        }\\n      }\\n    }\",\n      variables: options\n    }, 'ownerToken');\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/list.js?");

/***/ }),

/***/ "./src/functions/login.js":
/*!********************************!*\
  !*** ./src/functions/login.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.login = login;\n\nvar _encryption = _interopRequireDefault(__webpack_require__(/*! ../utils/_encryption */ \"./src/utils/_encryption.js\"));\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ../configs */ \"./src/configs.js\"));\n\nvar _TokenManager = _interopRequireDefault(__webpack_require__(/*! ../TokenManager */ \"./src/TokenManager.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction login(options) {\n  if (!options) {\n    throw Error(\"options is not provided.\");\n  }\n  /* eslint-disable no-param-reassign */\n\n\n  options.registerInClient = this.opts.userPoolId;\n\n  if (options.password) {\n    options.password = (0, _encryption[\"default\"])(options.password);\n  }\n\n  if (_configs[\"default\"].inBrowser) {\n    options.browser = window.navigator.userAgent;\n  }\n\n  return this.UserServiceGql.request({\n    operationName: \"login\",\n    query: \"mutation login($unionid: String, $email: String, $username: String, $password: String, $lastIP: String, $registerInClient: String!, $verifyCode: String, $browser: String, $openid: String, $MFACode: String) {\\n        login(unionid: $unionid, email: $email, username: $username, password: $password, lastIP: $lastIP, registerInClient: $registerInClient, verifyCode: $verifyCode, browser: $browser, openid: $openid, MFACode: $MFACode) {\\n          _id\\n          email\\n          emailVerified\\n          unionid\\n          openid\\n          oauth\\n          registerMethod\\n          username\\n          nickname\\n          company\\n          photo\\n          token\\n          tokenExpiredAt\\n          loginsCount\\n          lastLogin\\n          lastIP\\n          signedUp\\n          blocked\\n          isDeleted\\n        }\\n    }\",\n    variables: options\n  }).then(function (res) {\n    // 登录成功记录 token\n    if (res && res.token) {\n      _TokenManager[\"default\"].getInstance().setUserToken(res.token);\n\n      if (_configs[\"default\"].inBrowser) localStorage.setItem('_authing_token', res.token);\n    }\n\n    return res;\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/login.js?");

/***/ }),

/***/ "./src/functions/loginByLDAP.js":
/*!**************************************!*\
  !*** ./src/functions/loginByLDAP.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loginByLDAP = loginByLDAP;\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ../configs */ \"./src/configs.js\"));\n\nvar _TokenManager = _interopRequireDefault(__webpack_require__(/*! ../TokenManager */ \"./src/TokenManager.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction loginByLDAP(options) {\n  if (!options) {\n    throw Error(\"options is not provided.\");\n  }\n\n  options.clientId = this.userPoolId;\n\n  if (!options.password) {\n    throw Error(\"password is not provided.\");\n  }\n\n  if (!options.username) {\n    throw Error(\"username is not provided.\");\n  }\n\n  if (_configs[\"default\"].inBrowser) {\n    options.browser = window.navigator.userAgent;\n  }\n\n  return this.OAuthServiceGql.request({\n    operationName: \"LoginByLDAP\",\n    query: \"mutation LoginByLDAP($username: String!, $password: String!, $clientId: String!, $browser: String) {\\n    LoginByLDAP(username: $username, clientId: $clientId, password: $password, browser: $browser) {\\n        _id\\n        email\\n        emailVerified\\n        unionid\\n        openid\\n        oauth\\n        registerMethod\\n        username\\n        nickname\\n        company\\n        photo\\n        browser\\n        token\\n        tokenExpiredAt\\n        loginsCount\\n        lastLogin\\n        lastIP\\n        signedUp\\n        blocked\\n      }\\n    }\",\n    variables: options\n  }).then(function (res) {\n    // 登录成功记录 token\n    if (res && res.token) {\n      _TokenManager[\"default\"].getInstance().setUserToken(res.token);\n    }\n\n    return res;\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/loginByLDAP.js?");

/***/ }),

/***/ "./src/functions/loginByPhoneCode.js":
/*!*******************************************!*\
  !*** ./src/functions/loginByPhoneCode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loginByPhoneCode = loginByPhoneCode;\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ../configs */ \"./src/configs.js\"));\n\nvar _TokenManager = _interopRequireDefault(__webpack_require__(/*! ../TokenManager */ \"./src/TokenManager.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction loginByPhoneCode(options) {\n  if (!options) {\n    throw Error(\"options is not provided.\");\n  }\n\n  var variables = {\n    registerInClient: this.userPoolId,\n    phone: options.phone,\n    phoneCode: parseInt(options.phoneCode, 10)\n  };\n\n  if (_configs[\"default\"].inBrowser) {\n    variables.browser = window.navigator.userAgent;\n  }\n\n  return this.UserServiceGql.request({\n    operationName: \"login\",\n    query: \"mutation login($phone: String, $phoneCode: Int, $registerInClient: String!, $browser: String) {\\n        login(phone: $phone, phoneCode: $phoneCode, registerInClient: $registerInClient, browser: $browser) {\\n          _id\\n          email\\n          unionid\\n          openid\\n          emailVerified\\n          username\\n          nickname\\n          phone\\n          company\\n          photo\\n          browser\\n          token\\n          tokenExpiredAt\\n          loginsCount\\n          lastLogin\\n          lastIP\\n          signedUp\\n          blocked\\n          isDeleted\\n        }\\n    }\",\n    variables: variables\n  }).then(function (res) {\n    // 登录成功记录 token\n    if (res && res.token) {\n      _TokenManager[\"default\"].getInstance().setUserToken(res.token);\n    }\n\n    return res;\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/loginByPhoneCode.js?");

/***/ }),

/***/ "./src/functions/loginFromLocalStorage.js":
/*!************************************************!*\
  !*** ./src/functions/loginFromLocalStorage.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loginFromLocalStorage = loginFromLocalStorage;\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ../configs */ \"./src/configs.js\"));\n\nvar _TokenManager = _interopRequireDefault(__webpack_require__(/*! ../TokenManager */ \"./src/TokenManager.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n// 把 TokenManager 中的 userToken 设置为 localStorage 里面的 _authing_token\nfunction loginFromLocalStorage() {\n  if (_configs[\"default\"].inBrowser) {\n    var authingToken = localStorage.getItem(\"_authing_token\");\n\n    if (authingToken) {\n      _TokenManager[\"default\"].getInstance().setToken(authingToken);\n    }\n  }\n}\n\n//# sourceURL=webpack://Authing/./src/functions/loginFromLocalStorage.js?");

/***/ }),

/***/ "./src/functions/logout.js":
/*!*********************************!*\
  !*** ./src/functions/logout.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.logout = logout;\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ../configs */ \"./src/configs.js\"));\n\nvar _TokenManager = _interopRequireDefault(__webpack_require__(/*! ../TokenManager */ \"./src/TokenManager.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction logout(_id) {\n  if (!_id) {\n    throw Error('_id is not provided');\n  }\n\n  if (_configs[\"default\"].inBrowser) {\n    localStorage.removeItem('_authing_token');\n  }\n\n  return this.update({\n    _id: _id,\n    tokenExpiredAt: '0'\n  }).then(function (res) {\n    _TokenManager[\"default\"].getInstance().setUserToken(null);\n\n    return res;\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/logout.js?");

/***/ }),

/***/ "./src/functions/preflightFun.js":
/*!***************************************!*\
  !*** ./src/functions/preflightFun.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.preflightFun = preflightFun;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction preflightFun() {\n  var _this = this;\n\n  return Promise.all([_axios[\"default\"].get(this.opts.preflightUrl.users), _axios[\"default\"].get(this.opts.preflightUrl.oauth)])[\"catch\"](function (err) {\n    if (err.config.url === _this.opts.preflightUrl.users) {\n      throw Error('用户服务网络预检失败');\n    } else if (err.config.url === _this.opts.preflightUrl.oauth) {\n      throw Error('认证服务网络预检失败');\n    } else {\n      throw err;\n    }\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/preflightFun.js?");

/***/ }),

/***/ "./src/functions/queryMFA.js":
/*!***********************************!*\
  !*** ./src/functions/queryMFA.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.queryMFA = queryMFA;\n\nfunction queryMFA(options) {\n  if (!options) {\n    throw Error(\"options is not provided.\");\n  }\n\n  var variables = {\n    userPoolId: this.opts.userPoolId,\n    userId: options.userId\n  };\n  return this.UserServiceGql.request({\n    operationName: \"queryMFA\",\n    query: \"\\n      query queryMFA($_id: String,$userId: String,$userPoolId: String) {\\n        queryMFA(_id: $_id, userId: $userId, userPoolId: $userPoolId) {\\n          _id\\n          userId\\n          userPoolId\\n          enable\\n          shareKey\\n        }\\n      }\",\n    variables: variables\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/queryMFA.js?");

/***/ }),

/***/ "./src/functions/queryPermissions.js":
/*!*******************************************!*\
  !*** ./src/functions/queryPermissions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.queryPermissions = queryPermissions;\n\nfunction queryPermissions(userId) {\n  var _this = this;\n\n  if (!userId) {\n    throw Error('userId is not provided.');\n  }\n\n  var variables = {\n    client: this.userPoolId,\n    user: userId\n  };\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'QueryRoleByUserId',\n      query: \"query QueryRoleByUserId($user: String!, $client: String!){\\n      queryRoleByUserId(user: $user, client: $client) {\\n        totalCount\\n        list {\\n          group {\\n            name\\n            permissions\\n          }\\n        }\\n      }\\n    }\",\n      variables: variables\n    }, 'ownerToken');\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/queryPermissions.js?");

/***/ }),

/***/ "./src/functions/queryRoles.js":
/*!*************************************!*\
  !*** ./src/functions/queryRoles.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.queryRoles = queryRoles;\n\nfunction queryRoles(options) {\n  var _this = this;\n\n  if (!options) {\n    throw Error('options is not provided.');\n  }\n\n  var variables = {\n    clientId: this.userPoolId,\n    page: options.page,\n    count: options.count\n  };\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'ClientRoles',\n      query: \"\\n      query ClientRoles(\\n        $clientId: String!\\n        $page: Int\\n        $count: Int\\n      ) {\\n        clientRoles(\\n          client: $clientId\\n          page: $page\\n          count: $count\\n        ) {\\n          totalCount\\n          list {\\n            _id\\n            name\\n            descriptions\\n            client\\n            createdAt\\n            permissions\\n          }\\n        }\\n      }\\n    \",\n      variables: variables\n    }, 'ownerToken');\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/queryRoles.js?");

/***/ }),

/***/ "./src/functions/readOAuthList.js":
/*!****************************************!*\
  !*** ./src/functions/readOAuthList.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.readOAuthList = readOAuthList;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction readOAuthList(params) {\n  var variables = {};\n\n  if (params) {\n    variables = params;\n  }\n\n  return this.OAuthServiceGql.request({\n    operationName: 'ReadOauthList',\n    query: \"query ReadOauthList($clientId: String!, $useGuard: Boolean) {\\n      ReadOauthList(clientId: $clientId, useGuard: $useGuard) {\\n          _id\\n          name\\n          image\\n          description\\n          enabled\\n          client\\n          user\\n          url\\n          alias\\n      }\\n    }\",\n    variables: _objectSpread({\n      clientId: this.userPoolId\n    }, variables)\n  }).then(function (list) {\n    return list.filter(function (v) {\n      return v.enabled;\n    });\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/readOAuthList.js?");

/***/ }),

/***/ "./src/functions/readUserOAuthList.js":
/*!********************************************!*\
  !*** ./src/functions/readUserOAuthList.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.readUserOAuthList = readUserOAuthList;\n\nfunction readUserOAuthList(variables) {\n  return this.OAuthServiceGql.request({\n    operationName: 'notBindOAuthList',\n    query: \"query notBindOAuthList($user: String, $client: String) {\\n      notBindOAuthList(user: $user, client: $client) {\\n        type\\n        oAuthUrl\\n        image\\n        name\\n        binded\\n      }\\n    }\",\n    variables: variables\n  }, 'userToken');\n}\n\n//# sourceURL=webpack://Authing/./src/functions/readUserOAuthList.js?");

/***/ }),

/***/ "./src/functions/refreshToken.js":
/*!***************************************!*\
  !*** ./src/functions/refreshToken.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.refreshToken = refreshToken;\n\nfunction refreshToken(options) {\n  if (!options) {\n    throw Error(\"options is not provided.\");\n  }\n\n  var variables = {\n    client: this.userPoolId,\n    user: options.user\n  };\n  return this.UserServiceGql.request({\n    operationName: \"RefreshToken\",\n    query: \"\\n      mutation RefreshToken(\\n        $client: String!\\n        $user: String!\\n      ) {\\n        refreshToken(\\n          client: $client\\n          user: $user\\n        ) {\\n          token\\n          iat\\n          exp\\n        }\\n      }\\n    \",\n    variables: variables\n  }, 'ownerToken');\n}\n\n//# sourceURL=webpack://Authing/./src/functions/refreshToken.js?");

/***/ }),

/***/ "./src/functions/register.js":
/*!***********************************!*\
  !*** ./src/functions/register.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.register = register;\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ../configs */ \"./src/configs.js\"));\n\nvar _encryption = _interopRequireDefault(__webpack_require__(/*! ../utils/_encryption */ \"./src/utils/_encryption.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction register(options) {\n  if (!options) {\n    throw Error(\"options is not provided\");\n  }\n\n  options.registerInClient = this.userPoolId;\n\n  if (options.password) {\n    options.password = (0, _encryption[\"default\"])(options.password);\n  }\n\n  if (_configs[\"default\"].inBrowser) {\n    options.browser = window.navigator.userAgent;\n  }\n\n  return this.UserServiceGql.request({\n    operationName: \"register\",\n    query: \"\\n    mutation register(\\n      $unionid: String,\\n      $openid: String,\\n      $email: String,\\n      $phone: String,\\n      $password: String,\\n      $lastIP: String,\\n      $gender: String,\\n      $birthdate: String,\\n      $region: String,\\n      $locality: String,\\n      $name: String,\\n      $givenName: String,\\n      $familyName: String,\\n      $middleName: String,\\n      $profile: String,\\n      $preferredUsername: String,\\n      $website: String,\\n      $zoneinfo: String,\\n      $locale: String,\\n      $address: String,\\n      $formatted: String,\\n      $streetAddress: String,\\n      $postalCode: String,\\n      $country: String,\\n      $updatedAt: String,\\n      $forceLogin: Boolean,\\n      $registerInClient: String!,\\n      $oauth: String,\\n      $username: String,\\n      $nickname: String,\\n      $registerMethod: String,\\n      $photo: String,\\n      $company: String,\\n      $browser: String,\\n      $invitationCode: String,\\n      $keepPassword: Boolean\\n    ) {\\n        register(keepPassword: $keepPassword, invitationCode: $invitationCode, userInfo: {\\n          unionid: $unionid,\\n          openid: $openid,\\n          email: $email,\\n          phone: $phone,\\n          password: $password,\\n          lastIP: $lastIP,\\n          forceLogin: $forceLogin,\\n          registerInClient: $registerInClient,\\n          oauth: $oauth,\\n          registerMethod: $registerMethod,\\n          name: $name,\\n          givenName: $givenName,\\n          familyName: $familyName,\\n          middleName: $middleName,\\n          profile: $profile,\\n          preferredUsername: $preferredUsername,\\n          website: $website,\\n          zoneinfo: $zoneinfo,\\n          locale: $locale,\\n          address: $address,\\n          formatted: $formatted,\\n          streetAddress: $streetAddress,\\n          postalCode: $postalCode,\\n          country: $country,\\n          updatedAt: $updatedAt,\\n          gender: $gender,\\n          birthdate: $birthdate,\\n          region: $region,\\n          locality: $locality,\\n          photo: $photo,\\n          username: $username,\\n          nickname: $nickname,\\n          company: $company,\\n          browser: $browser,\\n        }) {\\n            _id,\\n            email,\\n            phone,\\n            emailVerified,\\n            unionid,\\n            openid,\\n            oauth,\\n            registerMethod,\\n            username,\\n            nickname,\\n            company,\\n            photo,\\n            browser,\\n            password,\\n            token,\\n            group {\\n              name\\n            },\\n            blocked,\\n            device\\n        }\\n    }\",\n    variables: options\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/register.js?");

/***/ }),

/***/ "./src/functions/remove.js":
/*!*********************************!*\
  !*** ./src/functions/remove.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.remove = remove;\n\nfunction remove(_id, operator) {\n  var _this = this;\n\n  if (!_id) {\n    throw Error('_id is not provided');\n  }\n\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'removeUsers',\n      query: \"mutation removeUsers($ids: [String], $registerInClient: String, $operator: String) {\\n      removeUsers(ids: $ids, registerInClient: $registerInClient, operator: $operator) {\\n        _id\\n      }\\n    }\",\n      variables: {\n        ids: [_id],\n        registerInClient: _this.userPoolId,\n        operator: operator\n      }\n    }, 'ownerToken');\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/remove.js?");

/***/ }),

/***/ "./src/functions/removeUserFromRole.js":
/*!*********************************************!*\
  !*** ./src/functions/removeUserFromRole.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.removeUserFromRole = removeUserFromRole;\n\nfunction removeUserFromRole(options) {\n  var _this = this;\n\n  if (!options) {\n    throw Error('options is not provided.');\n  }\n\n  var variables = {\n    client: this.userPoolId,\n    user: options.user,\n    group: options.roleId\n  };\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'RemoveUserFromGroup',\n      query: \"\\n      mutation RemoveUserFromGroup(\\n        $group: String!\\n        $client: String!\\n        $user: String!\\n      ) {\\n        removeUserFromGroup(\\n          group: $group\\n          client: $client\\n          user: $user\\n        ) {\\n          _id,\\n          group {\\n            _id\\n          },\\n          client {\\n            _id\\n          },\\n          user {\\n            _id\\n          }\\n        }\\n      }\\n    \",\n      variables: variables\n    }, 'ownerToken');\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/removeUserFromRole.js?");

/***/ }),

/***/ "./src/functions/revokeAuthedApp.js":
/*!******************************************!*\
  !*** ./src/functions/revokeAuthedApp.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.revokeAuthedApp = revokeAuthedApp;\n\nfunction revokeAuthedApp(options) {\n  if (!options) {\n    throw Error(\"options is not provided.\");\n  }\n\n  var variables = {\n    userPoolId: this.userPoolId,\n    userId: options.userId,\n    appId: options.appId\n  };\n  return this.OAuthServiceGql.request({\n    operationName: \"RevokeUserAuthorizedApp\",\n    query: \"\\n    mutation RevokeUserAuthorizedApp($userPoolId: String, $userId: String, $appId: String) {\\n      RevokeUserAuthorizedApp(userPoolId: $userPoolId, userId: $userId, appId: $appId) {\\n          isRevoked\\n          _id\\n          scope\\n          appId\\n          userId\\n          type\\n          when\\n      }\\n    }\",\n    variables: variables\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/revokeAuthedApp.js?");

/***/ }),

/***/ "./src/functions/selectAvatarFile.js":
/*!*******************************************!*\
  !*** ./src/functions/selectAvatarFile.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.selectAvatarFile = selectAvatarFile;\n\nvar _configs = _interopRequireDefault(__webpack_require__(/*! ../configs */ \"./src/configs.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction selectAvatarFile(cb) {\n  if (!_configs[\"default\"].inBrowser) {\n    throw Error(\"当前不是浏览器环境，无法选取文件\");\n  }\n\n  var inputElem = document.createElement(\"input\");\n  inputElem.type = \"file\";\n  inputElem.accept = \"image/*\";\n\n  inputElem.onchange = function () {\n    cb(inputElem.files[0]);\n  };\n\n  inputElem.click();\n}\n\n//# sourceURL=webpack://Authing/./src/functions/selectAvatarFile.js?");

/***/ }),

/***/ "./src/functions/sendResetPasswordEmail.js":
/*!*************************************************!*\
  !*** ./src/functions/sendResetPasswordEmail.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.sendResetPasswordEmail = sendResetPasswordEmail;\n\nfunction sendResetPasswordEmail(options) {\n  if (!options) {\n    throw Error(\"options is not provided\");\n  }\n\n  if (!options.email) {\n    throw Error(\"email in options is not provided\");\n  }\n\n  options.client = this.userPoolId;\n  return this.UserServiceGql.request({\n    operationName: \"sendResetPasswordEmail\",\n    query: \"\\n      mutation sendResetPasswordEmail(\\n        $email: String!,\\n        $client: String!\\n      ){\\n        sendResetPasswordEmail(\\n          email: $email,\\n          client: $client\\n        ) {\\n            message\\n            code\\n        }\\n      }\\n    \",\n    variables: options\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/sendResetPasswordEmail.js?");

/***/ }),

/***/ "./src/functions/sendVerifyEmail.js":
/*!******************************************!*\
  !*** ./src/functions/sendVerifyEmail.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.sendVerifyEmail = sendVerifyEmail;\n\nfunction sendVerifyEmail(options) {\n  if (!options.email) {\n    throw Error(\"email in options is not provided\");\n  }\n\n  options.client = this.userPoolId;\n  return this.UserServiceGql.request({\n    operationName: \"sendVerifyEmail\",\n    query: \"\\n      mutation sendVerifyEmail(\\n        $email: String!,\\n        $client: String!\\n      ){\\n        sendVerifyEmail(\\n          email: $email,\\n          client: $client\\n        ) {\\n          message,\\n          code,\\n          status\\n        }\\n      }\\n    \",\n    variables: options\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/sendVerifyEmail.js?");

/***/ }),

/***/ "./src/functions/startWXAppScaning.js":
/*!********************************************!*\
  !*** ./src/functions/startWXAppScaning.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.startWXAppScaning = startWXAppScaning;\n\nfunction startWXAppScaning(opts) {\n  var self = this;\n\n  if (!opts) {\n    opts = {};\n  }\n\n  var mountNode = opts.mount || 'authing__qrcode-root-node';\n  var interval = opts.interval || 1500;\n  var _opts = opts,\n      tips = _opts.tips,\n      successTips = _opts.successTips,\n      successRedirectTips = _opts.successRedirectTips,\n      retryTips = _opts.retryTips,\n      failedTips = _opts.failedTips;\n  this.opts.enableFetchPhone = opts.enableFetchPhone || this.opts.enableFetchPhone;\n  this.opts.useSelfWxapp = opts.useSelfWxapp || this.opts.useSelfWxapp;\n  var redirect = true; // eslint-disable-next-line no-prototype-builtins\n\n  if (opts.hasOwnProperty('redirect')) {\n    if (!opts.redirect) {\n      redirect = false;\n    }\n  }\n\n  var _opts2 = opts,\n      onError = _opts2.onError,\n      onSuccess = _opts2.onSuccess,\n      onIntervalStarting = _opts2.onIntervalStarting,\n      onQRCodeShow = _opts2.onQRCodeShow,\n      onQRCodeLoad = _opts2.onQRCodeLoad;\n  var qrcodeNode = document.getElementById(mountNode);\n  var qrcodeWrapper;\n  var needGenerate = false;\n\n  var start = function start() {};\n\n  if (!qrcodeNode) {\n    qrcodeNode = document.createElement('div');\n    qrcodeNode.id = mountNode;\n    qrcodeNode.style = 'z-index: 65535;position: fixed;background: #fff;width: 300px;height: 300px;left: 50%;margin-left: -150px;display: flex;justify-content: center;align-items: center;top: 50%;margin-top: -150px;border: 1px solid #ccc;';\n    document.getElementsByTagName('body')[0].appendChild(qrcodeNode);\n    needGenerate = true;\n  } else {\n    qrcodeNode.style = 'position:relative';\n  }\n\n  var styleNode = document.createElement('style');\n  var style = '#authing__retry a:hover{outline:0px;text-decoration:none;}#authing__spinner{position:absolute;left:50%;margin-left:-6px;}.spinner{margin:100px auto;width:20px;height:20px;position:relative}.container1>div,.container2>div,.container3>div{width:6px;height:6px;background-color:#00a1ea;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.2s infinite ease-in-out;animation:bouncedelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .spinner-container{position:absolute;width:100%;height:100%}.container2{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.container3{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.container2 .circle1{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.container3 .circle1{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.container1 .circle2{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.container2 .circle2{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.container3 .circle2{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.container1 .circle3{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.container2 .circle3{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.container3 .circle3{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.container1 .circle4{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.container2 .circle4{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.container3 .circle4{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}';\n  styleNode.type = 'text/css';\n\n  if (styleNode.styleSheet) {\n    styleNode.styleSheet.cssText = style;\n  } else {\n    styleNode.innerHTML = style;\n  }\n\n  document.getElementsByTagName('head')[0].appendChild(styleNode);\n\n  var loading = function loading() {\n    qrcodeNode.innerHTML = '<div id=\"authing__spinner\" class=\"spinner\"><div class=\"spinner-container container1\"><div class=\"circle1\"></div><div class=\"circle2\"></div><div class=\"circle3\"></div><div class=\"circle4\"></div></div><div class=\"spinner-container container2\"><div class=\"circle1\"></div><div class=\"circle2\"></div><div class=\"circle3\"></div><div class=\"circle4\"></div></div><div class=\"spinner-container container3\"><div class=\"circle1\"></div><div class=\"circle2\"></div><div class=\"circle3\"></div><div class=\"circle4\"></div></div></div>';\n  };\n\n  var unloading = function unloading() {\n    var child = document.getElementById('authing__spinner');\n    qrcodeNode.removeChild(child);\n  };\n\n  var genTip = function genTip(text) {\n    var tip = document.createElement('span');\n    tip[\"class\"] = 'authing__heading-subtitle';\n\n    if (!needGenerate) {\n      tip.style = 'display: block;font-weight: 400;font-size: 15px;color: #888;ine-height: 48px;';\n    } else {\n      tip.style = 'display: block;font-weight: 400;font-size: 12px;color: #888;';\n    }\n\n    tip.innerHTML = text;\n    return tip;\n  };\n\n  var genImage = function genImage(src) {\n    var qrcodeImage = document.createElement('img');\n    qrcodeImage[\"class\"] = 'authing__qrcode';\n    qrcodeImage.src = src;\n    qrcodeImage.width = 240;\n    qrcodeImage.height = 240;\n    return qrcodeImage;\n  };\n\n  var genShadow = function genShadow(text, aOnClick, shadowAId) {\n    var shadow = document.createElement('div');\n    shadow.id = 'authing__retry';\n    shadow.style = 'text-align:center;width: 240px;height: 240px;position: absolute;left: 50%;top: 0px;margin-left: -120px;background-color: rgba(0,0,0, 0.5);line-height:240px;color:#fff;font-weight:600;';\n    var shadowA = document.createElement('a');\n    shadowA.innerHTML = text;\n    shadowA.style = 'color:#fff;border-bottom: 1px solid #fff;cursor: pointer;';\n    shadowA.onclick = aOnClick;\n    shadowA.id = shadowAId;\n    shadow.appendChild(shadowA);\n    return shadow;\n  };\n\n  function genRetry(qrcodeElm, tipText, retryId) {\n    var tip = genTip(tipText);\n    qrcodeWrapper = document.createElement('div');\n    qrcodeWrapper.id = 'authing__qrcode-wrapper';\n    qrcodeWrapper.style = 'text-align: center;position: relative;';\n    var qrcodeImage = genImage('https://usercontents.authing.cn/authing_user_manager_wxapp_qrcode.jpg');\n\n    if (!needGenerate) {\n      qrcodeImage.style = 'margin-top: 12px;';\n    } else {\n      qrcodeImage.style = 'margin-top: 16px;';\n    }\n\n    qrcodeImage.onload = function () {\n      unloading();\n    };\n\n    var shadow = genShadow(retryTips || '点击重试', function () {\n      start();\n    }, retryId || '__authing_retry_btn');\n    qrcodeWrapper.appendChild(qrcodeImage);\n    qrcodeWrapper.appendChild(shadow);\n    qrcodeWrapper.appendChild(tip);\n    qrcodeElm.appendChild(qrcodeWrapper);\n  }\n\n  start = function start() {\n    loading();\n    self.genQRCode(self.opts.userPoolId).then(function (qrRes) {\n      qrRes = qrRes.data;\n\n      if (qrRes.code !== 200) {\n        genRetry(qrcodeNode, qrRes.message);\n\n        if (onError) {\n          onError(qrRes);\n        }\n      } else {\n        var qrcode = qrRes.data;\n\n        if (onQRCodeLoad) {\n          onQRCodeLoad(qrcode);\n        }\n\n        sessionStorage.qrcodeUrl = qrcode.qrcode;\n        sessionStorage.qrcode = JSON.stringify(qrcode);\n\n        if (qrcodeNode) {\n          qrcodeWrapper = document.createElement('div');\n          qrcodeWrapper.id = 'authing__qrcode-wrapper';\n          qrcodeWrapper.style = 'text-align: center;position: relative;';\n          var qrcodeImage = genImage(qrcode.qrcode);\n\n          qrcodeImage.onload = function () {\n            unloading();\n\n            if (onQRCodeShow) {\n              onQRCodeShow(qrcode);\n            }\n\n            var inter = 0;\n            inter = setInterval(function () {\n              if (onIntervalStarting) {\n                onIntervalStarting(inter);\n              }\n\n              self.checkQR().then(function (checkRes) {\n                var checkResult = checkRes.data.data;\n\n                if (checkResult.code === 200) {\n                  clearInterval(inter);\n\n                  if (redirect) {\n                    var shadowX = genShadow(successRedirectTips || '扫码成功，即将跳转', function () {\n                      window.location.href = \"\".concat(checkResult.redirect, \"?code=200&data=\").concat(JSON.stringify(checkResult.data));\n                    }, '__authing_success_redirect_tip');\n                    setTimeout(function () {\n                      window.location.href = \"\".concat(checkResult.redirect, \"?code=200&data=\").concat(JSON.stringify(checkResult.data));\n                    }, 600);\n                    qrcodeWrapper.appendChild(shadowX);\n                  } else {\n                    var shadow = genShadow(successTips || '扫码成功', null, '__authing_success_tip');\n                    qrcodeWrapper.appendChild(shadow);\n\n                    if (onSuccess) {\n                      onSuccess(checkResult);\n                    }\n                  }\n                }\n              });\n            }, interval);\n          };\n\n          var tip = genTip(tips || '使用 <strong>微信</strong> 或小程序 <strong>身份管家</strong> 扫码登录');\n          qrcodeWrapper.appendChild(qrcodeImage);\n          qrcodeWrapper.appendChild(tip);\n          qrcodeNode.appendChild(qrcodeWrapper);\n        }\n      }\n    })[\"catch\"](function (error) {\n      genRetry(qrcodeNode, failedTips || '网络出错，请重试', '__authing_failed_tip');\n\n      if (onError) {\n        onError(error);\n      }\n    });\n  };\n\n  start();\n}\n\n//# sourceURL=webpack://Authing/./src/functions/startWXAppScaning.js?");

/***/ }),

/***/ "./src/functions/unbindEmail.js":
/*!**************************************!*\
  !*** ./src/functions/unbindEmail.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.unbindEmail = unbindEmail;\n\nfunction unbindEmail(variables) {\n  return this.UserServiceGql.request({\n    operationName: \"unbindEmail\",\n    query: \"mutation unbindEmail(\\n      $user: String,\\n      $client: String,\\n    ){\\n      unbindEmail(\\n        user: $user,\\n        client: $client,\\n      ) {\\n        _id\\n        email\\n        emailVerified\\n        username\\n        nickname\\n        company\\n        photo\\n        browser\\n        registerInClient\\n        registerMethod\\n        oauth\\n        token\\n        tokenExpiredAt\\n        loginsCount\\n        lastLogin\\n        lastIP\\n        signedUp\\n        blocked\\n        isDeleted\\n      }\\n    }\",\n    variables: variables\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/unbindEmail.js?");

/***/ }),

/***/ "./src/functions/unbindOAuth.js":
/*!**************************************!*\
  !*** ./src/functions/unbindOAuth.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.unbindOAuth = unbindOAuth;\n\nfunction unbindOAuth(variables) {\n  if (!variables) {\n    throw Error(\"options is not provided\");\n  }\n\n  if (!variables.type) {\n    throw Error(\"type in options is not provided\");\n  }\n\n  return this.UserServiceGql.request({\n    operationName: \"unbindOtherOAuth\",\n    query: \"mutation unbindOtherOAuth(\\n      $user: String,\\n      $client: String,\\n      $type: String!\\n    ){\\n      unbindOtherOAuth(\\n        user: $user,\\n        client: $client,\\n        type: $type\\n      ) {\\n        _id\\n        user\\n        client\\n        type\\n        userInfo\\n        unionid\\n        createdAt\\n      }\\n    }\",\n    variables: variables\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/unbindOAuth.js?");

/***/ }),

/***/ "./src/functions/update.js":
/*!*********************************!*\
  !*** ./src/functions/update.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.update = update;\n\nvar _encryption = _interopRequireDefault(__webpack_require__(/*! ../utils/_encryption */ \"./src/utils/_encryption.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction update(options) {\n  var _this = this;\n\n  var self = this;\n\n  if (!options) {\n    throw Error('options is not provided');\n  } // eslint-disable-next-line no-underscore-dangle\n\n\n  if (!options._id) {\n    throw Error('_id in options is not provided');\n  }\n\n  if (options.password) {\n    options.password = (0, _encryption[\"default\"])(options.password);\n    options.oldPassword = (0, _encryption[\"default\"])(options.oldPassword);\n  }\n\n  options.registerInClient = self.userPoolId;\n  var keyTypeList = {\n    _id: 'String!',\n    email: 'String',\n    emailVerified: 'Boolean',\n    username: 'String',\n    nickname: 'String',\n    company: 'String',\n    photo: 'String',\n    oauth: 'String',\n    browser: 'String',\n    password: 'String',\n    oldPassword: 'String',\n    registerInClient: 'String!',\n    phone: 'String',\n    token: 'String',\n    tokenExpiredAt: 'String',\n    loginsCount: 'Int',\n    lastLogin: 'String',\n    lastIP: 'String',\n    signedUp: 'String',\n    blocked: 'Boolean',\n    isDeleted: 'Boolean'\n  };\n  var returnFields = \"_id\\n    email\\n    emailVerified\\n    username\\n    nickname\\n    company\\n    photo\\n    browser\\n    registerInClient\\n    registerMethod\\n    oauth\\n    phone\\n    token\\n    tokenExpiredAt\\n    loginsCount\\n    lastLogin\\n    lastIP\\n    signedUp\\n    blocked\\n    isDeleted\";\n\n  function generateArgs(opts) {\n    var args = [];\n    var argsFiller = [];\n    var argsString = ''; // eslint-disable-next-line no-restricted-syntax\n\n    for (var key in opts) {\n      if (keyTypeList[key]) {\n        args.push(\"$\".concat(key, \": \").concat(keyTypeList[key]));\n        argsFiller.push(\"\".concat(key, \": $\").concat(key));\n      }\n    }\n\n    argsString = args.join(', ');\n    return {\n      args: args,\n      argsString: argsString,\n      argsFiller: argsFiller\n    };\n  }\n\n  if (options.photo) {\n    var photo = options.photo;\n\n    if (typeof photo !== 'string') {\n      return this._uploadAvatar(options).then(function (opts) {\n        var arg = generateArgs(opts);\n        return _this.UserServiceGql.request({\n          operationName: 'UpdateUser',\n          query: \"\\n            mutation UpdateUser(\".concat(arg.argsString, \"){\\n              updateUser(options: {\\n                \").concat(arg.argsFiller.join(', '), \"\\n              }) {\\n              \").concat(returnFields, \"\\n              }\\n            }\\n          \"),\n          variables: opts\n        });\n      });\n    }\n  }\n\n  var args = generateArgs(options);\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'UpdateUser',\n      query: \"\\n      mutation UpdateUser(\".concat(args.argsString, \"){\\n        updateUser(options: {\\n          \").concat(args.argsFiller.join(', '), \"\\n        }) {\\n          \").concat(returnFields, \"\\n        }\\n      }\\n    \"),\n      variables: options\n    });\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/update.js?");

/***/ }),

/***/ "./src/functions/updateFailedTips.js":
/*!*******************************************!*\
  !*** ./src/functions/updateFailedTips.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.updateFailedTips = updateFailedTips;\n\nfunction updateFailedTips(tips) {\n  document.getElementById('__authing_failed_tip').innerHTML = tips;\n}\n\n//# sourceURL=webpack://Authing/./src/functions/updateFailedTips.js?");

/***/ }),

/***/ "./src/functions/updateRetryTips.js":
/*!******************************************!*\
  !*** ./src/functions/updateRetryTips.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.updateRetryTips = updateRetryTips;\n\nfunction updateRetryTips(tips) {\n  document.getElementById('__authing_retry_btn').innerHTML = tips;\n}\n\n//# sourceURL=webpack://Authing/./src/functions/updateRetryTips.js?");

/***/ }),

/***/ "./src/functions/updateRolePermissions.js":
/*!************************************************!*\
  !*** ./src/functions/updateRolePermissions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.updateRolePermissions = updateRolePermissions;\n\nfunction updateRolePermissions(options) {\n  var _this = this;\n\n  if (!options) {\n    throw Error('options is not provided.');\n  }\n\n  var variables = {\n    client: this.userPoolId,\n    name: options.name,\n    permissions: options.permissions,\n    _id: options.roleId\n  };\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'UpdateRole',\n      query: \"\\n      mutation UpdateRole(\\n        $_id: String!\\n        $name: String!\\n        $client: String!\\n        $descriptions: String\\n        $permissions: String\\n      ) {\\n        updateRole(\\n          _id: $_id\\n          name: $name\\n          client: $client\\n          descriptions: $descriptions\\n          permissions: $permissions\\n        ) {\\n          _id,\\n          name,\\n          client,\\n          descriptions,\\n          permissions\\n        }\\n      }\\n    \",\n      variables: variables\n    }, 'ownerToken');\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/updateRolePermissions.js?");

/***/ }),

/***/ "./src/functions/updateSuccessRedirectTips.js":
/*!****************************************************!*\
  !*** ./src/functions/updateSuccessRedirectTips.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.updateSuccessRedirectTips = updateSuccessRedirectTips;\n\nfunction updateSuccessRedirectTips(tips) {\n  document.getElementById('__authing_success_redirect_tip').innerHTML = tips;\n}\n\n//# sourceURL=webpack://Authing/./src/functions/updateSuccessRedirectTips.js?");

/***/ }),

/***/ "./src/functions/updateSuccessTips.js":
/*!********************************************!*\
  !*** ./src/functions/updateSuccessTips.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.updateSuccessTips = updateSuccessTips;\n\nfunction updateSuccessTips(tips) {\n  document.getElementById('__authing_success_tip').innerHTML = tips;\n}\n\n//# sourceURL=webpack://Authing/./src/functions/updateSuccessTips.js?");

/***/ }),

/***/ "./src/functions/user.js":
/*!*******************************!*\
  !*** ./src/functions/user.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.user = user;\n\nfunction user(options) {\n  var _this = this;\n\n  if (!options) {\n    throw Error('options is not provided');\n  }\n\n  if (!options.id) {\n    throw Error('id in options is not provided');\n  }\n\n  options.registerInClient = this.userPoolId;\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'user',\n      query: \"query user($id: String!, $registerInClient: String!){\\n      user(id: $id, registerInClient: $registerInClient) {\\n        _id\\n        unionid\\n        email\\n        emailVerified\\n        username\\n        nickname\\n        company\\n        photo\\n        browser\\n        registerInClient\\n        registerMethod\\n        oauth\\n        token\\n        tokenExpiredAt\\n        loginsCount\\n        lastLogin\\n        lastIP\\n        signedUp\\n        blocked\\n        isDeleted\\n        userLocation {\\n          _id\\n          when\\n          where\\n        }\\n        userLoginHistory {\\n          totalCount\\n          list {\\n            _id\\n            when\\n            success\\n            ip\\n            result\\n          }\\n        }\\n      }\\n    }\",\n      variables: options\n    }, 'ownerToken');\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/user.js?");

/***/ }),

/***/ "./src/functions/userPatch.js":
/*!************************************!*\
  !*** ./src/functions/userPatch.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.userPatch = userPatch;\n\nfunction userPatch(options) {\n  var _this = this;\n\n  if (!options) {\n    throw Error('options is not provided');\n  }\n\n  if (!options.ids) {\n    throw Error('ids in options is not provided');\n  }\n\n  options.registerInClient = this.userPoolId;\n  return this.FetchToken.then(function () {\n    return _this.UserServiceGql.request({\n      operationName: 'userPatch',\n      query: \"query userPatch($ids: String!){\\n      userPatch(ids: $ids) {\\n        list {\\n          _id\\n          unionid\\n          email\\n          emailVerified\\n          username\\n          nickname\\n          company\\n          photo\\n          browser\\n          registerInClient\\n          registerMethod\\n          oauth\\n          token\\n          tokenExpiredAt\\n          loginsCount\\n          lastLogin\\n          lastIP\\n          signedUp\\n          blocked\\n          isDeleted\\n          userLocation {\\n            _id\\n            when\\n            where\\n          }\\n          userLoginHistory {\\n            totalCount\\n            list {\\n              _id\\n              when\\n              success\\n              ip\\n              result\\n            }\\n          }\\n        }\\n        totalCount\\n      }\\n    }\",\n      variables: options\n    }, 'ownerToken');\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/userPatch.js?");

/***/ }),

/***/ "./src/functions/verifyResetPasswordVerifyCode.js":
/*!********************************************************!*\
  !*** ./src/functions/verifyResetPasswordVerifyCode.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.verifyResetPasswordVerifyCode = verifyResetPasswordVerifyCode;\n\nfunction verifyResetPasswordVerifyCode(options) {\n  if (!options) {\n    throw Error(\"options is not provided\");\n  }\n\n  if (!options.email) {\n    throw Error(\"email in options is not provided\");\n  }\n\n  if (!options.verifyCode) {\n    throw Error(\"verifyCode in options is not provided\");\n  }\n\n  options.client = this.userPoolId;\n  return this.UserClient.request({\n    operationName: \"verifyResetPasswordVerifyCode\",\n    query: \"\\n      mutation verifyResetPasswordVerifyCode(\\n        $email: String!,\\n        $client: String!,\\n        $verifyCode: String!\\n      ) {\\n        verifyResetPasswordVerifyCode(\\n          email: $email,\\n          client: $client,\\n          verifyCode: $verifyCode\\n        ) {\\n            message\\n            code\\n        }\\n      }\\n    \",\n    variables: options\n  });\n}\n\n//# sourceURL=webpack://Authing/./src/functions/verifyResetPasswordVerifyCode.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TokenManager = __webpack_require__(/*! ./TokenManager */ \"./src/TokenManager.js\")[\"default\"];\n\nvar _require = __webpack_require__(/*! ./GraphQL */ \"./src/GraphQL.js\"),\n    GraphQLClient = _require.GraphQLClient;\n\nvar configs = __webpack_require__(/*! ./configs */ \"./src/configs.js\")[\"default\"];\n\nvar mods = __webpack_require__(/*! ./functions */ \"./src/functions/index.js\")[\"default\"]; // sdk 的所有参数\n\n\nvar defaultOpts = {\n  useSelfWxapp: false,\n  enableFetchPhone: false,\n  timeout: 10000,\n  preflight: false,\n  cdnPreflight: false,\n  host: {\n    user: 'https://users.authing.cn/graphql',\n    oauth: 'https://oauth.authing.cn/graphql'\n  },\n  preflightUrl: {\n    users: 'https://users.authing.cn/system/status',\n    oauth: 'https://oauth.authing.cn/system/status'\n  },\n  cdnPreflightUrl: 'https://usercontents.authing.cn',\n  accessToken: '',\n  userPoolId: '',\n  secret: '',\n  onInitError: function onInitError(err) {\n    throw err;\n  }\n};\n\nvar Authing = function Authing(options) {\n  var _this = this;\n\n  _classCallCheck(this, Authing);\n\n  this.opts = Object.assign({}, defaultOpts, options);\n  this.version = \"3.0.0\";\n  this.tokenManager = TokenManager.getInstance();\n\n  if (options.host) {\n    configs.services.user.host = options.host.user || configs.services.user.host;\n    configs.services.oauth.host = options.host.oauth || configs.services.oauth.host;\n  }\n\n  if (!options.accessToken) {\n    if (!options.userPoolId) {\n      throw new Error('userPoolId is not provided');\n    }\n  } else {\n    // 直接拿 token 初始化\n    TokenManager.getInstance().setToken(options.accessToken);\n  }\n\n  this.UserServiceGql = new GraphQLClient({\n    baseURL: configs.services.user.host,\n    // baseURL: 'http://localhost:5555/graphql',\n    headers: {\n      Authorization: TokenManager.getInstance().getToken()\n    },\n    timeout: this.opts.timeout\n  });\n  this.OAuthServiceGql = new GraphQLClient({\n    baseURL: configs.services.oauth.host,\n    // baseURL: 'http://localhost:5556/graphql',\n    headers: {\n      Authorization: TokenManager.getInstance().getToken()\n    },\n    timeout: this.opts.timeout\n  });\n  this.userPoolId = options.userPoolId;\n\n  if (true) {\n    // NodeJS 环境初始化 sdk 经过网络请求\n    this.secret = options.secret;\n    var queryField = \"{\\n        accessToken\\n        clientInfo {\\n          _id\\n          name\\n          descriptions\\n          jwtExpired\\n          createdAt\\n          isDeleted\\n          logo\\n          emailVerifiedDefault\\n          registerDisabled\\n          showWXMPQRCode\\n          useMiniLogin\\n          allowedOrigins\\n          clientType {\\n            _id\\n            name\\n            description\\n            image\\n            example\\n          }\\n        }\\n      }\";\n    this.FetchToken = this.UserServiceGql.request({\n      operationName: 'getClientWhenSdkInit',\n      query: \"query getClientWhenSdkInit {\\n          getClientWhenSdkInit(secret: \\\"\".concat(options.secret, \"\\\", clientId: \\\"\").concat(options.userPoolId, \"\\\")\").concat(queryField, \"\\n        }\")\n    }).then(function (res) {\n      TokenManager.getInstance().setToken(res.accessToken);\n      _this.userPoolSettings = res.clientInfo;\n    })[\"catch\"](this.opts.onInitError);\n  } else {} // 预检 oauth users 服务 或 cdn\n\n\n  this.checkPreflight();\n};\n\nAuthing.prototype = _objectSpread({\n  constructor: Authing\n}, mods);\nmodule.exports = Authing;\n\n//# sourceURL=webpack://Authing/./src/index.js?");

/***/ }),

/***/ "./src/utils/_encryption.js":
/*!**********************************!*\
  !*** ./src/utils/_encryption.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* jshint esversion: 6 */\nvar configs = __webpack_require__(/*! ../configs */ \"./src/configs.js\")[\"default\"];\n\nvar cryptoPolyfill = __webpack_require__(/*! ./crypto-polyfill */ \"./src/utils/crypto-polyfill/index.js\");\n\nvar encryption;\n\nif (configs.inBrowser) {\n  encryption = function encryption(paw) {\n    var encrypt = new cryptoPolyfill.JSEncrypt(); // 实例化加密对象\n\n    encrypt.setPublicKey(configs.openSSLSecret); // 设置公钥\n\n    var encryptoPasswd = encrypt.encrypt(paw); // 加密明文\n\n    return encryptoPasswd;\n  };\n} else {\n  encryption = function encryption(paw) {\n    var publicKey = configs.openSSLSecret;\n    var pawBuffer = Buffer.from(paw); // jsencrypt 库在加密后使用了base64编码,所以这里要先将base64编码后的密文转成buffer\n\n    var encryptText = cryptoPolyfill.publicEncrypt({\n      key: Buffer.from(publicKey),\n      // 如果通过文件方式读入就不必转成Buffer\n      padding: cryptoPolyfill.constants.RSA_PKCS1_PADDING\n    }, pawBuffer).toString('base64');\n    return encryptText;\n  };\n}\n\nmodule.exports = encryption;\n\n//# sourceURL=webpack://Authing/./src/utils/_encryption.js?");

/***/ }),

/***/ "./src/utils/crypto-polyfill/index.js":
/*!********************************************!*\
  !*** ./src/utils/crypto-polyfill/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! crypto */ \"crypto\");\n\n//# sourceURL=webpack://Authing/./src/utils/crypto-polyfill/index.js?");

/***/ }),

/***/ "./src/utils/randomWord.js":
/*!*********************************!*\
  !*** ./src/utils/randomWord.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.randomWord = randomWord;\n\nfunction randomWord(randomFlag, min, max) {\n  var str = '';\n  var range = min;\n  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\n\n  if (randomFlag) {\n    range = Math.round(Math.random() * (max - min)) + min; // 任意长度\n  }\n\n  for (var i = 0; i < range; i += 1) {\n    var pos = Math.round(Math.random() * (arr.length - 1));\n    str += arr[pos];\n  }\n\n  return str;\n}\n\n//# sourceURL=webpack://Authing/./src/utils/randomWord.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack://Authing/external_%22assert%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack://Authing/external_%22crypto%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack://Authing/external_%22http%22?");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=webpack://Authing/external_%22https%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack://Authing/external_%22os%22?");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stream\");\n\n//# sourceURL=webpack://Authing/external_%22stream%22?");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tty\");\n\n//# sourceURL=webpack://Authing/external_%22tty%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack://Authing/external_%22url%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack://Authing/external_%22util%22?");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"zlib\");\n\n//# sourceURL=webpack://Authing/external_%22zlib%22?");

/***/ })

/******/ });