/**
 * Global Variable Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on any of these options, check out:
 * https://sailsjs.com/config/globals
 */

module.exports.globals = {
    _: require('@sailshq/lodash'),
    async: false,
    models: true,
    sails: true,
    mongoClient : require('mongodb').MongoClient,
    mongoUrl :"mongodb://34.243.53.216:27017",
    mongoDatabase : "cureHeart"
};
