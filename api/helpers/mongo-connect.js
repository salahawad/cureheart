let client = {};

module.exports = {
    friendlyName: 'Mongo connection',
  
    description: 'return a Mongo Connection',
  
    inputs: {},
  
    exits: {},
  
    fn: async function (inputs, exits) {
        try {
            // Attemp to create a Mongo Connection
            client = await sails.config.globals.mongoClient.connect(sails.config.globals.mongoUrl, { useNewUrlParser: true });
            if(!client)
                throw "Failed to create a Mongo client";
            return exits.success(client);
        } catch (error) {
            console.log(error);
            throw "Unable to connect to Mongo";
        }
    }
};
  