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
    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//virtual that retrieves length of the thoughts 'reactions' array field on query
// ThoughtSchema.virtual('reactionCount').get(function() {
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;