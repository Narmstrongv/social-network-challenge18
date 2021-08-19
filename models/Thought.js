const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        //schema needs custom id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            //getter method to format timestamp on query
            //get: createdAtVal => dateFormat(createdAtVal)
        }
    },

    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280
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

        //array of nested documents created with 'reactionSchema'
        //validates data for a reply
        reactions: [ReactionSchema]
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