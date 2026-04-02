const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        _
    },
    content: {
        type: string,
        required: true,
    },
    status: {
        type: string,
        enum: ['active', 'inactive']
    }
}, { timestamps: true })
//Indexin for improving query performance
NoteSchema.index({ title: 1 })
NoteSchema.index({ content: 1 })
module.exports = mongoose.model("Note", NoteSchema)