const config = {};

config.port = process.env.PORT || 5000;
config.dbURL = process.env.DATABASEURL || "mongodb+srv://myworldbox:kl;'@uniletsbefd.25hac.mongodb.net/myFirstDatabase?retryWrites=true";

module.exports = config;
