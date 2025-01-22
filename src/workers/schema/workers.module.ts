import mongoose from "mongoose";
export const workersschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        },
     age:{
        type:Number,
        required:true
     }
})

import { Document } from "mongoose";
export interface workersdocument extends Document{
    name: string;
    email:string;
    age:number;
}