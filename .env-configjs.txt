const prod = 'production' === process.env.NODE_ENV

module.exports = {
    'process.env.API_URL': prod ? 'http://api.dev.com' : 'http://api.local.com/',
}