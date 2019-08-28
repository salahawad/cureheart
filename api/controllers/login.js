module.exports = {
    friendlyName: 'Login',
  
    description: 'Authenticates a user, and returns its information.',
  
    inputs: {
        password : {
            description : "The password of the user",
            type : "string",
            required : true
        },
        email : {
            description : "The email of the user",
            type : "string",
            required : true
        }
    },
  
    exits: sails.config.custom.responseTypes,
  
    fn: async function (inputs, exits) {
        // Check if a user with the provided email already exists in the database
        try { 
            let mongoClient = await sails.helpers.mongoConnect.with({});
            let existingUser = await mongoClient.db("cureHeart").collection("users").find({email : inputs.email}).toArray();
            // If multiple users were already existing in the database, using the same email, generate an error
            if(existingUser && existingUser.length > 1)
                return exits.badRequest({msg : `There exists ${existingUser.length} users registered with the following email: ${inputs.email}`});
            // If no users is found in the database, generate an error
            if(!existingUser || existingUser.length === 0)
                return exits.badRequest({msg : `There exists no registered users with this email: ${inputs.email}`});
            // If the password in the database does not match the supplied password, generate an error
            if(inputs.password !== existingUser[0].password)
                return exits.badRequest({msg : `Incorrect password for user: ${inputs.email}`});
            mongoClient.close();
            return exits.ok(existingUser[0]);
        } catch (error) {
            console.log(error);
            return exits.serverError({msg : `Error while registering user with email: ${inputs.email}`});
        }
    }
};
  