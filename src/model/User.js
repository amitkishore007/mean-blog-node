import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        minlength: 5
    }
},
{
    timestamps:true
});

userSchema.pre('save', function (next) {

    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            next();
        });
    });
});

const User = model('user', userSchema);

export default User;