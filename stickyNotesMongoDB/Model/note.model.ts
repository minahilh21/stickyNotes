import { model, Schema } from 'mongoose';

interface INotes {
    createdAt: Date;
    updatedAt: Date;
    title: String;
    content: String;
    color: String;
}

const notesSchema = new Schema<INotes>({
    createdAt :{
        type: Date,
        default: () => Date.now(),
        required: true
    },
    updatedAt :{
        type: Date,
        default: () => Date.now(),
        required: true
    },
    title :{
        type: String,
        required: true
    },
    content :{
        type: String,
        required: true
    },
    color :{
        type: String,
        required: true
    },
});

export const noteModel = model<INotes> ('Note', notesSchema);
