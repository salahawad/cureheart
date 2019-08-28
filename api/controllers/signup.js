module.exports = {
    friendlyName: 'Sign UP',
  
    description: 'Registers a user.',
  
    inputs: {
        username : {
            description : "The username of the user",
            type : "string",
            required : true
        },
        password : {
            description : "The password of the user",
            type : "string",
            required : true
        },
        email : {
            description : "The email of the user",
            type : "string",
            required : true
        }, 
        phone : {
            description : "The phone number of the user",
            type : "string",
            required : false
        },
        userProfile : {
            description : "The type of the user [doctor | patient]",
            type : "string",
            required : true
        }
    },
  
    exits: sails.config.custom.responseTypes,
  
    fn: async function (inputs, exits) {
        // Check if the user type is valid
        if(inputs.userProfile !== "patient" && inputs.userProfile !== "patient")
            return exits.badRequest({msg : "Invalid userType."});
        // Check if a user with the provided email already exists in the database
        try { 
            let mongoClient = await sails.helpers.mongoConnect.with({});
            let existingUser = await mongoClient.db("cureHeart").collection("users").find({email : inputs.email}).toArray();
            // If the user already exists in the database, generate an error
            if(existingUser && existingUser.length === 1)
                return exits.badRequest({msg : `User with email ${inputs.email} is already registered`});
            // If multiple users were already existing in the database, using the same email, generate an error
            if(existingUser && existingUser.length > 1)
                return exits.badRequest({msg : `There exists ${existingUser.length} users registered with the following email: ${inputs.email}`});
            // Add the user into the users database
            let insertedUser = await mongoClient.db("cureHeart").collection("users").insertOne({
                username : inputs.username,
                email : inputs.email,
                password : inputs.password,
                phone : inputs.phone,
                userProfile : inputs.userProfile
            });
            mongoClient.close();
            return exits.ok(insertedUser.ops[0]);
        } catch (error) {
            console.log(error);
            return exits.serverError({msg : `Error while registering user with email: ${inputs.email}`});
        }
    }
};
  