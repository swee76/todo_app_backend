import mongoose from 'mongoose'

const { Schema } = mongoose

const todoSchema = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        titleName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true
        },
        attachmentList: {
            type: JSON
        },
        status: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('TodoCard', todoSchema)