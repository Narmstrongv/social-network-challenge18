const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //must be between 1-280 charcs
        },

        createdBy: {
            type: Date,
            default: Date.now,
            //getter method to format timestamp on query
            //get: createdAtVal => dateFormat(createdAtVal)
        },

        username: {
            type: String,
            required: true,
        },

        reactions: {
            //array of nested documents created with 'reactionSchema'
        }
    }
)