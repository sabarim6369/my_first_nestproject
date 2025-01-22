import { Schema,Document } from 'mongoose';
export const UserSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  password: { type: String },
});

export interface User extends Document{
    name:string,
    age:number,
    password:string
}