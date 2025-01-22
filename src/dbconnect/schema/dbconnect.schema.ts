import mongoose from "mongoose";
export const authschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

import { Document } from "mongoose";
export interface dbconnectdocument extends Document{
readonly name:string
readonly age:number
readonly email:string
}

export interface authdto{
    name:string,
    age:number,
    email:string
}