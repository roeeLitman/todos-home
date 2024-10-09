import { Document } from 'mongoose'
import { Todo } from "./todo";

export interface User extends Document{
    name:string,
    password: string,
    todos: Todo[]
}