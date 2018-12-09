import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title:{
        type:String,
        minlength:3,
        required:true,
    },
    content:{
        type:String,
        minlength:5,
        required:true
    }
},
{
    timestamps:true
});

const Post = model('post', postSchema);

export default Post;