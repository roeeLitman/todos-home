import { Document } from 'mongoose'

export interface Todo extends Document {
    titel:string
    body:string
}