module.exports = function(req, next, token) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
}