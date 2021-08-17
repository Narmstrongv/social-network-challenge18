const { Schema, model } = require('mongoose');


const UserSchema = new Schema(
    {
        username: {
            type: String,
            //Unique?
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            //Unique
            //must match valid email address (mongoose: matching validation)
        },

        // thoughts: {
        //     //array of _id values ref Thought model
        // },

        // friends: {
        //     //array of _id values refereing User model(self-reference)
        // },
        
        //comments: required?


    }

    // {
    //     toJSON: {
    //         virtuals: true,
    //         //need getters?
    //         getters: true
    //     },
    //     id: false
    // }
);

//virtual that retrueves length of users 'friends' array field on query
// UserSchema.virtual('friendcount').get(function() {
// });

const User = model('User', UserSchema);

module.exports = User;