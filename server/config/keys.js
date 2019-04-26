if (process.env.NODE_ENV === 'production') {
    //in production 
    module.exports = require('./prod');
} else {
    //in development, use local keys
    module.exports = require('./dev');
}
