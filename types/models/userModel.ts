import mongoose, { Model, Schema } from "mongoose";
import { User } from "../DTO/user";
import { Todo } from "../DTO/todo";


 const todoSchma:Schema<Todo> = new mongoose.Schema({
    titel:{
        type:String,
        required: [true, "giv my titel"],
    },

    body:{
        type:String,
        required: [true, "you need tall what are you doing"],
    }
})

const userSchma:Schema<User> = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "user name is require"],
    },
    password: {
        type: String,
        required: [true, "worning password"],
    },
    todos:{
        type:[todoSchma]
    }
})

const UserNodel:Model<User> = mongoose.model('user', userSchma)

export default UserNodel
