/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {
    "responseTypes" : {
        "ok" : {
            "description" : `This method is used to send a 200 ("Ok") response back down to the client.`,
            "responseType" : "ok"
        },
        "badRequest" : {
            "description" : `This method is used to send a 400 ("Bad Request") response back down to the client indicating that the request is invalid. 
                This usually means it contained invalid parameters or headers, or tried to do something impossible based on your app logic.`,
            "responseType" : "badRequest"
        },
        "forbidden" : {
            "description" : `This method is used to send a 403 ("Forbidden") response back down to the client indicating that the request is not allowed. 
                This usually means the user-agent tried to do something it was not allowed to do, like change the password of another user.`,
            "responseType" : "forbidden"
        },
        "notFound" : {
            "description" : `This method is used to send a 404 ("Not Found") response`,
            "responseType" : "notFound"
        },
        "serverError" : {
            "description" : `This method is used to send a 500 ("Server Error") response back down to the client indicating that some kind of server error 
                occurred (i.e. the error is not the requesting user agent's fault).`,
            "responseType" : "serverError"
        }
    }
};
